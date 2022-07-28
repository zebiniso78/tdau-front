import { Col, Row } from 'antd';
import { Image } from 'components/Image/style';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'styles/globalStyle';
import { TextContent } from './style';

export default function VisionPage() {
  const { t } = useTranslation();
  return (
    <>
      <Image
        style={{ width: '100%', height: '90vh', objectFit: 'cover' }}
        src="https://picsum.photos/1800"
        alt="branch"
      />

      <Container>
        <Row
          style={{ padding: '36px 16px' }}
          justify="space-between"
          gutter={[12, 12]}
        >
          <Col span={24} md={15}>
            <TextContent>
              <h2 data-aos="fade-right">{t('univer-values')}</h2>
              <br />
              <Row gutter={[24, 16]} align="middle" justify="space-between">
                <Col span={5} md={4} data-aos="fade-up">
                  <h3 style={{ color: 'rgb(14 44 28)' }}>{t('s')}</h3>
                </Col>
                <Col span={19} md={20} data-aos="fade-up">
                  <p>{t('s-text')}</p>
                </Col>

                <Col span={5} md={4} data-aos="fade-up">
                  <h3 style={{ color: 'rgb(12 62 38)' }}>{t('m')}</h3>
                </Col>
                <Col span={19} md={20} data-aos="fade-up">
                  <p>{t('m-text')}</p>
                </Col>

                <Col span={5} md={4} data-aos="fade-up">
                  <h3 style={{ color: 'rgb(10 80 48)' }}>{t('a')}</h3>
                </Col>
                <Col span={19} md={20} data-aos="fade-up">
                  <p>{t('a-text')}</p>
                </Col>

                <Col span={5} md={4} data-aos="fade-up">
                  <h3 style={{ color: 'rgb(8 97 58)' }}>{t('r')}</h3>
                </Col>
                <Col span={19} md={20} data-aos="fade-up">
                  <p>{t('r-text')}</p>
                </Col>

                <Col span={5} md={4} data-aos="fade-up">
                  <h3 style={{ color: 'rgb(6 115 68)' }}>{t('t')}</h3>
                </Col>
                <Col span={19} md={20} data-aos="fade-up">
                  <p>{t('t-text')}</p>
                </Col>
              </Row>
            </TextContent>
          </Col>
          <Col span={24} md={8}>
            <TextContent
              style={{ paddingTop: 0 }}
              className="content"
              data-aos="fade-up"
            >
              <h2>{t('vision')}</h2>
              <p>{t('vision-text')}</p>
            </TextContent>
            <TextContent className="content" data-aos="fade-up">
              <h2>{t('mission')}</h2>
              <p>{t('mission-text')}</p>
            </TextContent>
            <TextContent className="content" data-aos="fade-up">
              <h2>{t('tradition')}</h2>
              <p>{t('tradition-text')}</p>
            </TextContent>
          </Col>
        </Row>
      </Container>
    </>
  );
}
