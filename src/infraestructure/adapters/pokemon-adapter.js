import { config } from '../../config/environments/config';
import axios from 'axios';

export const getPokemon = async (nombre) => {
  try {
    const url = `${config.endPoints.pokemon.getPokemon.replace(':nombre', nombre)}`;
    const response = await axios.get(url);
    // const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    return (response.data);
  } catch (error) {
    error
      .status(500)
      .json({ message: 'Error al obtener los datos de la API externa' });
  }
};
