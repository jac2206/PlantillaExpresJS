import express from 'express';
import helmet from 'helmet';
import hsts from 'hsts';
import cors from 'cors';
import compression from 'compression';
import { config } from './environments/config';
import { exceptionHandler } from '../web-api/middlewares/exception-handler';
import { initApiRoutes } from './routes/api-routes';
import {inspect} from 'util';
// import {initSQSConsumer} from '../domain/services/sqs-service';
// const util = require('util');

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
  hsts({
    maxAge: parseInt(config.hstsMaxAge), // 180 days in seconds
  })
);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (config.corsOrigins.indexOf(origin) === -1)
        return callback(null, false);
      return callback(null, true);
    },
  })
);

export const run = () => {
  app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
  });
  // app.use('/api', initApiRoutes());
  app.use('/', initApiRoutes());
  app.use(exceptionHandler);

  app.listen(config.port, () =>
    console.log(`App Runing on port ${config.port}`),
  console.log(inspect(config ,{showHidden: false, depth: null, colors: true})),
  // initSQSConsumer(),
  );
};
