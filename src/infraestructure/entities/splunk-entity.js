// import { config } from '../../config/environments/config';

// export class SplunkEntity {
//   constructor(dataReq, dataRes) {
//     this.RequestMessage = {
//       URL: '',
//       allHeadersValues: formatHeaders(dataReq.headers),
//       clientID: '',
//       login: '',
//       method: dataReq.method.toUpperCase(),
//       mainpart: {},
//       path: dataReq.path,
//       query: '',
//       params: '',
//       time: new Date(),
//     };
//     if (
//       dataReq.headers &&
//       dataReq.headers.host &&
//       dataReq.protocol &&
//       dataReq.originalUrl
//     ) {
//       this.RequestMessage.URL = `${dataReq.protocol}://${dataReq.headers.host}${dataReq.originalUrl}`;
//     }
//     if (dataReq.method.toUpperCase() == 'GET') {
//       this.RequestMessage.params = dataReq.params;
//       this.RequestMessage.query = dataReq.query;
//     } else {
//       this.RequestMessage.mainpart = dataReq.body;
//     }
//     this.ResponseMessage = {
//       allHeadersValues: formatHeaders(dataRes._headers),
//       mainpart: dataRes.data || dataRes.body,
//       status: dataRes.statusCode,
//       time: new Date(),
//     };
//     this.RequestTime = dataReq.requestTime;
//     this.ResponseTime = Date.now();
//     this.Source = config.splunk.source;
//   }
// }

// const formatHeaders = (headers) => {
//   const formatedHeaders = [];
//   Object.keys(headers).map((key) =>
//     formatedHeaders.push({ [key]: headers[key] })
//   );
//   return formatedHeaders;
// };
