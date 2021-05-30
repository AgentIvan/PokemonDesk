import { useEffect, useState } from 'react';

export const useDebounse = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const hendler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearInterval(hendler);
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounse;
