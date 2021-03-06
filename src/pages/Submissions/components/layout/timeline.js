import React from 'react'
import { DocumentCard, TimeLineHeader } from './style'
import { Timeline } from 'antd';
import { Link, NavLink } from "react-router-dom"


export default function TimeLine() {
   return (
      <DocumentCard>
         <TimeLineHeader>Последовательность подачи документов</TimeLineHeader>
         <Timeline>
            <Timeline.Item><NavLink to='/personal-info' className='timeline-link' activeClassName='timeline-nav-link'>Персональные данные</NavLink></Timeline.Item>
            <Timeline.Item><NavLink to='/academic-info' className='timeline-link' activeClassName='timeline-nav-link'>Академическая информация</NavLink></Timeline.Item>
            <Timeline.Item><NavLink to='/passport-info' className='timeline-link' activeClassName='timeline-nav-link'>Паспортная информация</NavLink></Timeline.Item>
            <Timeline.Item><NavLink to='/address-info' className='timeline-link' activeClassName='timeline-nav-link'>Адресаная информация</NavLink></Timeline.Item>
            <Timeline.Item>Образование и квалификации</Timeline.Item>
            <Timeline.Item>Английский язык</Timeline.Item>
            <Timeline.Item>Вспомогательная информация</Timeline.Item>
            <Timeline.Item>Использованная литература</Timeline.Item>
            <Timeline.Item>Дополнительная информация</Timeline.Item>
         </Timeline>
      </DocumentCard>
   )
}
