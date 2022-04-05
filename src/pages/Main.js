import React from 'react';
import './MainStyle';
import {
  MyContainer,
  Home,
  MainHeader,
  MainNav,
  LogoWrapper,
  InputWrapper,
  FirstPage,
  MainBottom,
  MainBody,
  MyCol6,
  AboutSection,
  TitleSection,
  NewSection,
} from './MainStyle';
import { Col4, Col12 } from '../common/grid';
import { Navbar } from '../components/navbar';
import Logo from '../assets/logo.png';
import uniPhoto from '../assets/uniPhoto.png';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { BsPlayFill } from 'react-icons/bs';
import newsCard from '../components/newsCard';
import {
  AiFillEye,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from 'react-icons/ai';

function Main() {
  return (
    <>
      <Home>
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
                <input className="input-search" type="search" />
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
        <MainBottom>
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
              <li className="message">
                <button>
                  <FiMail />
                </button>
              </li>
            </ul>
          </MyContainer>
        </MainBottom>
      </Home>
      <MainBody>
        <AboutSection>
          <MyContainer>
            <MyCol6>
              <div className="rectangle">
                <img src={uniPhoto} alt="University Pic" />
              </div>
            </MyCol6>
            <MyCol6>
              <h2>Ташкентский государственный аграрный университет</h2>
              <p>
                Этот центр был создан на территории знаменитого комплекса
                Хастимом, где великие исламские ученые, ученые и мыслители,
                выросшие в нашей стране, внесли свой вклад в развитие мировой
                культуры.
              </p>
              <div className="buttons-wrapper">
                <button className="more-button">Подробнее</button>
                <a href="youtube.com">
                  <button className="play-button">
                    <BsPlayFill />
                  </button>
                  Видео о нас
                </a>
              </div>
            </MyCol6>
          </MyContainer>
        </AboutSection>
        <TitleSection>
          <h2>Ташкентский государственный аграрный университет</h2>
          <h2>Ташкентский государственный аграрный университет</h2>
        </TitleSection>
        <NewSection>
          <MyContainer>
            <Col12>
              <div className="news-title-wrapper">
                <h2>Новости</h2>
                <a href="wikipedia.com">
                  Все новости <AiOutlineArrowRight />
                </a>
              </div>
              <Col4>
                <newsCard
                  title="A seminar-training on publishing articles was held at our university"
                  text='A seminar-training for professors and teachers of Tashkent State Agrarian University on the publication of articles in specialized scientific publications on the list of international scientific and technical databases "ScienceDirect" and "Web o f science" was held. A seminar-training for professors and teachers of Tashkent State Agrarian University on the publication of articles in specialized scientific publications on the list of international scientific and technical databases "ScienceDirect" and "Web o f science" was held.'
                />
              </Col4>
            </Col12>
          </MyContainer>
        </NewSection>
      </MainBody>
    </>
  );
}
export default Main;
