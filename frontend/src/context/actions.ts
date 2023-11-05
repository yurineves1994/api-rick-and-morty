import * as types from './types';

export const allCaracters = async (page: string, dispatch: any) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=` + page);
  const caracters = await res.json();

  dispatch({ type: types.ALL_CARACTERS, payload: caracters.results });
};

export const moreCaracters = async (page: string, dispatch: any) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=` + page);
  const caracters = await res.json();

  dispatch({ type: types.MORE_CARACTERS, payload: caracters.results });
};
