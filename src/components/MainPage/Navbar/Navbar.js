import React, { useState } from 'react';
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

function Navbar() {
  const location = useLocation();
  const [navBg, setNavBg] = React.useState('#1a3426');

  const [registerModal, setRegisterModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  React.useEffect(() => {
    if (window.location.pathname === '/main') {
      setNavBg('rgba(0, 0, 0, 0.4)');
    } else {
      setNavBg('#1a3426');
    }
  }, [location]);

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
              <button
                className="login-button"
                type="submit"
                onClick={() => setRegisterModal(true)}
              >
                Admission
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
          header="Регистрация"
          footer={
            <div className="footer-button__wrapper">
              <Button
                type="submit"
                title="Продолжить"
                onClick={() => {
                  setConfirmModal(true);
                  setRegisterModal(false);
                }}
              />
              <Button
                type="submit"
                title="Выход"
                bgColor="transparent"
                color="#2e7df6"
                onClick={() => {
                  setRegisterModal(false);
                }}
              />
            </div>
          }
          isOpen={registerModal}
          scrollable={true}
          closeButton="X"
          closeButtonPosition="header"
          onClose={() => {
            setRegisterModal(false);
            return true;
          }}
        >
          <Input
            type={`text`}
            required
            title="Имя"
            placeholder="Your Name Here"
            length={80}
          />

          <Input
            type={`text`}
            required
            title="Фамилия"
            placeholder="Your Surname Here"
            length={80}
          />

          <Input
            type={`email`}
            required
            title="Эл.почта"
            placeholder="Your Email Here"
            length={40}
          />

          <Input type={`password`} required title="Пароль" length={20} />

          <Input
            type={`password`}
            required
            title="Подтвердить Пароль"
            length={20}
          />
        </PureModal>

        <PureModal
          header="Вход"
          footer={
            <div className="footer-button__wrapper">
              <Button type="submit" title="Зарегистрироваться" />
              <Button
                type="submit"
                title="Выход"
                bgColor="transparent"
                color="#2e7df6"
                onClick={() => {
                  setConfirmModal(false);
                  setRegisterModal(false);
                }}
              />
            </div>
          }
          isOpen={confirmModal}
          closeButton="X"
          closeButtonPosition="header"
          onClose={() => {
            setConfirmModal(false);
            return true;
          }}
        >
          <Input
            type={`tel`}
            required
            title="Номер телефонный"
            placeholder="+998 91 123 45 67 "
            length={17}
          />

          <Input
            type={`password`}
            required
            title="СМС-код"
            placeholder="Введите код"
            length={80}
          />

          <button className="resend-code__button">
            <span>00:56</span>Отправить код ещё раз
          </button>
        </PureModal>
      </MyHeader>
    </>
  );
}

export default Navbar;
