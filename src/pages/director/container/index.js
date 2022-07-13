import React from 'react';
import { Container } from 'styles/globalStyle';
import CarouselLevels from '../../Levels/components/carousel';
import moment from 'moment';
import { Branch } from '../components/branch';
import useDirector from '../hook';
import { ProfileCard } from '../components/card';
import { useTranslation } from 'react-i18next';

export default function DirectorPage() {
  const { data } = useDirector();
  const { t } = useTranslation();
  return (
    <>
      <CarouselLevels
        id={'tdau'}
        picture={`${process.env.REACT_APP_API_SECOND_ROOT}/${data?.photo1}`}
        title={data?.name}
        text={`${t('app-academic-year')}  ${parseInt(
          moment(new Date()).format('YYYY')
        )}-${parseInt(moment(new Date()).format('YYYY')) + 1}
${t('upgraduate-postgraduate')}`}
      />
      <Container style={{ marginTop: '80px' }}>
        <ProfileCard item={data} />
        <Branch data={data} />
      </Container>
    </>
  );
}
