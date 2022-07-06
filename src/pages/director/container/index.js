import React from 'react'
import { Container } from 'styles/globalStyle'
import CarouselLevels from '../../Levels/components/carousel';
import AgrarImage from 'assets/director/agrar.png'
import moment from 'moment'
import { ProfileCard } from 'components/profileCard';
import { Branch } from '../components/branch';

export default function DirectorPage() {
   return (
      <>
         <CarouselLevels
            id={'tdau'}
            picture={AgrarImage}
            title="Tashkent State Agrarian University Samarkand branch"
            text={`Applications are now Open for the Academic year ${parseInt(
               moment(new Date()).format('YYYY')
            )}-${parseInt(moment(new Date()).format('YYYY')) + 1}
           for Undergraduate course!`}
         />
         <Container style={{ marginTop: '80px' }}>
            <ProfileCard />
            <Branch />
         </Container>
      </>
   )
}
