import { CardComponent } from 'components/card'
import React from 'react'
import { LandingTitle, CardProvider, CardWrap } from 'styles/globalStyle'
import Academia from "assets/cards/academiya.png"
import MagnusUniversity from "assets/cards/magnus_university.png"
import RussianUniversity from "assets/cards/russian_university.png"
import Calendar from "assets/cards/calendar.png"
import CardSecond from 'assets/cards/second_card.png'
import CardThird from 'assets/cards/third_card.png'
import CardFour from 'assets/cards/four_card.png'
import { Col, Row } from 'antd'



export function EventCalendar() {
   return (
      <CardProvider>
         <LandingTitle>UNIVERSITY EVENT CALENDAR</LandingTitle>
         <CardWrap style={{justifyContent:'center'}}>
            <Row gutter={[16, 16]} justify='center'>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     type='event_calendar'
                     status='TRAINING'
                     image={Calendar}
                     cardLogo={Academia}
                     aosCount={1000}
                     training_date='12-may'
                     title='YOU ARE CORDIALLY INVITED TO THE INTERACTIVE 
                     TRAINING SESSION FOR VOLUNTEERS WITH THE DIRECTOR OF'
                     description='YOU ARE CORDIALLY INVITED TO THE INTERACTIVE TRAINING 
                     SESSION FOR VOLUNTEERS WITH THE DIRECTOR OF' />
               </Col>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     type='event_calendar'
                     image={CardSecond}
                     status='EVENT'
                     aosCount={2000}
                     training_date='11-may'
                     cardLogo={MagnusUniversity}
                     description='INTERNSHIP AND JOB OPPORTUNITIES AT UNDP'
                     title='Vytautas Magnus university in Litva' />
               </Col>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     type='event_calendar'
                     image={CardThird}
                     status='EVENT'
                     aosCount={3000}
                     training_date='7-may'
                     cardLogo={RussianUniversity}
                     description='INFORMATION SESSION “ERASMUS+ OPPORTUNITIES FOR INSTITUTIONAL COOPERATION” ORGANIZED BY THE'
                     title='Volgograd State Agricultural
                     University in Russia' />
               </Col>
               <Col span={24} xl={6} sm={12}>
                  <CardComponent
                     type='event_calendar'
                     image={CardFour}
                     status='FRIDAY TALK'
                     aosCount={5000}
                     training_date='29-aprel'
                     cardLogo={RussianUniversity}
                     title='Russian State Agrarian University
                     Moscow Timiryazev Agricultural Academy
                     ' 
                     description='FRIDAY TALK WITH A FAMOUS ACTOR AND SHOWMAN, MR ALISHER UZOKOV.'/>
               </Col>
            </Row>
         </CardWrap>
      </CardProvider>
   )
}
