import express from 'express';
import { getCompanies, getCompany } from '../../../../web-api/controllers/company-controller';

export const companyRoutes = () => {
  const router = express.Router();
  router.get('/', getCompanies);
  router.get('/:partnerCode', getCompany);
  return router;
};
