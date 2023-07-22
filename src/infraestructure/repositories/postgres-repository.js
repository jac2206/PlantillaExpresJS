import pkg from 'pg';
import { config } from '../../config/environments/config';

const {Client}=pkg;
const client = new Client(config.postgres);

client.connect();

export const get = async (fields,table,condition) => {

  let sql=`SELECT ${fields} FROM ${table} ${(condition!='')?'WHERE '+condition:''}`;    

  return await client
    .query(sql);
};

export const insert = async (table,fields,values) => {

  let sql=`INSERT INTO ${table} (${fields}) VALUES (${values})`;    

  console.log(sql);
  return await client
    .query(sql);
};

// export const getPartnerDB = async (limit) => {
//   if(limit){
//     return await client.query(`SELECT * FROM "Jac".partner LIMIT ${limit}`);
//   }
//   return await client
//     .query('SELECT * FROM "Jac".partner');};

export const getPartnerDB = async (limit) => {
  if(limit){
    return await client.query(`SELECT id, "partnerCode", nit, "verificationCode", name, "comercialName", "shortName", email, "webSite", "typeCLM", "pointsMoneyRatioCLM", "billingTypeCLM", "accumulationPeriodCLM", category, categories, currency, address, country, "regionCode", "regionName", "cityCode", "cityName", "geolocalization", "isPartner", "isClient", status, "initDate", "endDate", "lastUpdateDate", "additionalInfo" FROM "Company".company LIMIT ${limit}`);
  }
  return await client
    .query('SELECT id, "partnerCode", nit, "verificationCode", name, "comercialName", "shortName", email, "webSite", "typeCLM", "pointsMoneyRatioCLM", "billingTypeCLM", "accumulationPeriodCLM", category, categories, currency, address, country, "regionCode", "regionName", "cityCode", "cityName", "geolocalization", "isPartner", "isClient", status, "initDate", "endDate", "lastUpdateDate", "additionalInfo" FROM "Company".company');};

export const getPartnerXPartnerCodeDB = async (partnerCode) => {
  return await client
    .query(`SELECT id, "partnerCode", nit, "verificationCode", name, "comercialName", "shortName", email, "webSite", "typeCLM", "pointsMoneyRatioCLM", "billingTypeCLM", "accumulationPeriodCLM", category, categories, currency, address, country, "regionCode", "regionName", "cityCode", "cityName", "geolocalization", "isPartner", "isClient", status, "initDate", "endDate", "lastUpdateDate", "additionalInfo" FROM "Company".company WHERE "partnerCode" = ${'\''+partnerCode+'\''}`);};

export const getProductCompanyDB = async (partnerCode) => {
  return await client
    .query(`SELECT CCP."productCode", CP."productName", CCP.status FROM "Company".company_product AS CCP INNER JOIN "Company".product AS CP ON CP."productCode" = CCP."productCode" WHERE CCP."partnerCode" = ${'\''+partnerCode+'\''}`);};

export const getLocationCompanyDB = async (partnerCode) => {
  return await client
    .query(`SELECT "locationCode" FROM "Company".location WHERE "partnerCode" = ${'\''+partnerCode+'\''}`);};
    
export const getBrandCompanyDB = async (partnerCode) => {
  return await client
    .query(`SELECT "brandCode" FROM "Company".brand WHERE "partnerCode" = ${'\''+partnerCode+'\''}`);};

export const getContactsCompanyDB = async (partnerCode) => {
  return await client
    .query(`SELECT DISTINCT CC.name, CP."profileName" ,CPC."profileCode", CPC.email, CPC."phoneNumber", CPC.status FROM "Company".profile_company AS CPC INNER JOIN "Company".contact AS CC ON CC.id = CPC."idContact" INNER JOIN "Company".profile AS CP ON CP."profileCode" = CPC."profileCode" WHERE CPC."partnerCode" = ${'\''+partnerCode+'\''}`);};

export const getPaymentCompanyDB = async (partnerCode) => {
  return await client
    .query(`SELECT "SAPCode", "billingMethodType", "billingMethodNumber", "paymentAccountMethodType", "paymentAccountMethodNumber", status, "initDate" FROM "Company".payment WHERE "partnerCode" = ${'\''+partnerCode+'\''}`);};

export const getDocumentCompanyDB = async (partnerCode) => {
  return await client
    .query(`SELECT "documentName", description, route ,status, "initDate" FROM "Company".document WHERE "partnerCode" = ${'\''+partnerCode+'\''}`);};

