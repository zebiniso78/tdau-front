import React from 'react'
import { DocumentCard, TimeLineHeader } from './style'
import { Timeline } from 'antd';
import { Link, NavLink } from "react-router-dom"


export default function TimeLine() {
   return (
      <DocumentCard>
         <TimeLineHeader>Последовательность подачи документов</TimeLineHeader>
         <Timeline>
            <Timeline.Item><NavLink to='/personal-info' style={{textDecoration:'none', color: '#B2B1AE'}}>Персональные данные</NavLink></Timeline.Item>
            <Timeline.Item><NavLink to='/academic-info' style={{textDecoration:'none', color: '#B2B1AE'}}>Академическая информация</NavLink></Timeline.Item>
            <Timeline.Item>Паспортная информация</Timeline.Item>
            <Timeline.Item>Адресаная информация</Timeline.Item>
            <Timeline.Item>Образование и квалификации</Timeline.Item>
            <Timeline.Item>Английский язык</Timeline.Item>
            <Timeline.Item>Вспомогательная информация</Timeline.Item>
            <Timeline.Item>Использованная литература</Timeline.Item>
            <Timeline.Item>Дополнительная информация</Timeline.Item>
         </Timeline>
      </DocumentCard>
   )
}
