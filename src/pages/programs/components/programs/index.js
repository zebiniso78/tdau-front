import { Col, Row } from 'antd';
import { CardComponent } from 'components/card';
import { ProgramContainer } from 'pages/programs/style';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Title } from 'styles/globalStyle';
export default function Programs({ data, programsData }) {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <ProgramContainer className="my-5">
      <br />
      <Title
        data-aos="fade-right"
        style={{ textAlign: 'right', fontWeight: 700, fontSize: '48px' }}
      >
        {data?.title}
      </Title>
      <br />
      <Row
        data-aos="fade-up"
        align="middle"
        justify="space-between"
        gutter={[24, 24]}
      >
        <Col span={24} md={10}>
          <p style={{ textAlign: 'justify' }}>{data?.desc2}</p>
        </Col>
        <Col span={24} md={12}>
          <img
            style={{ width: '100%', objectFit: 'cover', maxHeight: '400px' }}
            src={`${process.env.REACT_APP_API_SECOND_ROOT}/${data?.photo2}`}
            alt="Addational"
          />
        </Col>
      </Row>
      <br />
      <h2
        data-aos="fade-up"
        style={{
          fontWeight: 700,
          fontSize: 48,
          color: '#142E38',
          textAlign: 'center',
        }}
      >
        {t('programs')}
      </h2>
      <br />

      <Row gutter={[16, 16]} align="middle">
        {programsData?.map((x, i) => (
          <Col data-aos="fade-up" key={i} span={24} md={8}>
            <CardComponent
              onClick={() => history.push(`/${x?.name?.toLowerCase()}`)}
              status={x?.name}
              image={`${process.env.REACT_APP_API_SECOND_ROOT}/${x?.photo}`}
              type="event_calendar"
              training_date={`${x?.count} ${t('faculty')}`}
              title={x?.name}
              description={x?.desc}
            />
          </Col>
        ))}
      </Row>
    </ProgramContainer>
  );
}
