import { Col, Row } from 'antd'
import React from 'react'

export function Items({ title, info }) {
   return (
      <Col span={24} md={12} xl={8}>
         <Row align="middle">
            <Col span={24}>{title}:</Col>
            <Col span={24}>
               <div className="info">{(info && !info?.includes('undefined')) ? info : <span>Заполнить поле</span>}</div>
            </Col>
         </Row>
      </Col>
   )
}
