import React from 'react';
import { IndicatorProvider } from './style';
import CountUp from 'react-countup';
import { Col, Row } from 'antd';

export function Indicator() {
  return (
    <IndicatorProvider>
      <Row data-aos="zoom-in" gutter={[16, 16]}>
        <Col
          span={24}
          md={6}
          sm={12}
          className="d-flex  align-items-center flex-column"
        >
          <div className="d-flex">
            <CountUp
              className="account-balance"
              start={0}
              end={5200}
              duration={10}
              useEasing={true}
            />
            <span>+</span>
          </div>
          <h5>Students</h5>
        </Col>
        <Col
          span={24}
          md={6}
          sm={12}
          className="d-flex  align-items-center flex-column"
        >
          <div className="d-flex">
            <CountUp
              className="account-balance"
              start={0}
              end={96}
              duration={10}
              useEasing={true}
            />
            <span>%</span>
          </div>
          <h5>
            Graduate
            <br /> Employability
          </h5>
        </Col>
        <Col
          span={24}
          md={6}
          sm={12}
          className="d-flex  align-items-center flex-column"
        >
          <div className="d-flex">
            <CountUp
              className="account-balance"
              start={0}
              end={5}
              duration={10}
              useEasing={true}
            />
            <span>+</span>
          </div>
          <h5>
            Master's
            <br /> Programmes
          </h5>
        </Col>
        <Col
          span={24}
          md={6}
          sm={12}
          className="d-flex  align-items-center flex-column"
        >
          <div className="d-flex">
            <CountUp
              className="account-balance"
              start={0}
              end={15}
              duration={10}
              useEasing={true}
            />
            <span>+</span>
          </div>
          <h5>
            Undergraduate
            <br /> Programmes
          </h5>
        </Col>
      </Row>
    </IndicatorProvider>
  );
}
