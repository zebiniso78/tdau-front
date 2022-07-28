import { Col, Row } from 'antd';
import { CardComponent } from 'components/card';
import { ProgramContainer } from 'pages/programs/style';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
export default function Branches({ branchesData }) {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <ProgramContainer className="my-5">
      <h2
        data-aos="fade-up"
        style={{
          fontWeight: 700,
          fontSize: 48,
          color: '#142E38',
          textAlign: 'center',
        }}
      >
        {t('branches')}
      </h2>
      <br />

      <Row gutter={[16, 16]} align="middle">
        {branchesData?.map((item) => (
          <Col data-aos="fade-up" key={item?.id} span={24} ms={12} xl={6}>
            <CardComponent
              type="university"
              onClick={() => history.push(`/branch/${item?.id}`)}
              image={`${process.env.REACT_APP_API_SECOND_ROOT}/${item?.photo1}`}
              cardLogo={`${process.env.REACT_APP_API_SECOND_ROOT}/${item?.logo}`}
              title={item?.name}
            />
          </Col>
        ))}
      </Row>
    </ProgramContainer>
  );
}
