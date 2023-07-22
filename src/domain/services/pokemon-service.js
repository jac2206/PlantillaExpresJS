import * as pokemonAdapter from '../../infraestructure/adapters/pokemon-adapter';

export const getPokemon = async (nombre) => {
  return pokemonAdapter.getPokemon(nombre);
};