import { Col, Row } from 'antd'
import React from 'react'
import { Container } from 'styles/globalStyle'
import { FooterProvider, HorizontalLine, FooterBottom } from './style'
import { useList } from './useList'

export default function Footer() {
   const { footerList } = useList()
   return (
      <FooterProvider>
         <Container>
            <Row style={{ padding: '58px 0' }}>
               {
                  footerList.map((list) => (
                     <Col span={24} xl={4} sm={12} key={list.id} className='d-flex justify-content-center'>
                        <ul>
                           <li>{list.name}</li>
                           <li>{list.section1}</li>
                           <li>{list.section2}</li>
                           <li>{list.section3}</li>
                           <li>{list.section4}</li>
                        </ul>
                     </Col>
                  ))
               }  
            </Row>
            <HorizontalLine/>
            <FooterBottom>
               <p>Copyright © Tashkent State Agrarian University 2022. All rights reserved</p>
               <p>Center of Digitalization of Agro Industry <br/>under The Ministry of Agriculture</p>
            </FooterBottom>
         </Container>
      </FooterProvider>
   )
}
