import { ProfileCard } from 'components/profileCard';
import React from 'react';
import { Container } from 'styles/globalStyle';
import { ViceRector } from '../components/vice-rector';
import useVice from '../hook';

export default function UniversityStructure() {
  const { data, rectorData } = useVice();
  return (
    <Container>
      <ProfileCard item={rectorData} />
      <ViceRector
        data={data?.filter((x) => x?.role === 'vice')}
        title="vice rector"
      />
      <ViceRector
        data={data?.filter((x) => x?.role === 'decan')}
        title="faculties decanlaries"
      />
    </Container>
  );
}
