import React, { useState } from 'react';
import {
  NavbarItem,
  NavbarItemList,
  NavbarItemMini,
  WrapperMenu,
} from './styled';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';
import { MenuUnfoldOutlined, RightOutlined } from '@ant-design/icons';
import LanguageComponent from 'components/languageDropdown';
export default function MenuComponent({ data, toggleNavbar, setToggleNavbar }) {
  const { t } = useTranslation();

  return (
    <WrapperMenu toggleNavbar={toggleNavbar}>
      <button onClick={() => setToggleNavbar(false)} className="toggleButton">
        <MenuUnfoldOutlined />
      </button>

      <NavbarItem>
        {t('university')}

        <NavbarItemList>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to="/about-university">{t('about-university')}</Link>
          </li>

          <li onClick={() => setToggleNavbar(false)}>
            <NavbarItemMini>
              {t('education')}
              <ul>
                <li onClick={() => setToggleNavbar(false)}>
                  <Link to={`/`}>{t('abitur')}</Link>
                </li>
                <li onClick={() => setToggleNavbar(false)}>
                  <Link to={`/bachelor`}>{t('bachelor')}</Link>
                </li>
                <li onClick={() => setToggleNavbar(false)}>
                  <Link to={`/master`}>{t('masters')}</Link>
                </li>
                <li onClick={() => setToggleNavbar(false)}>
                  <Link to={`/phd`}>PhD</Link>
                </li>
                <li onClick={() => setToggleNavbar(false)}>
                  <Link to={`/`}>{t('correspondence')}</Link>
                </li>
                <li onClick={() => setToggleNavbar(false)}>
                  <Link to={`/`}>{t('distance learn')}</Link>
                </li>
              </ul>
            </NavbarItemMini>
          </li>

          <li onClick={() => setToggleNavbar(false)}>
            <Link to="/rectors-message">{t('rector-message')}</Link>
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to="/vision">{t('vision-mision')}</Link>
          </li>
          <li onClick={() => setToggleNavbar(false)}>{t('qualty-policy')}</li>
          <li onClick={() => setToggleNavbar(false)}>
            {t('history-uiversity')}
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to="/university-structure">{t('structure-uiversity')}</Link>
          </li>

          <li onClick={() => setToggleNavbar(false)}>
            <Link to="/about-university">{t('branches')}</Link>
          </li>
        </NavbarItemList>
      </NavbarItem>

      <NavbarItem>
        {t('international-relationship')}

        <NavbarItemList>
          <li onClick={() => setToggleNavbar(false)}>
            <NavbarItemMini>
              {t('double-degree')}

              {data && (
                <ul>
                  {data?.map((item, index) => (
                    <li onClick={() => setToggleNavbar(false)} key={index}>
                      <Link to={`/partner-universities/blog/${item?.id}`}>
                        {item?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </NavbarItemMini>
          </li>

          <li onClick={() => setToggleNavbar(false)}>
            <a href="https://internship.agro.uz/">{t('internship')}</a>
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to="/">{t('foreign students')}</Link>
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to="/">{t('education and training abroad')}</Link>
          </li>
        </NavbarItemList>
      </NavbarItem>

      <NavbarItem>
        {t('science and innovation')}

        <NavbarItemList>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to={`/`}>{t('conferences and seminars')}</Link>
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to={`/`}>{t('scientific articles')}</Link>
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to={`/`}>{t('scientist advice')}</Link>
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to={`/`}>{t('scientific work of students')}</Link>
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to={`/`}>{t('innovative projects')}</Link>
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to={`/`}>{t('catalog of scientific developments')}</Link>
          </li>
        </NavbarItemList>
      </NavbarItem>

      <NavbarItem>
        {t('press center')}

        <NavbarItemList>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to={`/`}>{t('news')}</Link>
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to={`/`}>{t('hit statistics')}</Link>
          </li>
          <li onClick={() => setToggleNavbar(false)}>
            <Link to={`/`}>{t('press service contact')}</Link>
          </li>
        </NavbarItemList>
      </NavbarItem>

      <NavbarItem>{t('campus-life')}</NavbarItem>

      <NavbarItem>
        {t('quick-links')}

        <NavbarItemList>
          <li onClick={() => setToggleNavbar(false)}>
            <a href="http://student.agro.uz/">Smart Campus | Student</a>
          </li>
        </NavbarItemList>
      </NavbarItem>

      <NavbarItem>
        <LanguageComponent />
      </NavbarItem>
    </WrapperMenu>
  );
}
