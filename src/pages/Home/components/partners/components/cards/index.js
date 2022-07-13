import { CardComponent } from 'components/card';
import React, { useEffect, useState } from 'react';
import CardOne from 'assets/cards/card-one.png';
import CardSecond from 'assets/cards/card-second.png';
import CardThree from 'assets/cards/card-three.png';
import CardFour from 'assets/cards/card-four.png';
import { CardProvider, CardWrap } from './style';
import { LandingTitle } from 'styles/globalStyle';
import Academia from 'assets/cards/academiya.png';
import MagnusUniversity from 'assets/cards/magnus_university.png';
import RussianUniversity from 'assets/cards/russian_university.png';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { fetchData } from 'hooks/useFetch';
import { partnersApi } from 'services/api/pagesApi';
import YouTube, { UniversitySkeleton } from 'components/skeleton';
import browserStorage from 'services/storage';
import { useTranslation } from 'react-i18next';

export function Cards() {
  const { t } = useTranslation();
  const history = useHistory();
  const [loader, setLoader] = useState(true);
  const [partners, setPartners] = useState(undefined);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(partnersApi.readPartners(null), setPartners, setLoader);
    setData(partners?.all);
  }, []);

  useEffect(() => {
    if (partners !== undefined) {
      setData(partners?.all);
    }
  }, [partners]);

  function blogInfo(item) {
    browserStorage.set('blog', JSON.stringify(item));
    history.push(`/partner-universities/blog/${item?.id}`);
  }
  console.log(data);
  return (
    <CardProvider>
      <LandingTitle>{t('partner-university')}</LandingTitle>
      <CardWrap style={{ justifyContent: 'center' }}>
        {!loader ? (
          <Row gutter={[16, 16]}>
            {data?.map((item) => (
              <Col key={item?.id} span={24} xl={6} sm={12}>
                <CardComponent
                  type="university"
                  onClick={() => blogInfo(item)}
                  image={`${process.env.REACT_APP_API_SECOND_ROOT}/${item?.picture}`}
                  cardLogo={`${process.env.REACT_APP_API_SECOND_ROOT}/${item?.logo}`}
                  title={item?.title}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <UniversitySkeleton />
        )}
      </CardWrap>
    </CardProvider>
  );
}
