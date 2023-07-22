import sql from 'mssql';
import { config } from '../../config/environments/config';

const client = new sql.ConnectionPool(config.SQLServer);

client.connect();

export const getCompaniesDB = async () => {
  return await client.query(
    'SELECT * FROM dbo.Company'
  );
};
