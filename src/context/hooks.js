import { useContext } from 'react';
import { Context } from '.';

const useStoreContext = () => {
  return useContext(Context);
};

export { useStoreContext };
