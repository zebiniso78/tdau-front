import { Button, Col, Input, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PasswordComponent({ myState, setMyState, handleOk }) {
  const { t } = useTranslation();

  return (
    <Row
      align="middle"
      justify="center"
      gutter={[16, 16]}
      style={{ margin: '4px 0' }}
    >
      <Col span={24} lg={14}>
        <p>Password</p>

        <Input.Password
          value={myState?.password}
          placeholder="Password"
          onChange={(e) => setMyState({ ...myState, password: e.target.value })}
          name="changePasssword"
        />
      </Col>
      <Col style={{ textAlign: 'right' }} span={24} lg={14}>
        <Button
          onClick={() => handleOk(myState?.password, 'password')}
          type="primary"
        >
          Change Password
        </Button>
      </Col>
    </Row>
  );
}
