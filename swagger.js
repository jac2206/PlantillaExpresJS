import swaggerAutogen from 'swagger-autogen';

const options = {
  openapi: '3.0.0',
};

const doc = {
  info: {
    version: '1.0.0',
    title: 'ExpressJS API Template',
    description: 'ExpressJS API Template',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [],
  securityDefinitions: {
    OAuth2: {
      type: 'oauth2',
      flows: {
        clientCredentials: {
          tokenUrl: 'https://apinp.puntoscolombia.com:8443/auth/oauth/v2/token',
          scopes: {},
        },
      },
    },
    Authorization: {
      type: 'Bearer',
      in: 'header',
      name: 'Bearer Token',
    },
  },
  definitions: {
    GetBalance: {
      allowAccrual: true,
      allowRedemption: true,
      email: 's************e@p************a.com',
      mainBalance: {
        pointsValueInMoney: 34529040,
        expiringPoints: 4923849,
        pointsAmount: 4932720,
        pointsMoneyRatio: 7,
        expirationDate: '2023-10-31',
      },
      mobilePhoneNo: '313****311',
      name: 'FirstName LastName',
      totpActive: true,
    },
    ProcessPayments: {

    },
    Partner: {
      partnerId: '3ba64ed0-0257-4974-b549-183c5a0737da',
      partnerCode: '1037630472',
      name: 'Jac Bebidas SAS',
      contactData: {
        phone: '+57604999999',
        address: 'Dirección de residencia Cll x Crr',
        country: 'CO',
        celphone: '+5730099999',
        cityCode: '05631',
        cityName: 'Medellín',
        regionCode: '05',
        regionName: 'Antioquia',
        neighbourhood: '',
        geolocalization: {
          latitude: 6.1633199,
          longitude: -75.5966299
        }
      },
      verificationDigit: 1,
      commercialName: 'prueba',
      status: true,
      email: 'example@example.com',
      webSite: 'www.example.com',
      type: 'A',
      pointsMoneyRatio: 6,
      billingType: 'B',
      accumulationPeriod: 'M',
      initDate: '2023-05-03T17:00:00.000Z',
      endDate: '2023-05-03T17:00:00.000Z',
      lastUpdate: '2023-05-03T17:00:00.000Z',
      currency: 'COP',
      isPartner: true,
      paymentInformation: {},
      additionalInfo: {},
      categories: [],
      products: [
        {
          status: true,
          idProducto: 1,
          productName: 'SC'
        }
      ],
      locations: null,
      business: [
        'SC',
        'LAAS'
      ],
      codeType: 'NIT',
      category: 'Salud'
    },
    DefaultError: {
      resultCode: 'SOME_RESULT_CODE',
      resultMsg: 'Some result detail message.',
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/config/*.js'];

swaggerAutogen(options)(outputFile, endpointsFiles, doc).then((res) =>
  console.log(JSON.stringify(res.data))
);
// swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js'); // Your project's root file
// });