import React from 'react';
import ServiceCard from '../../ServiceCard';
import { Container } from '../../../common/grid';
import './ServiceStyle';

function Service() {
  return (
    <>
      <Container>
        <h2>Наши сервисы</h2>

        <ServiceCard />
      </Container>
    </>
  );
}

export default Service;
