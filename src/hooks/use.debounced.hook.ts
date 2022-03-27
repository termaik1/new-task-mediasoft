import { useEffect } from "react";

export const useDebounced = (
  fn = () => {},
  timeout = 0,
  deps: React.DependencyList
) => {
  useEffect(() => {
    const timer = setTimeout(() => fn(), timeout);

    return () => {
      clearTimeout(timer);
    };
  }, deps);
};
