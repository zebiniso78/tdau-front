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
            <Input
              style={{ width: '100%' }}
              type="email"
              placeholder={t('email')}
            />

            <Button style={{ minWidth: '180px' }} type="submit">
              {t('subscribe')}
            </Button>
          </SubscribeInputWrap>
        </Form>
      </SubscribeRight>
    </SubscribeProvider>
  );
}
