import * as pokemonService from '../../domain/services/pokemon-service';

export const getPokemon = async (req, res, next) => {
  // #swagger.tags = ['Users']
  try {
    const { nombre } = req.params;
    // const { locationCode: lc, partnerCode: pc } = req.query;
    const response = await pokemonService.getPokemon(nombre);
    /* #swagger.responses[200] = { 
      schema: {  $ref: '#/definitions/GetBalance' }
    } */
    /* #swagger.responses[500] = { 
      schema: {  $ref: '#/definitions/DefaultError' }
    } */
    res.status(200).json(response);
    // res.status(200).json('ok');
  } catch (error) {
    // Forma para pasar al exception handler
    next(error);
  }
};
