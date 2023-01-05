import ui from './ui';
import data from './data';
import api from './api';

function updateMovies(movies) {
  data.setMovies(movies);
  ui.renderMovie(data.getMovies());
}

ui.renderPage();
api.getPopularMovies().then((movies) => {
  data.setMovies(movies.results);
  ui.renderMovie(data.getMovies());
});

api.getPopularMovies().then(updateMovies);