export const getLocationsDB = async (partnerCode, limit) => {
  if(limit){
    return await client.query(`SELECT id, "locationCode", "partnerCode", "brandCode", name, description, email, category, cuc, channel, product, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, geolocalization , status, "initDate", "endDate", "lastUpdateDate", "additionalInfo" FROM "Company".location LIMIT ${limit}`);
  }
  return await client
    .query('SELECT id, "locationCode", "partnerCode", "brandCode", name, description, email, category, cuc, channel, product, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, geolocalization , status, "initDate", "endDate", "lastUpdateDate", "additionalInfo" FROM "Company".location');};

export const getLocationDB = async (locationCode) => {
  return await client
    .query(`SELECT id, "locationCode", "partnerCode", "brandCode", name, description, email, category, cuc, channel, product, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, geolocalization , status, "initDate", "endDate", "lastUpdateDate", "additionalInfo" FROM "Company".location WHERE "locationCode" = ${'\''+locationCode+'\''}`);};

export const getContactsLocationDB = async (locationCode) => {
  return await client
    .query(`SELECT DISTINCT CC.name, CP."profileName" ,CPC."profileCode", CPC.email, CPC."phoneNumber", CPC.status FROM "Company".profile_company AS CPC INNER JOIN "Company".contact AS CC ON CC.id = CPC."idContact" INNER JOIN "Company".profile AS CP ON CP."profileCode" = CPC."profileCode" WHERE CPC."locationCode" = ${'\''+locationCode+'\''}`);};

export const getLocationXPartnerCodeDB = async (partnerCode) => {
  return await client
    .query(`SELECT id, "locationCode", "partnerCode", "brandCode", name, description, email, category, cuc, channel, product, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, geolocalization , status, "initDate", "endDate", "lastUpdateDate", "additionalInfo" FROM "Company".location WHERE "partnerCode" = ${'\''+partnerCode+'\''}`);};

// export const saveLocationDB = async (locationInfo) => {
//   return await client
//     .query(`INSERT INTO "Company".location (id, "partnerCode", "brandCode" ,name, description, email, category, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, "initDate", "endDate", "lastUpdateDate", "additionalInfo", status, geolocalization) VALUES (${'\''+locationInfo.locationId+'\''}, ${'\''+locationInfo.partnerCode+'\''}, ${'\''+locationInfo.brandCode+'\''} ,${'\''+locationInfo.name+'\''}, ${'\''+JSON.stringify(locationInfo.contactData)+'\''}, ${'\''+locationInfo.description+'\''}, ${'\''+locationInfo.email+'\''}, ${'\''+locationInfo.cuc+'\''}, ${'\''+JSON.stringify(locationInfo.channel)+'\''}, ${locationInfo.status}, ${'\''+locationInfo.initDate+'\''}, null, null, null, ${'\''+locationInfo.locationCode+'\''})`);};

// export const saveLocationDB = async (locationInfo) => {
//   // console.log(locationInfo);
//   return await client
//     .query(`INSERT INTO "Company".location (id, "partnerCode", "brandCode" ,name, description, email, category, cuc, channel, product, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, "initDate", "endDate", "lastUpdateDate", "additionalInfo", status, geolocalization) VALUES (${'\''+locationInfo.id+'\''}, ${'\''+locationInfo.partnerCode+'\''}, ${'\''+locationInfo.brandCode+'\''} ,${'\''+locationInfo.name+'\''}, ${'\''+locationInfo.description+'\''}, ${'\''+locationInfo.email+'\''}, ${'\''+locationInfo.category+'\''}, ${'\''+locationInfo.cuc+'\''}, ${'\''+locationInfo.channel+'\''}, ${'\''+locationInfo.product+'\''},${'\''+locationInfo.addressData.adress+'\''}, ${'\''+locationInfo.addressData.country+'\''}, ${'\''+locationInfo.addressData.regionCode+'\''}, ${'\''+locationInfo.addressData.regionName+'\''}, ${'\''+locationInfo.addressData.cityCode+'\''}, ${'\''+locationInfo.addressData.cityName+'\''} , ${'\''+locationInfo.addressData.neighborhood+'\''}, ${'\''+locationInfo.initDate+'\''}, ${'\''+locationInfo.endDate+'\''}, ${'\''+locationInfo.lastUpdateDate+'\''},${'\''+JSON.stringify(locationInfo.additionalInfo)+'\''}, ${'\''+locationInfo.status+'\''} ,${'\''+locationInfo.addressData.geolocalization+'\''})`);};

