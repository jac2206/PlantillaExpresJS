import __ from 'process';

export const config = {
  port: process.env.PORT || 3000,
  env_current: process.env.NODE_ENV,
  corsOrigins: process.env.CORS_ORIGINS?.split(','),
  axios: { timeOut: process.env.AXIOS_HTTP_TIMEOUT },
  endPoints: {
    pokemon: {
      getPokemon: process.env.GET_POKEMON,
    },
  },
  SQLServer:{
    user: process.env.SQLSERVER_USER,
    server: process.env.SQLSERVER_HOST,
    database: process.env.SQLSERVERS_DB,
    password: process.env.SQLSERVER_PASS,
    options : {
      // port : parseInt(process.env.SQLSERVER_PORT),
      enableArithAbort: true,
      encrypt: false, // Deshabilita el cifrado
      trustServerCertificate: true, // Acepta el certificado autofirmado
    }
  }
//   hstsMaxAge: process.env.HSTS_MAX_AGE,
//   aws: { 
//     region: process.env.AWS_REGION,
//     sqsUrl: process.env.AWS_SQS_LOGISTIC_QUEUE 
//   },
//   apiGateway: {
//     clientId: process.env.APIGATEWAY_CLIENT_ID,
//     clientSecret: process.env.APIGATEWAY_CLIENT_SECRET,
//     baseUrl: process.env.APIGATEWAY_BASE_URL,
//     pfxPath: process.env.APIGATEWAY_PFX_PATH,
//     passphrase: process.env.APIGATEWAY_PASSPHRASE,
//     caChannel: process.env.APIGATEWAY_CA_CHANNEL,
//     bearerToken: process.env.APIGATEWAY_URL_BEARER_TOKEN,
//   },
//   splunk: {
//     baseUrl: process.env.SPLUNK_BASE_URL,
//     token: process.env.SPLUNK_TOKEN,
//     index: process.env.SPLUNK_INDEX,
//     source: process.env.SPLUNK_SOURCE,
//     audith: process.env.SPLUNK_AUDIT_PATH,
//   },
//   endPoints: {
//     pos: {
//       shortBalance: process.env.POS_SHORT_BALANCE,
//       getPayments: process.env.POS_GET_PAYMENTS,
//     },
//   },
//   postgres:{
//     user: process.env.POSTGRES_USER,
//     host: process.env.POSTGRES_HOST,
//     database: process.env.POSTGRES_DB,
//     password: process.env.POSTGRES_PASS,
//     port: process.env.POSTGRES_PORT
//   }
};
