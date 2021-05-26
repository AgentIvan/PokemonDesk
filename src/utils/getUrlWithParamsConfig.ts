/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import config, { EndpointType } from '../config';

interface IUrl {
  pathname: string;
  protocol: string;
  host: string;
}

const getUrlWithParamsConfig = (
  endpoint: EndpointType = 'getPokemons',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: any,
): IUrl => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint].uri,
    query: {},
  };
  // TODO needs refactoring
  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      // eslint-disable-next-line no-param-reassign
      delete query[val];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = { ...query };

  return url;
};

export default getUrlWithParamsConfig;