export const getLocationCodeWithProductDB = async (partnerCode, locationCode) => {
  return await client
    .query(`SELECT "locationCode" FROM "Company".location WHERE "partnerCode" =  ${'\''+partnerCode+'\''} AND "locationCode" LIKE ${'\''+'%'+locationCode+'%'+'\''} ORDER BY   LENGTH("locationCode") DESC, "locationCode" DESC LIMIT 1`);};

export const getLocationCodeWithoutProductDB = async (partnerCode, locationCode) => {
  return await client
    .query(`SELECT "locationCode" FROM "Company".location WHERE "partnerCode" =  ${'\''+partnerCode+'\''} AND "locationCode" ~ ${'\''+'^'+locationCode+'[0-9]+$'+'\''} ORDER BY  LENGTH("locationCode") DESC, "locationCode" DESC LIMIT 1`);};

export const getLocationCodeBrandWithProductDB = async (partnerCode, brandCode, locationCode) => {
  return await client
    .query(`SELECT "locationCode" FROM "Company".location WHERE "partnerCode" =  ${'\''+partnerCode+'\''} AND "brandCode" =  ${'\''+brandCode+'\''} AND "locationCode"  LIKE ${'\''+'%'+locationCode+'%'+'\''} ORDER BY   LENGTH("locationCode") DESC, "locationCode" DESC LIMIT 1`);};
    
export const getLocationCodeBrandWithoutProductDB = async (partnerCode, brandCode, locationCode) => {
  return await client
    .query(`SELECT "locationCode" FROM "Company".location WHERE "partnerCode" =  ${'\''+partnerCode+'\''} AND "brandCode" =  ${'\''+brandCode+'\''} AND "locationCode" ~ ${'\''+'^'+locationCode+'[0-9]+$'+'\''} ORDER BY  LENGTH("locationCode") DESC, "locationCode" DESC LIMIT 1`);};
    

export const saveLocationDB = async (locationInfo) => {
  return await client
    .query(`INSERT INTO "Company".location (id, "locationCode", "partnerCode", "brandCode" ,name, description, email, category, cuc, channel, product, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, "initDate", "endDate", "lastUpdateDate", "additionalInfo", status, geolocalization) VALUES (${locationInfo.id}, ${locationInfo.locationCode}, ${locationInfo.partnerCode}, ${locationInfo.brandCode} ,${locationInfo.name}, ${locationInfo.description}, ${locationInfo.email}, ${locationInfo.category}, ${locationInfo.cuc}, ${locationInfo.channel}, ${locationInfo.product},${locationInfo.addressData.address}, ${locationInfo.addressData.country}, ${locationInfo.addressData.regionCode}, ${locationInfo.addressData.regionName}, ${locationInfo.addressData.cityCode}, ${locationInfo.addressData.cityName} , ${locationInfo.addressData.neighborhood}, ${locationInfo.initDate}, ${locationInfo.endDate}, ${locationInfo.lastUpdateDate},${locationInfo.additionalInfo}, ${locationInfo.status} ,${locationInfo.addressData.geolocalization})`);};

export const getBrandsDB = async (partnerCode, limit) => {
  if(limit){
    return await client.query(`SELECT id, "brandCode", "partnerCode", name, description, email, category, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, geolocalization, "initDate", "endDate", "lastUpdateDate", "additionalInfo", status FROM "Company".brand LIMIT ${limit}`);
  }
  return await client
    .query('SELECT id, "brandCode", "partnerCode", name, description, email, category, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, geolocalization, "initDate", "endDate", "lastUpdateDate", "additionalInfo", status FROM "Company".brand');};

export const getBrandDB = async (brandCode) => {
  return await client
    .query(`SELECT id, "brandCode", "partnerCode", name, description, email, category, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, geolocalization, "initDate", "endDate", "lastUpdateDate", "additionalInfo", status FROM "Company".brand WHERE "brandCode" = ${'\''+brandCode+'\''}`);};

export const getLocationsBrandDB = async (brandCode) => {
  return await client
    .query(`SELECT "locationCode" FROM "Company".location WHERE "brandCode" = ${'\''+brandCode+'\''}`);};    

