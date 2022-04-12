import styled from 'styled-components';
import { Container } from '../../../common/grid';

export const MyHeader = styled.header`
  /* background-color: rgba(0, 0, 0, 0.4); */
  background-color: #1a3426;

  .pure-modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .pure-modal {
      width: 30%;
      max-width: 100%;
      box-sizing: border-box;
      background-color: #ffffff;
      border-radius: 12px;
      padding: 12px 24px;
      transition: all 0.2s ease-in-out;
      transform: translate(0px, 0px);
      transition: none 0s ease 0s;
      max-height: 95%;

      .pure-modal-backdrop .additional-row,
      .pure-modal-backdrop:not(.scrollable) .additional-row {
        display: grid;
        grid-template-rows: min-content minmax(0, 1fr) min-content min-content;
      }

      .panel-heading .panel-title {
        text-align: left;
        margin: 0;
        padding: 0;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #313131;
        margin-bottom: 20px;
      }
    }
  }

  .panel {
    position: relative;

    .close {
      position: absolute !important;
      top: 0;
      right: 0;
      transform: translateY(10%);
      color: #eb5757;
      width: 5%;
      font-size: 24px;
    }
  }

  .footer-button__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .panel-body {
    p {
      margin: 0;
      padding: 0;
      text-align: left;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #b2b1ae;
      margin-bottom: 10px;

      span {
        margin-right: 4px;
        color: #2e7df6;
      }
    }
  }
`;

export const MyContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-center;
  align-items: center;
  .logo {
    width: 52px;
    height: 60px;
    margin-right: 4px;
  }

  .header-title {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    text-transform: uppercase;
  }
`;

export const InputWrapper = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .phone-number {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #57b952;
  }

  .input-search-wrapper {
    position: relative;
    svg {
      position: absolute;
      right: 9px;
      top: 5px;
      color: #57b952;
    }
  }

  .input-search {
    background: transparent;
    outline: none;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    border: 1px solid #728fbb;
    border-radius: 50px;
    padding: 4px 24px 4px 12px;
  }

  .select-lang {
    background: transparent;
    color: white;
    font-weight: 400;
    font-size: 12px;
    border: 1px solid #728fbb;
    border-radius: 50px;
    padding: 4px 8px;
  }

  .login-button {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: white;
    border: none;
    border: 1px solid #728fbb;
    border-radius: 50px;
    font-weight: 400;
    font-size: 12px;
    padding: 4px 8px;
    transition: 0.5s;

    &:hover {
      color: #57b952;
    }

    svg {
      color: #57b952;
      margin-left: 4px;
    }
  }
`;

export const Nav = styled.nav`
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      border-top: 1px solid #4369a5;
      padding: 6px 2px;
      a {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center !important;
        text-decoration: none;

        span {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #ffffff;
        }

        svg {
          color: #57b952;
          margin-left: 4px;
        }
      }
    }
  }
`;
