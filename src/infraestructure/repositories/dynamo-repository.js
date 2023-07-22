import { config } from '../../config/environments/config';
import * as AWS from 'aws-sdk';
const documentClient = new AWS.DynamoDB.DocumentClient({
  region: config.aws.region,
});

const TABLE_NAME = '';

export const get = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: id,
    },
  };
  return await documentClient
    .get(params)
    .promise()
    .then((response) => response.Item);
};
