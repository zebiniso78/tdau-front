import styled from 'styled-components';
import { Col6, Container } from '../../../common/grid';

export const MyContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  .about-right {
    width: 100%;
    height: 70%;
  }
`;

export const MyCol6 = styled(Col6)`
  padding-left: auto;

  .rectangle {
    position: relative;
    box-sizing: border-box;
    width: 55%;
    height: 100%;
    background-color: #73c07a;
    margin-left: auto;
    margin-right: 32px;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 12px;
    left: 12px;
  }

  h2 {
    width: 100%;
    font-family: 'Cormorant Garamond', serif;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 54px;
    text-transform: uppercase;
    color: #343e5a;
    margin: 0;
    padding: 0;
    margin-bottom: 8px;
  }

  p {
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #777674;
    text-align: left;
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
  }

  .buttons-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .more-button {
      background-color: #169622;
      border-radius: 50px;
      padding: 8px 16px;
      color: #fff;
      border: none;
      font-size: 18px;
      margin-right: 16px;
    }

    a {
      text-decoration: none;
      font-size: 18px;
      color: #169622;
      display: flex;
      align-items: center;

      .play-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 50px;
        padding: 7px;
        color: #169622;
        border: none;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        margin-right: 6px;

        svg {
          width: 16px;
          height: 16px;
          margin: 0;
          padding: 0;
        }
      }
    }
  }

  @media (max-width: 1440px) {
    .rectangle {
      width: 63%;
    }
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 1024px) {
    .rectangle {
      width: 63%;
    }
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 18px;
    }
    .more-button {
      font-size: 16px !important;
    }

    a {
      font-size: 16px !important;
    }
  }
`;
