import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

import { MoviesRouter } from './movies/movies.router';

export const app = express();
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.any());

app.use('/movies', MoviesRouter);
