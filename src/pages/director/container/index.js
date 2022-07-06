import React from 'react';
import { Container } from 'styles/globalStyle';
import CarouselLevels from '../../Levels/components/carousel';
import moment from 'moment';
import { Branch } from '../components/branch';
import useDirector from '../hook';
import { ProfileCard } from '../components/card';

export default function DirectorPage() {
  const { data } = useDirector();
  return (
    <>
      <CarouselLevels
        id={'tdau'}
        picture={`${process.env.REACT_APP_API_SECOND_ROOT}/${data?.photo1}`}
        title="Tashkent State Agrarian University Samarkand branch"
        text={`Applications are now Open for the Academic year ${parseInt(
          moment(new Date()).format('YYYY')
        )}-${parseInt(moment(new Date()).format('YYYY')) + 1}
           for Undergraduate course!`}
      />
      <Container style={{ marginTop: '80px' }}>
        <ProfileCard item={data} />
        <Branch data={data} />
      </Container>
    </>
  );
}
