// import { config } from '../../config/environments/config';
// import { get,post } from '../http/api-gw-custom-http';

// export const getBalance = async (dt, dn, pc, lc) => {
//   const url = `${config.endPoints.pos.shortBalance
//     .replace(':documentNo', dn)
//     .replace('{documentType}', dt)
//     .replace('{partnerCode}', pc)
//     .replace('{locationCode}', lc)}`;
//   return await get(url);
// };

// export const getPayments = async (params) => {
//   const url = config.endPoints.pos.getPayments;
//   return await post(url,params,{'Content-Type':'application/json'});
// };
