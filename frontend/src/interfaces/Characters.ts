export interface IListCharacters {
  page: string;
  caracters: ICharacter[];
  loading: boolean;
  caractersDispatch: (action: string, payload: string) => void;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  image: string;
}

export type StatusType = 'Alive' | 'Dead' | 'unknown';

export interface StatusProps {
  status: StatusType;
}
