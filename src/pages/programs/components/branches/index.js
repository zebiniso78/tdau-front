import { Col, Row } from 'antd';
import { CardComponent } from 'components/card';
import { ProgramContainer } from 'pages/programs/style';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ImageTdaus from 'assets/programs/tdausImg.png';
import ImageTdausLogo from 'assets/programs/tdaus.png';
export default function Branches() {
  const history = useHistory();

  const Items = [
    {
      id: 1,
      name: 'Toshkent davlat agrar universiteti Samarqand filiali',
      img: ImageTdaus,
      logo: ImageTdausLogo,
    },
    {
      id: 2,
      name: 'Toshkent davlat agrar universiteti Samarqand filiali',
      img: ImageTdaus,
      logo: ImageTdausLogo,
    },
    {
      id: 3,
      name: 'Toshkent davlat agrar universiteti Samarqand filiali',
      img: ImageTdaus,
      logo: ImageTdausLogo,
    },
    {
      id: 4,
      name: 'Toshkent davlat agrar universiteti Samarqand filiali',
      img: ImageTdaus,
      logo: ImageTdausLogo,
    },
  ];

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
        {Items?.map((item, i) => (
          <Col key={item?.id} span={24} ms={12} xl={6}>
            <CardComponent
              type="university"
              // onClick={() => blogInfo(item)}
              image={item?.img}
              cardLogo={item?.logo}
              title={item?.name}
            />
          </Col>
        ))}
      </Row>
    </ProgramContainer>
  );
}
