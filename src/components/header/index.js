import { Container } from 'common/grid';
import React from 'react';
import { Brand, NavbarSite } from './style';
import LogoImg from 'assets/logo/logo.svg';
import { useTranslation } from 'react-i18next';
export default function Header() {
  const { t } = useTranslation();

  return (
    <NavbarSite>
      <Container>
        <Brand to={'/'}>
          <img src={LogoImg} alt="tdau" />
        </Brand>
      </Container>
    </NavbarSite>
  );
}
