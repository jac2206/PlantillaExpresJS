// import * as partnerService from '../../domain/services/partner-service';
// import * as locationService from '../../domain/services/location-service';
// import * as brandService from '../../domain/services/brand-service';

// export const getPartner = async (req, res, next) => {
//   // #swagger.tags = ['partner']
//   // #swagger.description = "Obtener partner"
//   // #swagger.deprecated = false 
//   try {
//     const { limit: limit } = req.query;
//     let response = await partnerService.getPartner(limit);
//     // console.log(response.rowCount);
//     // let payments = await paymentService.getPayments(generateDates());
//     // let response=await paymentService.calculatePayments(payments);
//     /* #swagger.responses[200] = { 
//       schema: {  $ref: '#/definitions/Partner' }
//     } */
//     /* #swagger.responses[500] = { 
//       schema: {  $ref: '#/definitions/DefaultError' }
//     } */
//     res.status(200).json(response);
//   } catch (error) {
//     // Forma para pasar al exception handler
//     next(error);
//   }
// };

// export const getPartnerXPartnerCode = async (req, res, next) => {
//   // #swagger.tags = ['partner']
//   // #swagger.description = "Obtener partner"
//   // #swagger.deprecated = false 
//   try {
//     // const { limit: limit } = req.query;
//     const { partnerCode } = req.params;
//     let response = await partnerService.getPartnerXPartnerCode(partnerCode);
//     // console.log(response.rowCount);
//     // let payments = await paymentService.getPayments(generateDates());
//     // let response=await paymentService.calculatePayments(payments);
//     /* #swagger.responses[200] = { 
//       schema: {  $ref: '#/definitions/Partner' }
//     } */
//     /* #swagger.responses[500] = { 
//       schema: {  $ref: '#/definitions/DefaultError' }
//     } */
//     res.status(200).json(response);
//   } catch (error) {
//     // Forma para pasar al exception handler
//     next(error);
//   }
// };

// export const getShortCompany = async (req, res, next) => {
//   // #swagger.tags = ['partner']
//   // #swagger.description = "Obtener partner"
//   // #swagger.deprecated = false 
//   try {
//     // const { limit: limit } = req.query;
//     const { partnerCode } = req.params;
//     let response = await partnerService.getShortCompany(partnerCode);
//     // console.log(response.rowCount);
//     // let payments = await paymentService.getPayments(generateDates());
//     // let response=await paymentService.calculatePayments(payments);
//     /* #swagger.responses[200] = { 
//       schema: {  $ref: '#/definitions/Partner' }
//     } */
//     /* #swagger.responses[500] = { 
//       schema: {  $ref: '#/definitions/DefaultError' }
//     } */
//     res.status(200).json(response);
//   } catch (error) {
//     // Forma para pasar al exception handler
//     next(error);
//   }
// };

// export const getLocationsXPartnerCode = async (req, res, next) => {
//   // #swagger.tags = ['location']
//   // #swagger.description = "Obtener location"
//   // #swagger.deprecated = false 
//   try {
//     const { partnerCode } = req.params;
//     // console.log(partnerCode);
//     // const { limit: limit } = req.query;
//     // const { locationCode: locationCode } = req.query;
//     let response = await locationService.getLocationXPartnerCode(partnerCode);
//     // console.log(response.rowCount);
//     // let payments = await paymentService.getPayments(generateDates());
//     // let response=await paymentService.calculatePayments(payments);
//     /* #swagger.responses[200] = { 
//       schema: {  $ref: '#/definitions/ProcessPayments' }
//     } */
//     /* #swagger.responses[500] = { 
//       schema: {  $ref: '#/definitions/DefaultError' }
//     } */
//     res.status(200).json(response);
//   } catch (error) {
//     // Forma para pasar al exception handler
//     next(error);
//   }
// };

