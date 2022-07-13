import React from 'react';
import {
  SubscribeProvider,
  SubscribeLeft,
  SubscribeRight,
  Form,
  SubscribeInputWrap,
  Input,
  Button,
} from './style';
import Message from 'assets/subscribe/message.png';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
export function Subscribe() {
  const { t } = useTranslation();
  return (
    <SubscribeProvider data-aos="fade-up">
      <SubscribeLeft>
        <img src={Message} alt="message" />
      </SubscribeLeft>
      <SubscribeRight>
        <Form>
          <h1>{t('subscribe-header1')}</h1>
          <h4>{t('subscribe-header2')}</h4>
          <SubscribeInputWrap>
            <Row align="middle" justify="center">
              <Col span={18}>
                <Input
                  style={{ width: '100%' }}
                  type="email"
                  placeholder={t('email')}
                />
              </Col>
              <Col span={6}>
                <Button type="submit">{t('subscribe')}</Button>
              </Col>
            </Row>
          </SubscribeInputWrap>
        </Form>
      </SubscribeRight>
    </SubscribeProvider>
  );
}
