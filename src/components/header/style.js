import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarSite = styled.div`
  background: linear-gradient(85.38deg, #edede4 -23.38%, #f8f2eb 97.65%);
  padding: 20px 0;
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
  /* h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 108%;
    letter-spacing: -0.04em;
    color: #142e38;
    max-width: 240px;
    margin: 0;
    text-transform: uppercase;
  } */
`;
