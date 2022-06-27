import styled from 'styled-components';
// import MainImage from 'assets/navbar/main.png'

export const MainProvider = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    max-width: 100vw;
    overflow-x: hidden;
  } /* .slick-dots-bottom {
    margin-right: auto !important;
    justify-content: flex-end;
    padding-left: 140px;
    padding-right: 140px;

    &:nth-of-type(even) {
      justify-content: flex-start;
    }
  } */
`;
