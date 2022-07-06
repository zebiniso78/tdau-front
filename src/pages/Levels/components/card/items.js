import { Col } from 'antd';
import React from 'react';
import { CardHeader, Image, ItemCard, CardBody, Title } from './style';

export function Items({ item }) {
  return (
    <Col span={24} lg={6} md={12}>
      <ItemCard>
        <CardHeader>
          <Image
            src={`${process.env.REACT_APP_API_SECOND_ROOT}/${item?.photo}`}
            alt={item?.name}
          />
        </CardHeader>
        <CardBody>
          <Title>{item?.name}</Title>
        </CardBody>
      </ItemCard>
    </Col>
  );
}
