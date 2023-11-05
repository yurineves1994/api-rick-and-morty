import { ReactNode, createContext, useReducer } from 'react';
import { IListCharacters } from '~/interfaces/Characters';
import { data } from './data';
import { reducer } from './reducer';

export const ContextCharacters = createContext({} as IListCharacters);

export const ProviderCharacters = ({ children }: { children: ReactNode }) => {
  const [caracters, caractersDispatch] = useReducer(reducer, data);

  console.log(caracters);

  return (
    <ContextCharacters.Provider value={{ ...caracters, caractersDispatch }}>
      {children}
    </ContextCharacters.Provider>
  );
};
