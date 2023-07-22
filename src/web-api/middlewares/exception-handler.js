// import { SplunkEntity } from '../../infraestructure/entities/splunk-entity';
// import { audit } from '../../domain/services/splunk-service';
import {
  getCustomPcoException,
  InternalServerPCOException,
} from '../../domain/entities/custom-exception-entity';
import { AxiosError } from 'axios';

export const exceptionHandler = async (err, req, res, next) => {
  try {
    err.request = req;
    const exception = getCustomPcoException(err);
    const status = exception.status || 500;
    console.log('ERROR ::: ', JSON.stringify(exception));
    res.body = res.body || exception.data;
    res.statusCode = status;
    // const splunkEntity = new SplunkEntity(req, res);
    // audit(splunkEntity);
    delete exception.data.errorDetail;
    res.status(status).send(exception.data);
  } catch (error) {
    res.status(500).send(new InternalServerPCOException({}));
  }
};

export const exceptionSqsHandler = (err) => {
  try {

    if (err instanceof AxiosError) {
      err.request.headers = err.config.headers;
      err.request.body = err.config.data;
    }
    else {
      err.request = {method:'SQS', headers: ''};
    }
    
    const exception = getCustomPcoException(err);
    const status = exception.status || 500;
    console.log('ERROR ::: ', JSON.stringify(exception));
    const res = err.response || err;
    res.body = res.body || exception.data;
    res.statusCode = status;
    const splunkEntity = new SplunkEntity(err.request, res);
    audit(splunkEntity);
  } 
  catch (error) {
    console.error(error);
  }
};
