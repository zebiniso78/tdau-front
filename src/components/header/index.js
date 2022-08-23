import React, { useState } from 'react';
import { Brand, NavbarSite, Wrapper } from './style';
import LogoImg from 'assets/logo/logo.svg';
import { useTranslation } from 'react-i18next';
import MenuComponent from './components/menu';
import { Container } from 'styles/globalStyle';
import { MenuFoldOutlined } from '@ant-design/icons';
export default function Header({ data }) {
  const { t } = useTranslation();
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <NavbarSite>
      <Container>
        <Wrapper>
          <Brand to={'/'}>
            <img src={LogoImg} alt="tdau" />
          </Brand>

          <MenuComponent
            setToggleNavbar={setToggleNavbar}
            toggleNavbar={toggleNavbar}
            data={data}
          />

          <button
            onClick={() => setToggleNavbar(true)}
            className="toggleButton"
          >
            <MenuFoldOutlined />
          </button>
        </Wrapper>
      </Container>
    </NavbarSite>
  );
}
