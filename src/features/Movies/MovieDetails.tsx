import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Movie } from "../../reducers/movies";
import styles from "./MovieDetails.module.scss";

function MovieDetails({ movies }: { movies: Movie[] }) {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return <div className={styles.error}>Movie not found</div>;
  }

  return (
    <div className={styles.details}>
      <img className={styles.poster} src="/movie-thumb.png" alt={movie.title} />
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <p className={styles.overview}>{movie.overview}</p>
        <p className={styles.popularity}>Popularity: {movie.popularity}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});

export default connect(mapStateToProps)(MovieDetails);
