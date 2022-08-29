import { Table } from 'antd';
import { Container } from 'common/grid';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper } from './style';

export default function TableInfo() {
  const { t } = useTranslation();
  const dataSource = [
    {
      key: '1',
      name: 'Biznesni boshqarish (Tarmoqlar bo‘yicha)',
      place: 'WSB universiteti. Polsha.',
      type: 'kunduzgi',
      lang: 'Ingliz tili',
    },
    {
      key: '2',
      name: 'Biznesni boshqarish (Tarmoqlar bo‘yicha)',
      place: 'WSB universiteti. Polsha.',
      type: 'sirtqi',
      lang: 'Ingliz tili',
    },
    {
      key: '3',
      name: 'Logistika (yo‘nalishlar bo‘yicha)',
      place: 'Vitautas Magnus Universiteti. Litva',
      type: 'kunduzgi',
      lang: 'Ingliz tili',
    },
    {
      key: '4',
      name: 'Buxgalteriya hisobi va audit (tarmoqlar bo‘yicha)',
      place: 'Irkutsk davlat agrar universiteti. Rossiya',
      type: 'sirtqi',
      lang: 'Rus tili',
    },
    {
      key: '5',
      name: 'Oziq-ovqat texnologiyasi (mahsulot turlari bo‘yicha)',
      place: 'Latviya tabiiy fanlar va texnologiyalar universiteti. Latviya.',
      type: 'kunduzgi',
      lang: 'Ingliz tili',
    },
  ];

  const dataSourceMaster = [
    {
      key: '1',
      name: 'Biznesni boshqarish (Master of Business Administration-MBA)',
      place: 'WSB universiteti. Polsha.',
      type: 'kunduzgi',
      lang: 'Ingliz tili',
    },
    {
      key: '2',
      name: 'Iqtisodiyot (tarmoqlar va sohalar boʼyicha)',
      place: 'Irkutsk davlat agrar universiteti. Rossiya',
      type: 'kunduzgi',
      lang: 'Rus  tili',
    },
    {
      key: '3',
      name: 'Аgrobiznes va investitsion faoliyat',
      place: 'Missisipi shtati universiteti. A.Q.SH.',
      type: 'kunduzgi',
      lang: 'Ingliz tili',
    },
    {
      key: '4',
      name: 'Qishloq xo‘jalik hayvonlarini urchitish, ko‘paytirish va ularning seleksiyasi (yilqichilik)',
      place:
        'K.A.Timiryazev nomidagi Rossiya davlat agrar universiteti. Rossiya.',
      type: 'kunduzgi',
      lang: 'Rus tili',
    },
  ];

  const columns = [
    {
      title: '№',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Ta’lim yo‘nalishlar va mutaxassisliklar',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Hamkor oliy ta’lim muassasasi',
      dataIndex: 'place',
      key: 'place',
    },
    {
      title: 'Ta’lim shakli',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Ta’lim tili',
      dataIndex: 'lang',
      key: 'lang',
    },
  ];

  return (
    <Wrapper>
      <h3>{t('titledd')}</h3>
      <br />
      <div className="infos">
        <h4>{t('bachelor')}</h4>
        <Table
          dataSource={dataSource}
          pagination={false}
          columns={columns}
          scroll={{ x: 400 }}
        />
        <h4>{t('master')}</h4>
        <Table
          dataSource={dataSourceMaster}
          scroll={{ x: 400 }}
          pagination={false}
          columns={columns}
        />
      </div>
    </Wrapper>
  );
}
