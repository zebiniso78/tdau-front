import React from 'react';
import {
  MyContainer,
  LogoWrapper,
  InputWrapper,
  Nav,
  MyHeader,
} from './NavbarStyle';
import Logo from '../../../assets/logo.png';
import { AiOutlineDown } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';

function Navbar() {
  return (
    <>
      <MyHeader>
        <section>
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
                  placeholder="Search..."
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
        </section>
        <Nav>
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
        </Nav>
      </MyHeader>
    </>
  );
}

export default Navbar;
