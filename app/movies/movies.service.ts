import { MOVIES } from '../data';
import { Movie} from '../types';

export class MoviesService {
  constructor() {}

  getMovies(): Movie[] {
    return MOVIES;
  }

  getMovie(movieId: number): Movie | null {
    const foundMovie = MOVIES.filter((movie: Movie) => movie.id === movieId);

    return foundMovie.length === 1 ? foundMovie[0] : null;
  }

  createMovie(newMovie: Movie): number | null {
    const newId = MOVIES.length ?  MOVIES[MOVIES.length - 1].id + 1 : 1;
    newMovie.id = newId;
    MOVIES.push(newMovie);

    return newId;
  }

  updateMovie(updatedMovie: Movie) {
    const updateIndex = MOVIES.map((movie: Movie) => movie.id).indexOf(updatedMovie.id);

    if (updateIndex !== -1) {
      MOVIES[updateIndex] = updatedMovie;
      return updatedMovie.id
    } else  {
      return null;
    }
  }

  deleteMovie(movieId: number): boolean {
    const deleteIndex = MOVIES.map((movie: Movie) => movie.id).indexOf(movieId);

    if (deleteIndex !== -1) {
      MOVIES.splice(deleteIndex, 1);

      return true;
    } else {
      return false;
    }
  }
}