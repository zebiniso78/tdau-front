import Background from '../assets/main-bg.png';
import styled from 'styled-components';

export const Header = styled.header`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
`;

export const MainBody = styled.main`
  background-color: #edece8;
  padding: 72px 0;
`;

export const TitleSection = styled.section`
  padding: 60px 0;
  overflow-y: hidden;
  overflow-x: hidden;
  h2 {
    text-align: left;
    width: 200%;
    text-transform: uppercase;
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 400;
    outline: hidden;
    font-size: 60px;
    margin: 0;
    padding: 0;
    margin-bottom: 8px;
    color: #b5a682;
  }
`;
