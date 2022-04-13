import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import PureModal from 'react-pure-modal';
// import Input from '../../Input';
import Input from '../../Input';
import Button from '../../Button';
import { Registration } from './registration';
import { Verify } from './verify';
import { Login } from './login';

function Navbar() {
  const location = useLocation();
  const [navBg, setNavBg] = React.useState('#1a3426');

  const [modal, setModal] = useState(false);
  const [registerModel, setRegisterModel] = useState(false);
  const [confirmModel, setConfirmModel] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null)
  return (
    <>
      <MyHeader style={{ backgroundColor: navBg }}>
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
              {
                localStorage.getItem('token') ? <button className='login-button'>Admission</button> :
                  <button
                    className="login-button"
                    type="submit"
                    onClick={() => setModal(true)}
                  >
                    Вход / Регистрация
                    <BiUser />
                  </button>
              }

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

        <Login
          setModal={setModal}
          modal={modal}
          setRegisterModel={setRegisterModel}
        />
        <Registration
          setConfirmModel={setConfirmModel}
          setRegisterModel={setRegisterModel}
          setModal={setModal}
          registerModel={registerModel}
          setPhoneNumber={setPhoneNumber} />
        <Verify
          setConfirmModel={setConfirmModel}
          setRegisterModel={setRegisterModel}
          setConfirmModel={setConfirmModel}
          confirmModel={confirmModel}
          phoneNumber={phoneNumber} />
      </MyHeader>
    </>
  );
}

export default Navbar;
