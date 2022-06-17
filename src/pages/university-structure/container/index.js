import { ProfileCard } from 'components/profileCard'
import React from 'react'
import { Container } from 'styles/globalStyle'
import { ViceRector } from '../components/vice-rector'

export default function UniversityStructure() {
   return (
      <Container>
         <ProfileCard />
         <ViceRector title='vice rector' />
         <ViceRector title='faculties decanlaries' />
      </Container>
   )
}
