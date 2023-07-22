import * as companyRepository from '../../infraestructure/repositories/sqlserver-repository';

export const getCompanies = async (nombre) => {
  return (await companyRepository.getCompaniesDB(nombre)).recordset;
//   return null;
};