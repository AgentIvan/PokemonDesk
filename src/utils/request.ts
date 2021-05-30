import Url from 'url';
import { EndpointType } from '../config';
import IQuery from '../interface/query';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

interface IOptions {
  method: string;
  body?: string;
}

// interface IGetUrlWithParamsConfig {
//   method: string;
//   uri: Partial<URL>;
//   body: any;
// }

export const req = async <T>(endpoint: EndpointType, query?: IQuery): Promise<T> => {
  const { method, uri, body } = getUrlWithParamsConfig(endpoint, query);
  const options: IOptions = {
    method,
  };

  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body);
  }

  return fetch(Url.format(uri), options).then((res) => res.json());
};

export default req;
