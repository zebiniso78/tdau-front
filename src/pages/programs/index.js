import { Col, Row } from 'antd';
import { CardComponent } from 'components/card';
import { DiscoverRight } from 'components/discover/style';
import { Discover } from 'pages/About/components';
import { Video } from 'pages/About/components/video';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Title } from 'styles/globalStyle';
import { ProgramContainer } from './style';
import CarouselComponents from './components/carousel';
export default function ProgramsPage() {
  const history = useHistory();
  return (
    <div>
      <CarouselComponents />
      <ProgramContainer>
        <Discover
          type="magnusUniversity"
          firstInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum libero ante, non tempus justo finibus at. Fusce semper consectetur porttitor. Vivamus vel dolor dolor. Fusce tempus sit amet sem accumsan pulvinar. Cras vestibulum justo sagittis tortor vehicula vulputate. In et purus eget dolor egestas sollicitudin et sit amet ligula. Aliquam ac sapien nec sapien consectetur facilisis. Sed eu nisl laoreet, pellentesque lectus nec, pulvinar neque. Sed placerat, risus eget dapibus venenatis, neque lectus ornare velit, eget venenatis arcu risus nec libero. Etiam tristique tellus quis est maximus, quis dignissim odio tristique. Vestibulum dignissim dolor vel augue feugiat mollis. Aenean mollis posuere gravida. Quisque malesuada vitae ante scelerisque porttitor. Praesent augue lorem, sagittis bibendum nibh id, aliquam rutrum enim. Vivamus nisi ipsum, vestibulum nec eros eu, finibus faucibus nunc. Aliquam sit amet porta neque, maximus feugiat elit. Morbi vestibulum elit neque, quis tincidunt libero laoreet sed. Mauris blandit aliquam sem in lacinia. Nunc mollis nibh non varius pharetra. In sollicitudin tristique leo eu pulvinar. Aliquam risus lorem, tempus ac diam molestie, iaculis molestie risus. Vestibulum malesuada aliquet orci eget condimentum. Maecenas euismod, augue vitae egestas porttitor, neque odio pretium nisl, sed commodo risus magna in mauris. Mauris et mauris eget diam pretium eleifend sit amet nec nulla. Aliquam quam orci, auctor nec bibendum eget, porttitor id quam. Pellentesque at quam vel turpis gravida rhoncus. Sed suscipit quam iaculis, ultricies urna ac, condimentum turpis."
        />
      </ProgramContainer>
      <Video url="https://www.youtube.com/watch?v=RRaZwB56djI&ab_channel=NevoMusic" />
      <ProgramContainer className="my-5">
        <br />
        <Title style={{ textAlign: 'right' }}>
          Lorem ipsum dolor sit amet.
        </Title>
        <br />
        <Row align="middle" justify="space-between" gutter={[24, 24]}>
          <Col span={24} md={12}>
            <p style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vestibulum libero ante, non tempus justo finibus at. Fusce semper
              consectetur porttitor. Vivamus vel dolor dolor. Fusce tempus sit
              amet sem accumsan pulvinar. Cras vestibulum justo sagittis tortor
              vehicula vulputate. In et purus eget dolor egestas sollicitudin et
              sit amet ligula. Aliquam ac sapien nec sapien consectetur
              facilisis. Sed eu nisl laoreet, pellentesque lectus nec, pulvinar
              neque. Sed placerat, risus eget dapibus venenatis, neque lectus
              ornare velit, eget venenatis arcu risus nec libero. Etiam
              tristique tellus quis est maximus, quis dignissim odio tristique.
              Vestibulum dignissim dolor vel augue feugiat mollis. Aenean mollis
              posuere gravida. Quisque malesuada vitae ante scelerisque
              porttitor. Praesent augue lorem, sagittis bibendum nibh id,
              aliquam rutrum enim. Vivamus nisi ipsum, vestibulum nec eros eu,
              finibus faucibus nunc. Aliquam sit amet porta neque, maximus
              feugiat elit. Morbi vestibulum elit neque, quis tincidunt libero
              laoreet sed. Mauris blandit aliquam sem in lacinia. Nunc mollis
              nibh non varius pharetra. In sollicitudin tristique leo eu
              pulvinar. Aliquam risus lorem, tempus ac diam molestie, iaculis
              molestie risus. Vestibulum malesuada aliquet orci eget
              condimentum. Maecenas euismod, augue vitae egestas porttitor,
              neque odio pretium nisl, sed commodo risus magna in mauris. Mauris
              et mauris eget diam pretium eleifend sit amet nec nulla. Aliquam
              quam orci, auctor nec bibendum eget, porttitor id quam.
              Pellentesque at quam vel turpis gravida rhoncus. Sed suscipit quam
              iaculis, ultricies urna ac, condimentum turpis.
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
          <Col span={24} md={8}>
            {/* <CardComponent
              type="university"
              onClick={() => history.push('/bachelour')}
              image="https://picsum.photos/400"
              //   cardLogo={}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            /> */}

            <CardComponent
              onClick={() => history.push('/bachelour')}
              status="Bachelor"
              image="https://picsum.photos/400"
              //   type="university"
              type="event_calendar"
              training_date="12 - MAY"
              title="Bachelor"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              starting_date="15:00 PM"
            />
          </Col>
          <Col span={24} md={8}>
            {/* <CardComponent
              type="university"
              onClick={() => history.push('/bachelour')}
              image="https://picsum.photos/400"
              //   cardLogo={}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            /> */}

            <CardComponent
              onClick={() => history.push('/bachelour')}
              status="Bachelor"
              image="https://picsum.photos/400"
              //   type="university"
              type="event_calendar"
              training_date="12 - MAY"
              title="Bachelor"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              starting_date="15:00 PM"
            />
          </Col>
          <Col span={24} md={8}>
            {/* <CardComponent
              type="university"
              onClick={() => history.push('/bachelour')}
              image="https://picsum.photos/400"
              //   cardLogo={}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            /> */}

            <CardComponent
              onClick={() => history.push('/bachelour')}
              status="Bachelor"
              image="https://picsum.photos/400"
              //   type="university"
              type="event_calendar"
              training_date="12 - MAY"
              title="Bachelor"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              starting_date="15:00 PM"
            />
          </Col>
        </Row>
      </ProgramContainer>
    </div>
  );
}
