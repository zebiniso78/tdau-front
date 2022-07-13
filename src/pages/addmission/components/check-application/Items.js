import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

export function Items({ title, info }) {
  const { t } = useTranslation();
  return (
    <Col span={24} md={12} xl={8}>
      <Row align="middle">
        <Col span={24}>{title}:</Col>
        <Col span={24}>
          <div className="info">
            {info && !info?.includes('undefined') ? (
              info
            ) : (
              <span> {t('error-field')}</span>
            )}
          </div>
        </Col>
      </Row>
    </Col>
  );
}
