import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../../swagger-output.json' assert { type: 'json' };
import { health } from '../../web-api/controllers/health-controller';
// v1
import { pokemonRoutes } from './v1/pokemon/pokemon-routes'
// import { usersRoutes } from './v1/users/users-routes';
// import { paymentsRoutes } from './v1/payments/payments-routes';
// import { partnerRoutes } from './v1/partner/partner-routes';
// import { locationRoutes } from './v1/location/location-routes';
// import { brandRoutes } from './v1/brand/brand-routes';
// import { businessRoutes } from './v1/business/business-routes';

export const initApiRoutes = () => {
  const router = express.Router();
  router.get('/health', health);
  if (process.env.NODE_ENV != 'prod')
    router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
      router.use('/v1/pokemon', pokemonRoutes());
//   router.use('/v1/users', usersRoutes());
//   router.use('/v1/payments', paymentsRoutes());
//   router.use('/v1/partners', partnerRoutes());
//   router.use('/v1/locations', locationRoutes());
//   router.use('/v1/brands', brandRoutes());
//   router.use('/v1/business', businessRoutes());
  return router;
};
