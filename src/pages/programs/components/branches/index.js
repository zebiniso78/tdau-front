import { Col, Row } from 'antd';
import { CardComponent } from 'components/card';
import { ProgramContainer } from 'pages/programs/style';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Branches() {
  const history = useHistory();
  return (
    <ProgramContainer className="my-5">
      <h2
        style={{
          fontWeight: 700,
          fontSize: 48,
          color: '#142E38',
          textAlign: 'center',
        }}
      >
        Branches
      </h2>
      <br />

      <Row gutter={[16, 16]} align="middle" justify="space-between">
        <Col span={24} md={8}>
          <CardComponent
            onClick={() => history.push('/bachelour')}
            status="Branches"
            image="https://picsum.photos/400"
            type="event_calendar"
            training_date="12 - MAY"
            title="Branches"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            starting_date="15:00 PM"
          />
        </Col>
        <Col span={24} md={8}>
          <CardComponent
            onClick={() => history.push('/bachelour')}
            status="Branches"
            image="https://picsum.photos/400"
            type="event_calendar"
            training_date="12 - MAY"
            title="Branches"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            starting_date="15:00 PM"
          />
        </Col>
        <Col span={24} md={8}>
          <CardComponent
            onClick={() => history.push('/bachelour')}
            status="Branches"
            image="https://picsum.photos/400"
            type="event_calendar"
            training_date="12 - MAY"
            title="Branches"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            starting_date="15:00 PM"
          />
        </Col>
      </Row>
    </ProgramContainer>
  );
}
