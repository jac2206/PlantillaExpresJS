import * as companyService from '../../domain/services/company-service';

export const getCompanies = async (req, res, next) => {
  // #swagger.tags = ['partner']
  // #swagger.description = "Obtener partner"
  // #swagger.deprecated = false 
  try {
    // const { limit: limit } = req.query;
    let response = await companyService.getCompanies();
    /* #swagger.responses[200] = { 
      schema: {  $ref: '#/definitions/Partner' }
    } */
    /* #swagger.responses[500] = { 
      schema: {  $ref: '#/definitions/DefaultError' }
    } */
    res.status(200).json(response);
  } catch (error) {
    // Forma para pasar al exception handler
    next(error);
  }
};