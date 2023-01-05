const state = {
  movies: [],
};

function getMovies() {
  return state.movies;
}

function setMovies(movie) {
  state.movies = movie;
}

export default {
  getMovies,
  setMovies,
};
