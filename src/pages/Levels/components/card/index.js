import { Row } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import CardProviderComponent from '../cardProvider';

import { CardProvider, CardTitle } from './style';

export function Card({ data, program }) {
  const { pathname } = useLocation();

  return (
    <CardProvider>
      <CardTitle data-aos="fade-right">
        {pathname === '/bachelor'
          ? 'Bachelor'
          : pathname === '/master'
          ? 'Master'
          : 'PHD'}
      </CardTitle>
      <Row gutter={[16, 16]}>
        <CardProviderComponent data={data} program={program} type={pathname} />
      </Row>
    </CardProvider>
  );
}
