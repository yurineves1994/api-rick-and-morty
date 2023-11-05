import * as types from './types';

export type ReducerActions = {
  type: 'ALL_CARACTERS' | 'MORE_CARACTERS' | 'POST_LOADING';
  payload: any;
};

export const reducer = (state: any, action: ReducerActions) => {
  switch (action.type) {
    case types.ALL_CARACTERS: {
      return { ...state, caracters: action.payload };
    }
    case types.MORE_CARACTERS: {
      return {
        ...state,
        page: state.page + 1,
        caracters: [...state.caracters, ...action.payload],
        loading: false,
      };
    }
    default:
      return { ...state };
  }
};
