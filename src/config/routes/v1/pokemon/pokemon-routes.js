import express from 'express';
import { getPokemon } from '../../../../web-api/controllers/pokemon-controller';

export const pokemonRoutes = () => {
  const router = express.Router();
  router.get('/:nombre', getPokemon);
  return router;
};
