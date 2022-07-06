import { Col, Row } from 'antd';
import { CardComponent } from 'components/card';
import { ProgramContainer } from 'pages/programs/style';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Title } from 'styles/globalStyle';
export default function Programs({ data, programsData }) {
  const history = useHistory();

  return (
    <ProgramContainer className="my-5">
      <br />
      <Title style={{ textAlign: 'right', fontWeight: 700, fontSize: '48px' }}>
        {data?.title}
      </Title>
      <br />
      <Row align="middle" justify="space-between" gutter={[24, 24]}>
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
        style={{
          fontWeight: 700,
          fontSize: 48,
          color: '#142E38',
          textAlign: 'center',
        }}
      >
        PROGRAMS
      </h2>
      <br />

      <Row gutter={[16, 16]} align="middle">
        {programsData?.map((x, i) => (
          <Col key={i} span={24} md={8}>
            <CardComponent
              onClick={() => history.push(`/${x?.name?.toLowerCase()}`)}
              status={x?.name}
              image={`${process.env.REACT_APP_API_SECOND_ROOT}/${x?.photo}`}
              type="event_calendar"
              training_date={`${x?.count} FACULTY`}
              title={x?.name}
              description={x?.desc}
            />
          </Col>
        ))}
        {/* <Col span={24} md={8}>
          <CardComponent
            onClick={() => history.push('/bachelour')}
            status="Bachelor"
            image="https://picsum.photos/400"
            type="event_calendar"
            training_date="12 - MAY"
            title="Bachelor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            starting_date="15:00 PM"
          />
        </Col>
        <Col span={24} md={8}>
          <CardComponent
            onClick={() => history.push('/bachelour')}
            status="Bachelor"
            image="https://picsum.photos/400"
            type="event_calendar"
            training_date="12 - MAY"
            title="Bachelor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            starting_date="15:00 PM"
          />
        </Col> */}
      </Row>
    </ProgramContainer>
  );
}