// export const getBrandXPartnerCode = async (req, res, next) => {
//   // #swagger.tags = ['location']
//   // #swagger.description = "Obtener location"
//   // #swagger.deprecated = false 
//   try {
//     const { partnerCode } = req.params;
//     // console.log(partnerCode);
//     // const { limit: limit } = req.query;
//     // const { locationCode: locationCode } = req.query;
//     let response = await brandService.getLocationXPartnerCode(partnerCode);
//     // console.log(response.rowCount);
//     // let payments = await paymentService.getPayments(generateDates());
//     // let response=await paymentService.calculatePayments(payments);
//     /* #swagger.responses[200] = { 
//       schema: {  $ref: '#/definitions/ProcessPayments' }
//     } */
//     /* #swagger.responses[500] = { 
//       schema: {  $ref: '#/definitions/DefaultError' }
//     } */
//     res.status(200).json(response);
//   } catch (error) {
//     // Forma para pasar al exception handler
//     next(error);
//   }
// };

// export const getLocations = async (req, res, next) => {
//   // #swagger.tags = ['location']
//   // #swagger.description = "Obtener location"
//   // #swagger.deprecated = false 
//   try {
//     const { limit: limit } = req.query;
//     let response = await locationService.getLocations( limit);
//     // console.log(response.rowCount);
//     // let payments = await paymentService.getPayments(generateDates());
//     // let response=await paymentService.calculatePayments(payments);
//     /* #swagger.responses[200] = { 
//       schema: {  $ref: '#/definitions/ProcessPayments' }
//     } */
//     /* #swagger.responses[500] = { 
//       schema: {  $ref: '#/definitions/DefaultError' }
//     } */
//     res.status(200).json(response);
//   } catch (error) {
//     // Forma para pasar al exception handler
//     next(error);
//   }
// };

// export const getLocation = async (req, res, next) => {
//   // #swagger.tags = ['location']
//   // #swagger.description = "Obtener location"
//   // #swagger.deprecated = false 
//   try {
//     const { locationCode } = req.params;
//     // console.log(partnerCode);
//     // const { locationCode: locationCode } = req.query;
//     let response = await locationService.getLocation(locationCode);
//     // console.log(response.rowCount);
//     // let payments = await paymentService.getPayments(generateDates());
//     // let response=await paymentService.calculatePayments(payments);
//     /* #swagger.responses[200] = { 
//       schema: {  $ref: '#/definitions/ProcessPayments' }
//     } */
//     /* #swagger.responses[500] = { 
//       schema: {  $ref: '#/definitions/DefaultError' }
//     } */
//     res.status(200).json(response);
//   } catch (error) {
//     // Forma para pasar al exception handler
//     next(error);
//   }
// };

// export const saveLocation = async (req, res, next) => {
//   // #swagger.tags = ['location']
//   // #swagger.description = "guardar location"
//   // #swagger.deprecated = false 
//   try {
//     // const { partnerCode } = req.params;
//     const locationInfo = req.body;
//     // const response = req.body;
//     let response = await locationService.saveLocation(locationInfo);

//     // console.log(response.contactData);
//     // const locationInfo = req.body;
//     // console.log(partnerCode);
//     // const { limit: limit } = req.query;
//     // let response = await locationService.getLocation(partnerCode, limit);
//     // console.log(response.rowCount);
//     // let payments = await paymentService.getPayments(generateDates());
//     // let response=await paymentService.calculatePayments(payments);
//     /* #swagger.responses[200] = { 
//       schema: {  $ref: '#/definitions/ProcessPayments' }
//     } */
//     /* #swagger.responses[500] = { 
//       schema: {  $ref: '#/definitions/DefaultError' }
//     } */
//     res.status(200).json(response);
//   } catch (error) {
//     // Forma para pasar al exception handler
//     next(error);
//   }
// };

