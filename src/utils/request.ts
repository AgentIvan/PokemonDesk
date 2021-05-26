import Url from 'url';
import { EndpointType } from '../config';
import IQuery from '../interface/query';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

export const req = async <T>(endpoint: EndpointType, query?: IQuery): Promise<T> => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  return fetch(uri).then((response) => response.json());
};

export default req;
