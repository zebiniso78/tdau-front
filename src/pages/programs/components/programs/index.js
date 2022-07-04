import { Col, Row } from 'antd';
import { CardComponent } from 'components/card';
import { ProgramContainer } from 'pages/programs/style';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Title } from 'styles/globalStyle';
import BachelorImg from 'assets/programs/bachelor.png';
import MagistrImg from 'assets/programs/magistr.png';
import PhdImg from 'assets/programs/phd.png';
export default function Programs() {
  const history = useHistory();

  const Items = [
    {
      id: 1,
      faculty_count: 78,
      name: 'Bachelor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '15:00 PM',
      img: BachelorImg,
      link: '/bachelor',
    },
    {
      id: 2,
      faculty_count: 34,
      name: 'Master',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '15:00 PM',
      img: MagistrImg,
      link: '/Master',
    },
    {
      id: 3,
      faculty_count: 18,
      name: 'PHD',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '15:00 PM',
      img: PhdImg,
      link: '/phd',
    },
  ];

  return (
    <ProgramContainer className="my-5">
      <br />
      <Title style={{ textAlign: 'right' }}>Lorem ipsum dolor sit amet.</Title>
      <br />
      <Row align="middle" justify="space-between" gutter={[24, 24]}>
        <Col span={24} md={12}>
          <p style={{ textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            vestibulum libero ante, non tempus justo finibus at. Fusce semper
            consectetur porttitor. Vivamus vel dolor dolor. Fusce tempus sit
            amet sem accumsan pulvinar. Cras vestibulum justo sagittis tortor
            vehicula vulputate. In et purus eget dolor egestas sollicitudin et
            sit amet ligula. Aliquam ac sapien nec sapien consectetur facilisis.
            Sed eu nisl laoreet, pellentesque lectus nec, pulvinar neque. Sed
            placerat, risus eget dapibus venenatis, neque lectus ornare velit,
            eget venenatis arcu risus nec libero. Etiam tristique tellus quis
            est maximus, quis dignissim odio tristique. Vestibulum dignissim
            dolor vel augue feugiat mollis. Aenean mollis posuere gravida.
            Quisque malesuada vitae ante scelerisque porttitor. Praesent augue
            lorem, sagittis bibendum nibh id, aliquam rutrum enim. Vivamus nisi
            ipsum, vestibulum nec eros eu, finibus faucibus nunc. Aliquam sit
            amet porta neque, maximus feugiat elit. Morbi vestibulum elit neque,
            quis tincidunt libero laoreet sed. Mauris blandit aliquam sem in
            lacinia. Nunc mollis nibh non varius pharetra. In sollicitudin
            tristique leo eu pulvinar. Aliquam risus lorem, tempus ac diam
            molestie, iaculis molestie risus. Vestibulum malesuada aliquet orci
            eget condimentum. Maecenas euismod, augue vitae egestas porttitor,
            neque odio pretium nisl, sed commodo risus magna in mauris. Mauris
            et mauris eget diam pretium eleifend sit amet nec nulla. Aliquam
            quam orci, auctor nec bibendum eget, porttitor id quam. Pellentesque
            at quam vel turpis gravida rhoncus. Sed suscipit quam iaculis,
            ultricies urna ac, condimentum turpis.
          </p>
        </Col>
        <Col span={24} md={12}>
          <img
            style={{ width: '100%', objectFit: 'cover', maxHeight: '400px' }}
            src="https://picsum.photos/500"
            alt=""
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

      <Row gutter={[16, 16]} align="middle" justify="space-between">
        {Items?.map((x, i) => (
          <Col key={i} span={24} md={8}>
            <CardComponent
              onClick={() => history.push(x?.link)}
              status={x?.name}
              image={x?.img}
              type="event_calendar"
              training_date={`${x?.faculty_count} FACULTY`}
              title={x?.name}
              description={x?.text}
              starting_date={x?.time}
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