// export const sendEmail = async (req, res, next) => {
//     // #swagger.tags = ['location']
//     // #swagger.description = "guardar location"
//     // #swagger.deprecated = false
//     try {
//       // const { partnerCode } = req.params;
//       const headers = req.headers;
//       // console.log(headers);
//       const email = req.body;
//       // const { limit: limit } = req.query;
//       let response = await businessService.sendEmails(email, headers);
//       // let response = await locationService.getLocation(partnerCode, limit);
//       // console.log(response.rowCount);
//       // let payments = await paymentService.getPayments(generateDates());
//       // let response=await paymentService.calculatePayments(payments);
//       /* #swagger.responses[200] = { 
//           schema: {  $ref: '#/definitions/ProcessPayments' }
//         } */
//       /* #swagger.responses[500] = { 
//           schema: {  $ref: '#/definitions/DefaultError' }
//         } */
//       res.status(200).json(response);
//     } catch (error) {
//       // Forma para pasar al exception handler
//       next(error);
//     }
//   };
  
//   export const shortBalance = async (req, res, next) => {
//     // #swagger.tags = ['location']
//     // #swagger.description = "guardar location"
//     // #swagger.deprecated = false
//     try {
//       const { dt, dn, type } = req.params;
//       // const { type } = req.query;
//       const headers = req.headers;
//       let response = await businessService.shortBalances(dt, dn, type, headers);
//       // let response = await locationService.getLocation(partnerCode, limit);
//       // console.log(response.rowCount);
//       // let payments = await paymentService.getPayments(generateDates());
//       // let response=await paymentService.calculatePayments(payments);
//       /* #swagger.responses[200] = { 
//             schema: {  $ref: '#/definitions/ProcessPayments' }
//           } */
//       /* #swagger.responses[500] = { 
//             schema: {  $ref: '#/definitions/DefaultError' }
//           } */
//       res.status(200).json(response);
//     } catch (error) {
//       // Forma para pasar al exception handler
//       next(error);
//     }
//   };
  
//   export const sendsSMS = async (req, res, next) => {
//     // #swagger.tags = ['location']
//     // #swagger.description = "guardar location"
//     // #swagger.deprecated = false
//     try {
//       // const { partnerCode } = req.params;
//       const headers = req.headers;
//       // console.log(headers);
//       const sms = req.body;
//       // const { limit: limit } = req.query;
//       let response = await businessService.sendsSMS(sms, headers);
//       // let response = await locationService.getLocation(partnerCode, limit);
//       // console.log(response.rowCount);
//       // let payments = await paymentService.getPayments(generateDates());
//       // let response=await paymentService.calculatePayments(payments);
//       /* #swagger.responses[200] = { 
//             schema: {  $ref: '#/definitions/ProcessPayments' }
//           } */
//       /* #swagger.responses[500] = { 
//             schema: {  $ref: '#/definitions/DefaultError' }
//           } */
//       res.status(200).json(response);
//     } catch (error) {
//       // Forma para pasar al exception handler
//       next(error);
//     }
//   };
  
//   export const monitoring = async (req, res, next) => {
//     // #swagger.tags = ['location']
//     // #swagger.description = "guardar location"
//     // #swagger.deprecated = false
//     try {
//       // const { partnerCode } = req.params;
//       const headers = req.headers;
//       // console.log(headers);
//       const identity = req.body;
//       console.log(identity);
//       // const { limit: limit } = req.query;
//       let response = await businessService.monitoring(identity, headers);
//       // let response = await locationService.getLocation(partnerCode, limit);
//       // console.log(response.rowCount);
//       // let payments = await paymentService.getPayments(generateDates());
//       // let response=await paymentService.calculatePayments(payments);
//       /* #swagger.responses[200] = { 
//             schema: {  $ref: '#/definitions/ProcessPayments' }
//           } */
//       /* #swagger.responses[500] = { 
//             schema: {  $ref: '#/definitions/DefaultError' }
//           } */
//       res.status(200).json(response);
//     } catch (error) {
//       // Forma para pasar al exception handler
//       next(error);
//     }
//   };