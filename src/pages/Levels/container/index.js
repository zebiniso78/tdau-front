import React from 'react';
import { Container } from 'styles/globalStyle';
import { Card } from '../components/card';
import CarouselLevels from '../components/carousel';
import Bachelour from 'assets/programs/bachelor.png';
import Magistr from 'assets/programs/magistr.png';
import PHD from 'assets/programs/phd.png';
import { useLocation } from 'react-router-dom';
export default function Levels() {
  const { pathname } = useLocation();
  return (
    <>
      <CarouselLevels
        id={'tdau'}
        picture={
          pathname == '/bachelor'
            ? Bachelour
            : pathname == '/Master'
            ? Magistr
            : PHD
        }
        title="Tashkent State Agrarian University"
        text="Applications are now Open for the Academic year 2022-2023
for Undergraduate and Postgraduate courses!"
      />
      <Container>
        <Card />
      </Container>
    </>
  );
}
