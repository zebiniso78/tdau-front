import styled from 'styled-components';
import { Container } from '../../../common/grid';

export const MyContainer = styled(Container)`
  text-align: left;
  padding: 120px 0;
  overflow: hidden;
  h2 {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 32px;
    line-height: 36px;
    color: #169622;
    margin-bottom: 32px;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #169622;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: sans-serif;
  }

  .switch-button {
    background: rgba(237, 236, 232, 1);
    border: 1px solid #cccfd6;
    border-radius: 30px;
    overflow: hidden;
    width: 320px;
    text-align: center;
    font-size: 16px;
    letter-spacing: 1px;
    color: #fff;
    position: relative;
    padding-right: 160px;
    position: relative;
    margin-bottom: 32px;

    &:before {
      content: 'Фотогалерея ';
      color: #777674;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      pointer-events: none;
    }

    &-checkbox {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;

      &:checked + .switch-button-label:before {
        transform: translateX(160px);
        transition: transform 300ms linear;
      }

      & + .switch-button-label {
        position: relative;
        padding: 15px 0;
        display: block;
        user-select: none;
        pointer-events: none;

        &:before {
          content: '';
          background-color: #169622;
          color: #777674;
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 30px;
          transform: translateX(0);
          transition: transform 300ms;
        }

        .switch-button-label-span {
          position: relative;
        }
      }
    }
  }

  .owl-theme {
    position: relative;
    .owl-stage {
      display: flex;
      justify-content: space-between;
      align-items: stretch !important;
    }

    .owl-item .item {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }

    .owl-dots {
      display: none;
    }

    .owl-nav {
      position: absolute;
      top: -32px;

      right: 0;
      transform: translateY(-100%);
      .owl-next,
      .owl-prev {
        border: 2px solid #169622 !important;
        border-radius: 50px;
        width: 40px;
        height: 40px;
        margin-left: 16px;
        padding-bottom: 2px;
        transition: all 0.1s ease;

        &:active {
          background-color: #169622;
          transform: translateY(1px);
          transition: all 0.1s ease;

          span {
            color: #fff;
          }
        }

        span {
          margin: 0;
          padding: 0;
          text-align: center;
          color: #169622;
          font-size: 28px;
          line-height: 32px;
          transform: translateX(-100%);
          transition: all 0.1s ease;
        }
      }
    }
  }

  @media (max-width: 1440px) {
    h2 {
      font-size: 28px;
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 24px;
    }
  }
`;
