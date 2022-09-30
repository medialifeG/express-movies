import { MoviesService } from './movies.service';

let moviesService: MoviesService;

describe('MoviesService', () => {

  beforeEach(() => {
    moviesService = new MoviesService();
  });

  it('getMovies: should return all results', async () => {
    const result = moviesService.getMovies();
    
    expect(result.length).toBe(4);
  });

  it('getMovie: should return one result when valid', async () => {
    const result = moviesService.getMovie(1);
    
    expect(result?.id).toBe(1);
  });

  it('getMovie: should return null when invalid', async () => {
    const result = moviesService.getMovie(1000);
    
    expect(result).toBeNull();
  });

  it('createMovie: should create movie', async () => {
      // stub
    expect(true).toBeTruthy();
  });

  it('updateMove: should update movie with valid id', async () => {
      // stub
    expect(true).toBeTruthy();
  });

  it('updateMovie: should do nothing with invalid id', async () => {
      // stub
    expect(true).toBeTruthy();
  });

  it('deleteMovie: should delete movie with valid id', async () => {
      // stub
    expect(true).toBeTruthy();
  });

  it('deleteMovie: should delete movie with valid id', async () => {
      // stub
    expect(true).toBeTruthy();
  });

  it('deleteMovie: should do nothing with invalid id', async () => {
      // stub
    expect(true).toBeTruthy();
  });
});