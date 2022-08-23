import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownElement, Lang } from './styled';

import UZ from 'assets/language_flags/uzb.svg';
import RU from 'assets/language_flags/ru.svg';
import EN from 'assets/language_flags/usa.svg';

export default function LanguageComponent() {
  const { t } = useTranslation();

  function onchange(event) {
    console.log(event, 'eveeent');
    localStorage.setItem('language', event);
    i18next.changeLanguage(event);
  }

  return (
    <DropdownElement>
      <Lang>
        {t('language') == 'uz' ? (
          <img src={UZ} alt="uz" />
        ) : t('language') == 'ru' ? (
          <img src={RU} alt="ru" />
        ) : (
          <img src={EN} alt="en" />
        )}
      </Lang>
      <ul>
        <li onClick={() => onchange('uz')}>
          <img src={UZ} alt="uz" /> UZ
        </li>
        <li onClick={() => onchange('ru')}>
          <img src={RU} alt="ru" /> RU
        </li>
        <li onClick={() => onchange('en')}>
          <img src={EN} alt="en" /> ENG
        </li>
      </ul>
    </DropdownElement>
  );
}
