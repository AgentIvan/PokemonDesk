import { useEffect, useState } from 'react';
import { EndpointType } from '../config';
import IQuery from '../interface/query';
import req from '../utils/request';

const useData = <T>(
  endpoint: EndpointType,
  query?: IQuery,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps: any[] = [],
): {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
} => {
  const [data, setData] = useState<T | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    req<T>(endpoint, query)
      .then((result) => setData(result))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, isLoading, isError };
};

export default useData;
