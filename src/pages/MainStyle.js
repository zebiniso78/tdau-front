import Background from '../assets/main-bg.png';
import styled from 'styled-components';
import { Container, Col6 } from '../common/grid';
import NewsCard from '../components/NewsCard';

export const Home = styled.header`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 0;
`;

export const MainHeader = styled.section`
  padding-top: 12px;
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

export const MainBody = styled.main`
  background-color: #edece8;
  padding: 120px 0;
`;

export const AboutSection = styled.section``;

export const MyCol6 = styled(Col6)`
  padding-left: auto;

  .rectangle {
    position: relative;
    box-sizing: border-box;
    width: 45%;
    height: 50vh;
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
    box-sizing: border-box;
  }

  h2 {
    width: 70%;
    font-family: 'Cormorant Garamond', serif;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-transform: uppercase;
    color: #343e5a;
    margin: 0;
    padding: 0;
    margin-bottom: 8px;
  }

  p {
    width: 70%;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
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
      font-size: 11px;
      margin-right: 16px;
    }

    a {
      text-decoration: none;
      font-size: 12px;
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
`;

export const TitleSection = styled.section`
  padding: 52px 0;
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

export const NewSection = styled.section`
  padding: 60px 0;
  .news-container {
    display: inline-block;

    .news-title__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
      margin-bottom: 20px;

      h2 {
        margin: 0;
        padding: 0;
        font-size: 24px;
        line-height: 32px;
        color: #169622;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #45ab4e;

        svg {
          margin-left: 10px;
        }
      }
    }
  }

  .news-card__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  .one-card__wrapper {
    width: 30%;
  }

  .several-cards__wrapper {
    width: 46%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;

    .small-cards {
      box-sizing: border-box;
      width: 49.5% !important;
      margin-bottom: 8px;

      h3 {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 6px;
      }

      p {
        font-size: 12px;
      }
    }
  }

  .news-posts__wrapper {
    width: 22%;
  }
`;
