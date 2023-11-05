import styled from 'styled-components';
import { StatusProps, StatusType } from '~/interfaces/Characters';

const statusColors: Record<StatusType, string> = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'gray',
};

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  padding: 100px 50px 20px;
`;
export const Caracter = styled.div`
  width: calc((100% / 2 - 25px));
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: flex-start;
  border: 1px solid white;
  border-radius: 25px;
  height: 250px;
`;

export const Status = styled.p<StatusProps>`
  position: relative;
  margin-left: 17px;
  margin-top: 5px;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: ${(props) => statusColors[props.status]};
  }
`;

export const Image = styled.div`
  width: max-content;
  height: 100%;

  img {
    border-radius: 25px 0 0 25px;
    height: 100%;
    height: 250px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  padding: 25px;

  p {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid rgb(255, 152, 0);
  color: white;
  margin: 0px;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  font-weight: bolder;
  font-size: 20px;
`;
