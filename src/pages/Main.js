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
  MyCol12,
  MyCol4,
} from './MainStyle';
import Logo from '../assets/logo.png';
import uniPhoto from '../assets/uniPhoto.png';
import CardImage1 from '../assets/cardImage1.png';
import CardImage2 from '../assets/cardImage2.png';
import CardImage3 from '../assets/cardImage3.png';
import CardImage4 from '../assets/cardImage4.png';
import CardImage5 from '../assets/cardImage5.png';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsCalendarWeek } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { BsPlayFill } from 'react-icons/bs';
import NewsCard from '../components/NewsCard';
import {
  AiFillEye,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from 'react-icons/ai';
import NewsPost from '../components/NewsPost';
import Service from '../components/MainPage/Service/Service';

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
          <MyContainer className="news-container">
            <div className="news-title__wrapper">
              <h2>Новости</h2>
              <a href="wikipedia.com">
                Все новости <AiOutlineRight />
              </a>
            </div>
            <div className="news-card__wrapper">
              <div className="one-card__wrapper">
                <NewsCard
                  image={CardImage1}
                  date="10 января 2021"
                  seen="268 743"
                  title="Сложности с получением водительских прав за границей: падают необразованные, нет возможности..."
                  text="В развитых странах водительское удостоверение выдается только тем, кто досконально освоил правила вождения. Своим опытом поделились люди, непосредственно знакомые с процессом получения водительских прав, как в Узбекистане, так и за рубежом."
                  hash="узбекистане"
                  hash2="новости"
                />
              </div>
              <div className="several-cards__wrapper">
                <NewsCard
                  className="small-cards"
                  image={CardImage2}
                  date="10 января 2021"
                  seen="268 743"
                  title="Цена, продолжительность и качество обслуживания - по вопросам, которые волнуют насел..."
                  hash="узбекистане"
                  hash2="семинары"
                />
                <NewsCard
                  className="small-cards"
                  image={CardImage3}
                  date="10 января 2021"
                  seen="268 743"
                  title="Реджеп Тайип Эрдоган и первая леди Турции Эмине Эрдоган прибыли в Узбекистан"
                  hash="узбекистане"
                  hash2="конференции"
                />
                <NewsCard
                  className="small-cards"
                  image={CardImage4}
                  date="10 января 2021"
                  seen="268 743"
                  title="Со следующего месяца в Узбекистане повысят один из видов пенсий и введут новое пособие"
                  hash="узбекистане"
                  hash2="тендер"
                />
                <NewsCard
                  className="small-cards"
                  image={CardImage5}
                  date="10 января 2021"
                  seen="268 743"
                  title="Обнародован список правонарушений, за сообщения о которых можно заработать"
                  hash="узбекистане"
                  hash2="эълон"
                />
              </div>
              <div className="news-posts__wrapper">
                <NewsPost
                  date="10 января 2021"
                  seen="268 473"
                  title="Члены конгресса Международной федерации футбола (ФИФА) почтили мину..."
                />

                <NewsPost
                  date="10 января 2021"
                  seen="268 473"
                  title="Президент прокомментировал рост цен на сахар"
                />

                <NewsPost
                  date="10 января 2021"
                  seen="268 473"
                  title="ЦБ опубликовал курс валют на 1 апреля"
                />

                <NewsPost
                  date="10 января 2021"
                  seen="268 473"
                  title="В ГНК уточнили, как осуществляется налоговое администрирование на региона..."
                />

                <NewsPost
                  date="10 января 2021"
                  seen="268 473"
                  title="Путин заявил, что условия для прекращения огня в Украине еще не созрели"
                />
              </div>
            </div>
          </MyContainer>
        </NewSection>
        <Service />
      </MainBody>
    </>
  );
}
export default Main;
