import config from '../config';

interface IUrl {
  pathname: string;
  protocol: string;
  host: string;
}

const getUrlWithParamsConfig = (endpoint: string): IUrl => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint].uri,
  };
  return url;
};

export default getUrlWithParamsConfig;
