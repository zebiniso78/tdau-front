import { Button, Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MaskedInput from 'react-maskedinput';

export default function VerifyComponent({ myState, setMyState, handleOk }) {
  const { t } = useTranslation();

  return (
    <Row
      align="middle"
      justify="center"
      gutter={[16, 16]}
      style={{ margin: '4px 0' }}
    >
      <Col span={24} lg={14}>
        <p>Code</p>

        <MaskedInput
          nameProps="code"
          mask="1111"
          title={t('sms-code')}
          placeholder="----"
          onChange={(e) => setMyState({ ...myState, code: e.target.value })}
        />
      </Col>
      <Col style={{ textAlign: 'right' }} span={24} lg={14}>
        <Button onClick={() => handleOk(myState?.code, 'code')} type="primary">
          Next
        </Button>
      </Col>
    </Row>
  );
}
