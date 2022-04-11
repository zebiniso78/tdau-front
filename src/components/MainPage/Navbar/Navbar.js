import React, { useState } from 'react';
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
import Input from '../../input';
import Button from '../../button';
import { Registration } from "./registration"
import { Verify } from './verify';

function Navbar() {
  const [modal, setModal] = useState(false);
  const [registerModel, setRegisterModel] = useState(false);
  const [confirmModel, setConfirmModel] = useState(false);
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
              <button
                className="login-button"
                type="submit"
                onClick={() => setModal(true)}
              >
                Вход / Регистрация
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

        <PureModal
          header="Вход"
          footer={
            <div className="footer-button__wrapper">
              <Button type="submit" title="Вход" onClick={() => setConfirmModel(true)} />
              <Button
                type="submit"
                title="Зарегистрироваться"
                bgColor="transparent"
                color="#2e7df6"
                onClick={() => setRegisterModel(true)}
              />
            </div>
          }
          isOpen={modal}
          closeButton="X"
          closeButtonPosition="header"
          onClose={() => {
            setModal(false);
            return true;
          }}
        >
          <Input
            type={`text`}
            required
            title="Логин"
            placeholder="Your Login Here"
            length={80}
          />

          <Input
            type={`password`}
            required
            title="Пароль"
            placeholder="Your Login Here"
            length={80}
          />
        </PureModal>
        <Registration
          setConfirmModel={setConfirmModel}
          setRegisterModel={setRegisterModel}
          setModal={setModal}
          registerModel={registerModel} />
        <Verify
          setConfirmModel={setConfirmModel}
          setRegisterModel={setRegisterModel}
          setConfirmModel={setConfirmModel}
          confirmModel={confirmModel} />
      </MyHeader>
    </>
  );
}

export default Navbar;
