import { Button, Col, Row } from 'antd';
import React from 'react';
import MaskedInput from 'react-maskedinput';

export default function PhoneComponent({ myState, setMyState, handleOk }) {
  return (
    <Row
      align="middle"
      justify="center"
      gutter={[16, 16]}
      style={{ margin: '4px 0' }}
    >
      <Col span={24} lg={14}>
        <p>Phone</p>
        <MaskedInput
          nameProps="Phone"
          mask="+99811 111 11 11"
          title="Phone"
          placeholder="+99890 111 11 11"
          onChange={(e) => setMyState({ ...myState, phone: e.target.value })}
        />
      </Col>
      <Col style={{ textAlign: 'right' }} span={24} lg={14}>
        <Button
          onClick={() => handleOk(myState?.phone, 'phone')}
          type="primary"
        >
          Next
        </Button>
      </Col>
    </Row>
  );
}
