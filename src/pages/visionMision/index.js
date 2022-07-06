import { Col, Row } from 'antd';
import { Image } from 'components/Image/style';
import React from 'react';
import { Container } from 'styles/globalStyle';
import { TextContent } from './style';

export default function VisionPage() {
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
              <h2 data-aos="fade-right">University values</h2>
              <br />
              <Row gutter={[24, 16]} align="middle" justify="space-between">
                <Col span={5} md={4} data-aos="fade-up">
                  <h3>S</h3>
                </Col>
                <Col span={19} md={20} data-aos="fade-up">
                  <p>
                    Strategy of strategies - search for additional funding for
                    the implementation of strategic objectives
                  </p>
                </Col>

                <Col span={5} md={4} data-aos="fade-up">
                  <h3>M</h3>
                </Col>
                <Col span={19} md={20} data-aos="fade-up">
                  <p>
                    Maximum innovation Implementation of new technologies and
                    development of infrastructure
                  </p>
                </Col>

                <Col span={5} md={4} data-aos="fade-up">
                  <h3>A</h3>
                </Col>
                <Col span={19} md={20} data-aos="fade-up">
                  <p>
                    an Open to all personality development - Preparation and
                    delivery of Long Life Learning, implementation of group
                    projects, as well as e-learning (online learning) curricula,
                    modernization of scientific and didactic laboratories, and
                    the application of research in practice.
                  </p>
                </Col>

                <Col span={5} md={4} data-aos="fade-up">
                  <h3>R</h3>
                </Col>
                <Col span={19} md={20} data-aos="fade-up">
                  <p>
                    Creative approach - All the necessary conditions have been
                    created for the comprehensive development of students,
                    graduate students, and employees. The most active and
                    diligent people are recognized for their academic and
                    professional achievements.
                  </p>
                </Col>

                <Col span={5} md={4} data-aos="fade-up">
                  <h3>T</h3>
                </Col>
                <Col span={19} md={20} data-aos="fade-up">
                  <p>
                    Improvement of learning skills - Eliminate obstacles and
                    administrative difficulties with proven effective methods,
                    adhere to work culture, and creatively create a creative
                    process of working with innovative technologies.
                  </p>
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
              <h2>Vision</h2>
              <p>
                Our selection in "Development after formal education: the
                continuous development of the knowledge and skills that people
                acquire after formal education and throughout life.
              </p>
            </TextContent>
            <TextContent className="content" data-aos="fade-up">
              <h2>Mission</h2>
              <p>
                The introduction of new strategies for the most innovative
                development of the personality opens up a creative approach for
                everyone, including a complete transformation of university
                policy and the improvement of academic qualities of "Smart
                University"
              </p>
            </TextContent>
            <TextContent className="content" data-aos="fade-up">
              <h2>The University Tradition</h2>
              <p>
                A university with a personalized approach to student learning in
                creative and hands-on environments and recognized criteria for
                global demand
              </p>
            </TextContent>
          </Col>
        </Row>
      </Container>
    </>
  );
}
