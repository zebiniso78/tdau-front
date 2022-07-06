import React from 'react';
import { Container } from 'styles/globalStyle';
import { Card } from '../components/card';
import CarouselLevels from '../components/carousel';
import Bachelour from 'assets/programs/bachelor.png';
import Magistr from 'assets/programs/magistr.png';
import PHD from 'assets/programs/phd.png';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import useLevels from '../hooks';
export default function Levels() {
  const { pathname } = useLocation();
  const { data, prog } = useLevels();
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
        text={`Applications are now Open for the Academic year  ${parseInt(
          moment(new Date()).format('YYYY')
        )}-${parseInt(moment(new Date()).format('YYYY')) + 1}
for Undergraduate and Postgraduate courses!`}
      />
      <Container>
        <Card data={data} program={prog} />
      </Container>
    </>
  );
}
