import CarouselLevels from 'pages/Levels/components/carousel';
import React from 'react';
import Bachelour from 'assets/programs/bachelor.png';
import moment from 'moment';
import { Container, Title } from 'styles/globalStyle';
import AboutComponents from './about';
import { Video } from 'pages/About/components/video';
import TextContnet from './textContnet';
import useLevel from './hook';
import { useTranslation } from 'react-i18next';

export default function LevelPage() {
  const { data } = useLevel();
  const { t } = useTranslation();
  return (
    <>
      <CarouselLevels
        id={'tdau'}
        picture={`${process.env.REACT_APP_API_SECOND_ROOT}/${data?.photo}`}
        title={data?.name}
        text={`${t('app-academic-year')}  ${parseInt(
          moment(new Date()).format('YYYY')
        )}-${parseInt(moment(new Date()).format('YYYY')) + 1}
${t('upgraduate-postgraduate')}`}
      />
      <Container>
        <AboutComponents data={data} />
      </Container>
      <Video url={data?.link} />
      <Container>
        <TextContnet data={data?.faculty_data_metas} />
      </Container>
    </>
  );
}
