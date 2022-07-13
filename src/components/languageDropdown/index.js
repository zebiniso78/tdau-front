import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lang } from './styled';

export default function LanguageComponent() {
  const { t } = useTranslation();

  function onchange(event) {
    console.log(event, 'eveeent');
    localStorage.setItem('language', event);
    i18next.changeLanguage(event);
  }

  const menu = (
    <Menu
      theme="light"
      items={[
        {
          label: <span>O'zbekcha</span>,
          onClick: () => onchange('uz'),
        },
        {
          label: <span>Русский</span>,
          onClick: () => onchange('ru'),
        },
        {
          label: <span>English</span>,
          onClick: () => onchange('en'),
        },
      ]}
    />
  );

  return (
    <Dropdown
      overlayStyle={{
        borderRadius: '8px',
        overflow: 'hidden',
        zIndex: '10001',
      }}
      overlay={menu}
      placement="bottom"
    >
      <Lang>
        {t('language')} <CaretDownOutlined />
      </Lang>
    </Dropdown>
  );
}
