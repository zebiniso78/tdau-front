import { CardComponent } from 'components/card'
import React from 'react'
import { LandingTitle, CardProvider, CardWrap } from 'styles/globalStyle'
import Academia from "assets/cards/academiya.png"
import { Col, Row } from 'antd'
import { useList } from './useList'




export function EventCalendar() {
   const { calendarList } = useList()
   return (
      <CardProvider>
         <LandingTitle>UNIVERSITY EVENT CALENDAR</LandingTitle>
         <CardWrap style={{ justifyContent: 'center' }}>
            <Row gutter={[16, 16]} justify='center'>
               {
                  calendarList.map((item, index) => (
                     <Col span={24} xl={6} sm={12} key={item.id}>
                        <CardComponent
                           type={item.type}
                           status={item.status}
                           image={item.image}
                           cardLogo={Academia}
                           aosCount={index * 1000}
                           training_date={item.training_date}
                           title={item.title}
                           description={item.description}
                           starting_date={item.starting_date} />
                     </Col>
                  ))
               }
            </Row>
         </CardWrap>
      </CardProvider>
   )
}
