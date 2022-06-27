import styled from 'styled-components';

export const CarouselLayout = styled.div`
  position: relative;
  min-height: 100vh;
  /* top: -50px; */
  backdrop-filter: blur(10px);
`;

export const TextContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 0;
  @media (max-width: 991px) {
    justify-content: space-evenly;
  }
`;

export const LeftContent = styled.div`
  width: 50%;
  min-height: 100vh;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 80px;
  text-align: left;
  h2 {
    font-style: normal;
    font-weight: 700;
    color: #142e38;
    max-width: 622px;
    font-size: 42px;
    line-height: 60px;
  }
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  @media (max-width: 991px) {
    padding: 24px 30px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 16px;
    /* height: 70%; */
    min-height: auto !important;
    h2 {
      font-size: 32px;
      line-height: 1.5;
    }
    p {
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
export const RightContent = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 20px;
  .item {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    flex-wrap: wrap;
    width: 40px;
    a {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-2px);
      }
    }
    .line {
      margin-top: 30px;
      width: 4px;
      height: 160px;
      background-color: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  @media (max-width: 991px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    .item {
      margin-top: 0;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      width: 40%;
      a {
        margin: 0 4px;
      }
    }
    .line {
      display: none;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100vh;
  vertical-align: middle;
  object-fit: cover;
  object-position: center;
`;
