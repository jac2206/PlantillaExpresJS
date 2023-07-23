import sql from 'mssql';
import { config } from '../../config/environments/config';

const client = new sql.ConnectionPool(config.SQLServer);

client.connect();

export const getCompaniesDB = async () => {
  return await client.query('SELECT * FROM dbo.Company');
};

export const getCompanyDB = async (partnerCode) => {
  // return await client.query(
  //   `SELECT CO.id, CO.partnerCode, CO.nit, CO.verificationCode, CO.name, CO.comercialName, CO.shortName ,CO.categoryCode , CAT.categoryName AS category, CO.email, CO.webSite, CO.typeCLM, CO.pointsMoneyRatioCLM, CO.billingTypeCLM, CO.accumulationPeriodCLM, CO.categoriesJSON, CO.currency, CO.address, CO.country, CO.regionCode, CO.regionName, CO.cityName, CO.cityCode, CO.neighbourhood, CO.geolocalizationJSON, CO.isParther, CO.isClient, CO.status, CO.initDate, CO.endDate, CO.lastUpdate, CO.additionalInfoJSON FROM dbo.Company AS CO INNER JOIN dbo.Category AS CAT ON CAT.categoryCode = CO.categoryCode WHERE CO.partnerCode = ${'\''+partnerCode+'\''}`
  // );
  return await client.query(
    `SELECT CO.id, CO.partnerCode, CO.nit, CO.verificationCode, CO.name, CO.comercialName, CO.shortName ,CO.categoryCode , CAT.categoryName AS category, CO.email, CO.webSite, CO.typeCLM, CO.pointsMoneyRatioCLM, CO.billingTypeCLM, CO.accumulationPeriodCLM, CO.categoriesJSON, CO.currency, CO.address, CO.country, CO.regionCode, CO.regionName, CO.cityName, CO.cityCode, CO.neighbourhood, CO.geolocalizationJSON, CO.isParther, CO.isClient, CO.status, CO.initDate, CO.endDate, CO.lastUpdate, CO.additionalInfoJSON FROM dbo.Company AS CO INNER JOIN dbo.Category AS CAT ON CAT.categoryCode = CO.categoryCode WHERE CO.partnerCode = '${partnerCode}'`
  );
};
