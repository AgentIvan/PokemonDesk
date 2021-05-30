/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import config, { EndpointType } from '../config';

interface IApiConfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: any;
}

interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
    query?: any;
  };
  body?: any;
}

const getUrlWithParamsConfig = (
  endpoint: EndpointType = 'getPokemons',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any,
): IEndpoint => {
  const { method, uri }: IEndpoint = config.client.endpoint[endpoint];
  let body = {};
  const apiConfigUri: IApiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };
  const query = { ...params };

  // TODO needs refactoring
  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      // eslint-disable-next-line no-param-reassign
      delete query[val];
      return result;
    }
    return acc;
  }, apiConfigUri.pathname);

  apiConfigUri.pathname = pathname;
  apiConfigUri.query = { ...query };
  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = params;
  }

  return {
    method,
    uri: apiConfigUri,
    body,
  };
};

export default getUrlWithParamsConfig;
