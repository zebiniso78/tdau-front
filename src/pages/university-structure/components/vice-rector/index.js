import { Col, Row } from 'antd';
import { UserCard } from 'components/profileCard/user';
import React from 'react';
import { staff } from 'views/staff';
import { Title, ViceRectorProvider } from './style';

export function ViceRector({ title, data }) {
  return (
    <ViceRectorProvider>
      <Title>{title}</Title>
      <Row gutter={[16, 16]}>
        {data?.map((item, index) => (
          <Col key={index} span={24} md={12} lg={8}>
            <UserCard item={item} />
          </Col>
        ))}
      </Row>
    </ViceRectorProvider>
  );
}
