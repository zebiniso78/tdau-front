import styled from 'styled-components';


export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 110vh;
  background-image: url(${props => props.backgroundImage});
  box-shadow: 0px 11.17px 27.93px #dfd9ce;

  /* -filter: blur(250px); */
  @media (max-width: 768px) {
    height: auto;
  }
`

export const MainCard = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const CarouselH2 = styled.h2`
    font-family: 'Inter';
    width: calc(60% - 100px);
    height: 200px;
    background: #fab65d;
    color: white;
    text-align: center;
`