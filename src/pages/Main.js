import React from 'react';
import styled from 'styled-components';
import { Container } from '../common/grid';
import { Navbar } from '../components/navbar';
import Logo from '../assets/logo.png';
import Background from '../assets/main-bg.png';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import {
  AiFillEye,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from 'react-icons/ai';

function Main() {
  return (
    <>
      <MainPage>
        <MainHeader>
          <MyContainer>
            <LogoWrapper>
              <img className="logo" src={Logo} alt="Logo" />
              <p className="header-title">
                Toshkent Davlat Agrar Universtiteti
              </p>
            </LogoWrapper>

            <InputWrapper>
              <p className="phone-number">+71 631 42 21</p>
              <div className="input-search-wrapper">
                <input
                  className="input-search"
                  type="search"
                  placeholder="Search.."
                />
                <FiSearch />
              </div>
              <select className="select-lang">
                <option>Rus</option>
                <option>Eng</option>
              </select>

              <button className="login-button" type="submit">
                <span>Вход /</span> Регистрация
                <BiUser />
              </button>
            </InputWrapper>
          </MyContainer>
        </MainHeader>
        <MainNav>
          <MyContainer>
            <ul>
              <li>
                <a href="google.com">
                  <span>Университет</span> <AiOutlineDown />
                </a>
              </li>
              <li>
                <a href="google.com">
                  <span>Деятельность</span> <AiOutlineDown />
                </a>
              </li>
              <li>
                <a href="google.com">
                  <span>Интерактивные услуги</span> <AiOutlineDown />
                </a>
              </li>
              <li>
                <a href="google.com">
                  <span>Поступление</span> <AiOutlineDown />
                </a>
              </li>
              <li>
                <a href="google.com">
                  <span>Совместные программы</span> <AiOutlineDown />
                </a>
              </li>
              <li>
                <a href="google.com">
                  <span>Иностранные студенты</span> <AiOutlineDown />
                </a>
              </li>
              <li>
                <a href="google.com">
                  <span>Контакт</span> <AiOutlineDown />
                </a>
              </li>
            </ul>
          </MyContainer>
        </MainNav>
        <FirstPage>
          <MyContainer>
            <div className="first-page-wrapper">
              <p className="date-info">
                <BsCalendarWeek /> <span>10 января 2021</span>
                <AiFillEye /> <span>236456</span>
              </p>
              <h2 className="first-page-header">
                Прямая связь институтов гражданского общества с государственными
                органами
              </h2>
              <p className="first-page-title">
                В развитых странах водительское удостоверение выдается только
                тем, кто досконально освоил правила вождения. Ветчина ...
              </p>
              <button className="more-button">Подробнее</button>
            </div>
          </MyContainer>
        </FirstPage>
        <MainFooter>
          <MyContainer>
            <ul>
              <li className="buttons">
                <button className="button-right">
                  <AiOutlineArrowRight />
                </button>
                <button className="button-left">
                  <AiOutlineArrowLeft />
                </button>
              </li>
              <li>
                <h2>
                  «Любой малыш за ваши деньги». Как разоблачили преступную
                  группу, поставив...
                </h2>
                <p>
                  Вы слышали о преступной группе, которая за 5 лет продала в
                  Ташкенте 70 младенцев? Глава группировки взяла под...
                </p>
                <p className="date-info">
                  <BsCalendarWeek /> <span>10 января 2021</span>
                  <AiFillEye /> <span>236456</span>
                </p>
              </li>
            </ul>
          </MyContainer>
        </MainFooter>
      </MainPage>
    </>
  );
}

const MainPage = styled.main`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainHeader = styled.header`
  padding-top: 24px;
`;

const MyContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
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

const InputWrapper = styled.div`
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

const MainNav = styled.nav`
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

const FirstPage = styled.section`
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

const MainFooter = styled.section`
  ul {
    list-style: none;
    dislay: flex !important;
    justify-content: space-between;
    align-items: center;

    li {
      width: 25%;
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
      }
    }

    .buttons {
      width: 12%;
      dislay: flex;
      flex-direction: column;

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
`;

export default Main;
