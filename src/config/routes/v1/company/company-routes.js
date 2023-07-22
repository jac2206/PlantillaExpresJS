import express from 'express';
import { getCompanies } from '../../../../web-api/controllers/company-controller';

export const companyRoutes = () => {
  const router = express.Router();
  router.get('/', getCompanies);
  return router;
};
