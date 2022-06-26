import { Col } from 'antd'
import React from 'react'
import { CardHeader, Image, ItemCard, CardBody, Title } from './style'

export function Items({ item }) {
   return (
      <Col span={24} lg={6} md={12} key={item?.id}>
         <ItemCard>
            <CardHeader>
               <Image src={item?.image} alt={item?.content} />
            </CardHeader>
            <CardBody>
               <Title>{item?.content}</Title>
            </CardBody>
         </ItemCard>
      </Col>
   )
}
