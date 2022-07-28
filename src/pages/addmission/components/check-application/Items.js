import { Col, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
const { Paragraph } = Typography;
export function Items({ title, info }) {
  const { t } = useTranslation();
  return (
    <Col span={24} md={12} xl={8}>
      <Row align="middle">
        <Col span={24}>{title}:</Col>
        <Col span={24}>
          <div className="info">
            <Paragraph style={{ marginBottom: 0 }} ellipsis={true}>
              {info && !info?.includes('undefined') ? (
                info
              ) : (
                <span> {t('error-field')}</span>
              )}
            </Paragraph>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
