import { useContext, useEffect } from 'react';
import { ContextCharacters } from '~/context/ContextCharacters';
import { allCaracters, moreCaracters } from '~/context/actions';
import { ICharacter, StatusType } from '../../interfaces/Characters';

import * as S from './style';

export const ListCaracters = () => {
  const { page, caracters, caractersDispatch } = useContext(ContextCharacters);

  useEffect(() => {
    allCaracters(page, caractersDispatch);
  }, []);

  const handleGetMore = () => {
    moreCaracters(page, caractersDispatch);
  };

  return (
    <>
      <S.Container>
        {caracters.map((caracter: ICharacter, index) => (
          <S.Caracter key={index}>
            <S.Image>
              <img src={caracter.image} alt={caracter.name} />
            </S.Image>
            <S.Content>
              <h2>{caracter.name}</h2>
              <S.Status status={caracter.status as StatusType}>
                {caracter.status} - {caracter.species}
              </S.Status>
              <p>
                <strong>Última localização conhecida:</strong>
                <span>{caracter.location.name}</span>
              </p>
              <p>
                <strong>Local de origem:</strong>
                <span>{caracter.origin.name}</span>
              </p>
            </S.Content>
          </S.Caracter>
        ))}
        <S.Button onClick={() => handleGetMore()}>Mais Caracters</S.Button>
      </S.Container>
    </>
  );
};
