import { ProfileCard } from 'components/profileCard';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'styles/globalStyle';
import { ViceRector } from '../components/vice-rector';
import useVice from '../hook';

export default function UniversityStructure() {
  const { data, rectorData } = useVice();
  const { t } = useTranslation();
  return (
    <Container>
      <ProfileCard item={rectorData} />
      <ViceRector
        data={data?.filter((x) => x?.role === 'vice')}
        title={t('vice-rector')}
      />
      <ViceRector
        data={data?.filter((x) => x?.role === 'decan')}
        title={t('deans-faculty')}
      />
    </Container>
  );
}
