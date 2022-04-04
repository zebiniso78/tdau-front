import Background from '../assets/main-bg.png';
import styled from 'styled-components';
import { Container } from '../common/grid';

export const MainPage = styled.main`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainHeader = styled.header`
  padding-top: 24px;
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
    border: 1px solid #728fbb;
    border-radius: 50px;
    padding: 0px 8px;

    svg {
      color: #57b952;
    }
  }

  .input-search {
    background: transparent;
    outline: none;
    box-sizing: border-box;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    padding: 1px 0px;
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
    dislay: flex;
    align-items: center;
    background-color: transparent;
    color: white;
    border: none;
    border: 1px solid #728fbb;
    border-radius: 50px;
    font-weight: 400;
    font-size: 12px;
    padding: 4px 8px;

    span {
      color: #57b952;
    }

    svg {
      color: #57b952;
      margin-left: 4px;
    }
  }
`;

export const MainNav = styled.nav`
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
        dislay: flex;
        justify-content: center;
        align-items: center !important;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
        text-decoration: none;

        svg {
          color: #57b952;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          margin-left: 4px;
        }
      }
    }
  }
`;

export const FirstPage = styled.section`
  .first-page-wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 160px 0;
  }

  .date-info {
    display: flex;
    align-items: center;
    color: #a1b4d2;
    font-size: 10px;
    margin: 0;
    padding: 0;

    span {
      margin-right: 12px;
    }

    svg {
      margin-right: 4px;
    }
  }

  .first-page-header {
    width: 60%;
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    color: #ffffff;
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
  }

  .first-page-title {
    width: 60%;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
    margin: 0;
    padding: 0;
    margin-bottom: 32px;
  }

  .more-button {
    background: transparent;
    border-radius: 50px;
    padding: 14px 28px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
  }
`;

export const MainBottom = styled.section`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      width: 25%;
      border-left: 2px solid #169622;
      padding-left: 8px;
      h2 {
        box-sizing: border-box;
        text-align: left;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #ffffff;
        margin: 0;
        padding: 0;
        margin-bottom: 4px;
      }
      p {
        box-sizing: border-box;
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        color: #ffffff;
        margin: 0;
        padding: 0;
        margin-bottom: 12px;
      }
      .date-info {
        display: flex;
        align-items: center;
        color: #a1b4d2;
        font-size: 10px;
        margin: 0;
        padding: 0;

        span {
          margin-right: 12px;
        }

        svg {
          margin-right: 4px;
        }
      }
    }

    .buttons {
      width: 8%;
      dislay: flex;
      flex-direction: column;
      border: none;

      button {
        display: block;
        padding: 12px 36px;
        border-radius: 50px;
      }
      .button-right {
        color: white;
        background: transparent;
        border: 1px solid #999ca6;
        box-sizing: border-box;
        margin-bottom: 8px;
      }

      .button-left {
        border: none;
        background: #169622;
        color: white;
      }
    }
  }

  .message {
    width: 6%;
    border: none;

    button {
      border: none;
      color: #fff;
      margin: 0;
      padding: 0;
      padding: 6px 8px;
      border-radius: 50px;
      background: #169622;
      box-shadow: 0px 0px 1px 10px rgba(22, 150, 34, 1);
    }
  }
`;
