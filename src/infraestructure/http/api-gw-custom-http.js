// import * as https from 'https';
// import * as fs from 'fs';
// import * as path from 'path';
// import axios from 'axios';
// import { config } from '../../config/environments/config';
// import { getDirName } from '../../domain/utils/utils';

// let BearerToken = {
//   expires: 0,
//   access_token: '',
// };

// const axiosClient = axios.create({
//   baseURL: config.apiGateway.baseUrl,
//   timeout: config.axios.timeout,
//   httpsAgent: new https.Agent({
//     pfx: fs.readFileSync(
//       path.join(
//         getDirName(import.meta.url),
//         `../../config/certs/${config.apiGateway.pfxPath}`
//       )
//     ),
//     passphrase: config.apiGateway.passphrase,
//   }),
// });

// const getBodyBearerToken = () => {
//   const body = {
//     grant_type: 'client_credentials',
//     client_id: config.apiGateway.clientId,
//     client_secret: config.apiGateway.clientSecret,
//   };
//   return new URLSearchParams(body).toString();
// };

// const getBearerToken = async () => {
//   if (BearerToken.expires > Math.floor(Date.now() / 1000))
//     return BearerToken.access_token;

//   const body = getBodyBearerToken();
//   const response = await axios.post(
//     `${config.apiGateway.baseUrl}/auth/oauth/v2/token`,
//     body,
//     {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'ca-channel': config.apiGateway.caChannel,
//       },
//     }
//   );
//   const data = response.data;

//   if (data && data.access_token && data.expires_in) {
//     data.expires_in = data.expires_in - 600; // expires_in llega en segundos, restar 10 minutos
//     data.expires_in = Math.floor(Date.now() / 1000) + data.expires_in; // sumar a la fecha actual

//     BearerToken.access_token = data.access_token;
//     BearerToken.expires = data.expires_in;
//     return BearerToken.access_token;
//   }
// };

// axiosClient.interceptors.request.use(
//   async (request) => {
//     const requestHeaders = request.headers || {};
//     const bearer = await getBearerToken();
//     request.headers = {
//       ...requestHeaders,
//       'ca-channel': config.apiGateway.caChannel,
//       'x-remote-ip': '',
//       Authorization: `Bearer ${bearer}`,
//     };
//     return request;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// const executeRequest = async (url, method, body, headers) => {
//   let options = {
//     url,
//     method,
//     body,
//     headers,
//   };
//   if(method!='GET'){
//     options.data=body;
//   }
//   return await axiosClient
//     .request(options)
//     .then((response) => response.data)
//     .catch((error) => {
//       console.log('ERROR', error);
//       throw error;
//     });
// };

// export const get = async (url, headers) => {
//   return await executeRequest(url, 'GET', null, headers);
// };

// export const post = async (url, body, headers) => {
//   return await executeRequest(url, 'POST', body, headers);
// };
