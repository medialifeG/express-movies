import axios from 'axios';

import { MOVIES } from '../data';
import { Movie} from '../types';

const OMDB_INFO_URL = 'http://www.omdbapi.com/';
const OMDB_POSTER_URL = 'http://img.omdbapi.com/';
export class MoviesService {
  constructor() {}

  getMovies(): Movie[] {
    return MOVIES;
  }

  getMovie(movieId: number): Movie | null {
    const foundMovie = MOVIES.filter((movie: Movie) => movie.id === movieId);

    return foundMovie.length === 1 ? foundMovie[0] : null;
  }

  async getPoster(movie: Movie) {
    // return the poster image for the passed-in movie
    // NOTE: OMDB's poster api needs the imdbID
    // you can search OMDB's movie info by title to find it.

    return Promise.resolve('poster goes here');
  }

  getOmdbMovieInfo(title: string) {
    const url = `${OMDB_INFO_URL}?apikey=${process.env.OMDB_API_KEY}&t=${title}`;
    return axios.get(url);
  }

  getOmdbMoviePoster(imdbId: string) {
    const url = `${OMDB_POSTER_URL}?apikey=${process.env.OMDB_API_KEY}&i=${imdbId}`;
    return axios.get(url);
  }

  // createMovie(newMovie: Movie): number | null {
  //   const newId = MOVIES.length ?  MOVIES[MOVIES.length - 1].id + 1 : 1;
  //   newMovie.id = newId;
  //   MOVIES.push(newMovie);

  //   return newId;
  // }

  // updateMovie(updatedMovie: Movie) {
  //   const updateIndex = MOVIES.map((movie: Movie) => movie.id).indexOf(updatedMovie.id);

  //   if (updateIndex !== -1) {
  //     MOVIES[updateIndex] = updatedMovie;
  //     return updatedMovie.id
  //   } else  {
  //     return null;
  //   }
  // }

  // deleteMovie(movieId: number): boolean {
  //   const deleteIndex = MOVIES.map((movie: Movie) => movie.id).indexOf(movieId);

  //   if (deleteIndex !== -1) {
  //     MOVIES.splice(deleteIndex, 1);

  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}