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
        {t('language') == 'eng'
          ? 'English'
          : t('language') == 'ru'
          ? 'Русский'
          : "O'zbekcha"}{' '}
        <CaretDownOutlined />
      </Lang>
      <ul>
        <li onClick={() => onchange('uz')}>O'zbekcha</li>
        <li onClick={() => onchange('ru')}>Русский</li>
        <li onClick={() => onchange('en')}>English</li>
      </ul>
    </DropdownElement>
  );
}
