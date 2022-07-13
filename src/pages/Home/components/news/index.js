import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { LatestNewsProvider, NewsTitle, ImageLayout, Wrap } from './style';
import { fetchData } from 'hooks/useFetch';
import { newsApi } from 'services/api/pagesApi';
import moment from 'moment';
import 'moment/locale/he';
import { FirebaseLoader } from 'components/firebaseLoader';
import { useTranslation } from 'react-i18next';

export function News() {
  const { t } = useTranslation();
  const [isFetch, setIsFetch] = useState(false);
  const [news, setNews] = useState(undefined);
  useEffect(() => {
    fetchData(newsApi.readNews(null), setNews, setIsFetch);
  }, []);
  return (
    <LatestNewsProvider>
      <NewsTitle>{t('news')}</NewsTitle>
      <Row gutter={[16, 16]} style={{ marginBottom: '65px' }}>
        {news ? (
          news[0]?.map((item, index) => (
            <Col
              span={24}
              md={index === 2 || index === 3 ? 6 : 12}
              xxs={12}
              key={item?.id}
              className="news-col"
              data-aos="fade-up"
            >
              <ImageLayout
                className={
                  (index === 2 || index === 3 || index === 4) && 'image-layout'
                }
              >
                <Wrap></Wrap>
                <img
                  src={`${process.env.REACT_APP_API_SECOND_ROOT}/uploads/images/${item?.picture}`}
                  alt="university"
                />
                {index === 2 || index === 3 ? (
                  <>
                    <h3>{item?.title_news}</h3>
                    <h5>{moment(item?.date_posted)?.format('DD.MM.YYYY')}</h5>
                  </>
                ) : (
                  <>
                    <h1>{item?.title_news}</h1>
                    <h4>{moment(item?.date_posted)?.format('DD.MM.YYYY')}</h4>
                  </>
                )}
              </ImageLayout>
            </Col>
          ))
        ) : (
          <FirebaseLoader />
        )}
      </Row>
    </LatestNewsProvider>
  );
}
