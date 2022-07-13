import { Video } from 'pages/About/components/video';
import React from 'react';
import CarouselComponents from './components/carousel';
import AboutComponents from './components/about';
import Programs from './components/programs';
import Branches from './components/branches';
import useAboutUniver from './hooks';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
export default function ProgramsPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(true);
  const { aboutData, programsData, branchesData } = useAboutUniver({
    setLoading,
  });
  return (
    <div>
      <CarouselComponents
        id={'tdau'}
        picture={`${process.env.REACT_APP_API_SECOND_ROOT}/${aboutData?.photo1}`}
        title={'tdau'}
        text={`${t('app-academic-year')}  ${parseInt(
          moment(new Date()).format('YYYY')
        )}-${parseInt(moment(new Date()).format('YYYY')) + 1}
        ${t('upgraduate-postgraduate')}`}
      />
      <AboutComponents data={aboutData} />
      <Video url={aboutData?.link} />
      <Programs data={aboutData} programsData={programsData} />
      <Branches branchesData={branchesData} />
    </div>
  );
}
