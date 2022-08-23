import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarSite = styled.div`
  background: linear-gradient(85.38deg, #edede4 -23.38%, #f8f2eb 97.65%);
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggleButton {
    display: none;
    margin: 0;
    border: none;
    outline: none;
    align-items: center;
    justify-content: center;
    padding: 8px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border: 4px;
    background-color: transparent;
    &:active {
      transform: translateY(2px);
    }
    @media (max-width: 991px) {
      display: flex;
    }
  }
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;

  img {
    max-height: 40px;
    object-position: center;
    object-fit: contain;
    vertical-align: middle;
    margin-right: 8px;
  }
  @media (max-width: 991px) {
    z-index: 9999;
  }
`;
