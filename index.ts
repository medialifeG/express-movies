import express from 'express';
import dotenv from 'dotenv';
import { app } from './app/app';

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});