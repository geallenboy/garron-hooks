import { useEffect } from 'react';

const useLogger = (name: string, props: any): void => {
  useEffect(() => {
    console.log(`${name} has mounted`);
    return () => console.log(`${name} has unmounted`);
  }, [name]);

  useEffect(() => {
    console.log(`${name} props updated`, props);
  });
};

export default useLogger;