export const getContactsBrandDB = async (brandCode) => {
  return await client
    .query(`SELECT DISTINCT CC.name, CP."profileName" ,CPC."profileCode", CPC.email, CPC."phoneNumber", CPC.status FROM "Company".profile_company AS CPC INNER JOIN "Company".contact AS CC ON CC.id = CPC."idContact" INNER JOIN "Company".profile AS CP ON CP."profileCode" = CPC."profileCode" WHERE CPC."brandCode" = ${'\''+brandCode+'\''}`);};    

export const getBrandXPartnerCodeDB = async (partnerCode) => {
  return await client
    .query(`SELECT id, "brandCode", "partnerCode", name, description, email, category, address, country, "regionCode", "regionName", "cityCode", "cityName", neighborhood, geolocalization, "initDate", "endDate", "lastUpdateDate", "additionalInfo", status FROM "Company".brand WHERE "partnerCode" = ${'\''+partnerCode+'\''}`);};

export const getLocationTestDB = async (partnerCode, limit) => {
  // console.log(locationCode);
  // if(locationCode){
  //   return await client.query(`SELECT * FROM "Jac".location WHERE "partnerCode" = ${'\''+partnerCode+'\''} AND "locationCode" = ${'\''+locationCode+'\''}`);
  // }
  if(limit){
    return await client.query(`SELECT * FROM "Jac".location WHERE "partnerCode" = ${'\''+partnerCode+'\''} LIMIT ${limit}`);
  }
  return await client
    .query(`SELECT * FROM "Jac".location WHERE "partnerCode" = ${'\''+partnerCode+'\''}`);};
  // return await client
  //   .query(`SELECT "contactData"->>'country' AS country, "contactData"->>'address' AS address, "contactData"->'geolocalization' AS geolocalization, "contactData"->'geolocalization'->>'latitude' AS latitude FROM "Jac".location WHERE "partnerCode" = ${'\''+condition+'\''}`);};

// export const saveLocationDB = async (locationInfo) => {
//   // console.log(JSON.stringify(locationInfo.contactData));
//   // let sql = `INSERT INTO "Jac".location ("locationId", "partnerCode", "name", "contactData", "description", "email", "cuc", "channel", "status", "initDate", "endDate", "lastUpdate", "additionalInfo", "locationCode") VALUES (${'\''+locationInfo.locationId+'\''}, ${'\''+locationInfo.partnerCode+'\''}, ${'\''+locationInfo.name+'\''}, ${'\''+JSON.stringify(locationInfo.contactData)+'\''}, ${'\''+locationInfo.description+'\''}, ${'\''+locationInfo.email+'\''}, ${'\''+locationInfo.cuc+'\''}, ${'\''+JSON.stringify(locationInfo.channel)+'\''}, ${locationInfo.status}, ${'\''+locationInfo.initDate+'\''}, ${'\''+locationInfo.endDate+'\''}, ${'\''+locationInfo.lastUpdate+'\''}, ${locationInfo.additionalInfo}, ${'\''+locationInfo.locationCode+'\''})`;
//   // console.log(sql);
//   return await client
//     .query(`INSERT INTO "Jac".location ("locationId", "partnerCode", "name", "contactData", "description", "email", "cuc", "channel", "status", "initDate", "endDate", "lastUpdate", "additionalInfo", "locationCode") VALUES (${'\''+locationInfo.locationId+'\''}, ${'\''+locationInfo.partnerCode+'\''}, ${'\''+locationInfo.name+'\''}, ${'\''+JSON.stringify(locationInfo.contactData)+'\''}, ${'\''+locationInfo.description+'\''}, ${'\''+locationInfo.email+'\''}, ${'\''+locationInfo.cuc+'\''}, ${'\''+JSON.stringify(locationInfo.channel)+'\''}, ${locationInfo.status}, ${'\''+locationInfo.initDate+'\''}, null, null, null, ${'\''+locationInfo.locationCode+'\''})`);};

// export const getPartnerDB = async (fields,table,condition) => {
//   // let sql=`SELECT ${fields} FROM ${table} ${(condition!='')?'WHERE '+condition:''}`;   
//   let sql = 'SELECT * FROM "Jac".partner';
//   return await client
//     .query(sql);
// };

// export const getLocationDB = async (condition) => {
//   let sql=`SELECT * FROM "Jac".location WHERE "partnerCode" = ${'\''+condition+'\''}`;   
//   return await client
//     .query(sql);};
