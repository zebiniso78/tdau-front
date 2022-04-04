import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 1px solid #728fbb;
  padding: 10px 20px;
  font-size: 24px;
  margin: 0 auto;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  @media (min-width: 991px) {
    width: 350px;
    height: 80px;
    padding: 28px;
    font-size: 18px;
  }

  svg {
    font-size: 18px;
    transition: all 0.3s ease;
  }

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    svg {
      transform: translateX(2px);
    }
  }
  &:active {
    transform: translateY(2px);
  }
`;
export const Button = styled.button`
  border: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 24px;
  margin: 0 auto;
  background-color: transparent;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  @media (min-width: 991px) {
    width: 350px;
    height: 80px;
    padding: 28px;
    font-size: 18px;
  }

  svg {
    font-size: 18px;
    transition: all 0.3s ease;
  }

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    svg {
      transform: translateX(2px);
    }
  }
  &:active {
    transform: translateY(2px);
  }
`;
