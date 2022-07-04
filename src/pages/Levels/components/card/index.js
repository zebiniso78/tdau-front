import { Row } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { bachelorList } from 'views/bachelor';
import { Items } from './items';
import { CardProvider, CardTitle } from './style';

export function Card() {
  const { pathname } = useLocation();

  return (
    <CardProvider>
      <CardTitle>
        {pathname === '/bachelor'
          ? 'Bachelor'
          : pathname === '/Master'
          ? 'Master'
          : 'PHD'}
      </CardTitle>
      <Row gutter={[16, 16]}>
        {bachelorList?.map((item) => (
          <Items key={item?.id} item={item} />
        ))}
      </Row>
    </CardProvider>
  );
}
