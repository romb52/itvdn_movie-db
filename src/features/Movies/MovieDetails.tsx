import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Movie } from "../../reducers/movies";
// import styles from "./MovieDetails.module.scss";
import { Box, CardMedia, Container, Typography } from "@mui/material";

function MovieDetails({ movies }: { movies: Movie[] }) {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return (
      <Box sx={{ pt: 10, pb: 8, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Movie not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ pt: 10, pb: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            image="/movie-thumb.png"
            alt={movie.title}
            sx={{
              width: { xs: "100%", sm: "300px" },
              borderRadius: "10px",
            }}
          />
          <Box sx={{ maxWidth: "600px", textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h4" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem", mt: 2 }}>
              {movie.overview}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#ff6600", mt: 2 }}>
              Popularity: {movie.popularity}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});

export default connect(mapStateToProps)(MovieDetails);
