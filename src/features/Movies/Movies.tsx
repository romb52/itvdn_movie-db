import { Movie } from "../../reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { MovieCard } from "./MovieCard";

import styles from  "./Movies.module.scss";

function getNowPlaying(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI1MWQ0ZGE5MTA0NzU3OTBiYmYzY2FlZTdjZmMwNSIsIm5iZiI6MTczNzcxNDI1OS4zMTgsInN1YiI6IjY3OTM2YTUzMjVkMjk4MGZiMDIzOTIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NOFpUjXaI59thC0dW8QKbgNm-l3gezxntV2UjZzdWAk'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
}


interface MoviesProps {
    movies: Movie[]
}

function Movies({ movies }: MoviesProps) {
    return (
        <section>
            <div className={styles.list}>
                {movies.map(m => (
                    <MovieCard key={m.id}
                        id={m.id}
                        title={m.title}
                        overview={m.overview}
                        popularity={m.popularity} />
                ))}
            </div>
        </section>
    );
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top
});

const connector = connect(mapStateToProps);

export default connector(Movies);