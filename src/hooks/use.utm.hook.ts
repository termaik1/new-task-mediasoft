import { StringParam, withDefault, useQueryParams } from 'use-query-params';

export const useUtm = () => {
  const [queryPrams, setQueryParams] = useQueryParams({
    id: withDefault(StringParam, '')
  });

  return {
    queryPrams,
    setQueryParams
  };
};
