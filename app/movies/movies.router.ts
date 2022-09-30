import { Router, Request, Response } from 'express';
import { MoviesService } from './movies.service';

export const MoviesRouter = Router();

const moviesService = new MoviesService();

MoviesRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json(moviesService.getMovies());
});

MoviesRouter.get('/:id([0-9]+)', (req: Request, res: Response) => {
  const foundMovie = moviesService.getMovie(parseInt(req.params.id));

  if (foundMovie) {
    res.status(200).json(foundMovie);
  } else {
    res.status(404).json({ message: 'Movie Not Found'});
  }
});

MoviesRouter.post('/', (req: Request, res: Response) => {
  const newMovie = {
    id: 0,
    title: req.body.title || '',
    year: req.body.year || '',
    genre: req.body.genre || '',
    director: req.body.director || '',
    stars: req.body.stars || ''
  };

  if (!newMovie.title ||
      !newMovie.year.toString().match(/^[0-9]{4}$/g) ||
      !newMovie.genre ||
      !newMovie.director ||
      !newMovie.stars) {
    res.status(400).json({ message: 'Bad Request' });
  } else {
    const newId = moviesService.createMovie(newMovie);
    if (newId) {
      res.status(201).json({
        message: 'Movie Created',
        location: '/movies/' + newId
      });
    } else {
      res.status(500).json({ message: 'An Error Ocurred while Creating Movie'});
    }
  }
});

MoviesRouter.put('/:id', (req: Request, res: Response) => {
  const updatedMovie = {
    id: parseInt(req.params.id),
    title: req.body.title || '',
    year: req.body.year || '',
    genre: req.body.genre || '',
    director: req.body.director || '',
    stars: req.body.stars || ''
  };

  if (!updatedMovie.id ||
      !updatedMovie.title ||
      !updatedMovie.year.toString().match(/^[0-9]{4}$/g) ||
      !updatedMovie.genre ||
      !updatedMovie.director ||
      !updatedMovie.stars) {
    res.status(400).json({ message: 'Bad Request' });
  } else {
    const updatedId = moviesService.updateMovie(updatedMovie);

    if (updatedId) {
      res.status(200).json({
        message: 'Movie Updated',
        location: '/movies/' + updatedId
      });
    } else  {
      res.status(404).json({ message: 'ID Not Found' });
    }
  }
});

MoviesRouter.delete('/:id', (req: Request, res: Response) => {
  const isDeleted = moviesService.deleteMovie(parseInt(req.params.id));

  if (isDeleted) {
    res.status(200).json({ message: 'Movie ' + req.params.id + ' deleted' });
  } else {
    res.status(404).json({ message: 'ID Not Found' });
  }
});

MoviesRouter.get('/:id', (req: any, res: any) => {
  return moviesService.rateMovie(req.params.id, req.body.rating);
});