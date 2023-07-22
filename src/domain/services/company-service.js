import * as companyRepository from '../../infraestructure/repositories/sqlserver-repository';

export const getCompanies = async () => {
  return (await companyRepository.getCompaniesDB()).recordset;
//   return null;
};

export const getCompany = async (partnerCode) => {
  return (await companyRepository.getCompanyDB(partnerCode)).recordset[0];
  //   return null;
};