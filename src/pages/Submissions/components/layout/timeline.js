import React, { useState } from 'react';
import { DocumentCard, TimeLineHeader, TimeLineProvider } from './style';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const timelineList = [
  {
    id: 1,
    pathName: '/personal-info',
    name: ' Персональные данные'
  },
  {
    id: 2,
    pathName: '/academic-info',
    name: 'Академическая информация'
  },
  {
    id: 3,
    pathName: '/passport-info',
    name: 'Паспортная информация'
  },
  {
    id: 4,
    pathName: '/address-info',
    name: 'Адресаная информация'
  },
  {
    id: 5,
    pathName: '/education-qualifications',
    name: 'Образование и квалификации'
  },
  {
    id: 6,
    pathName: '/english-language',
    name: 'Английский язык'
  },
  {
    id: 7,
    pathName: '/supporting-info',
    name: 'Вспомогательная информация'
  },
  {
    id: 8,
    pathName: '/references',
    name: 'Использованная литература'
  },
  {
    id: 9,
    pathName: '/additional-info',
    name: 'Дополнительная информация'
  },
]

export default function TimeLine() {
  const [click, setClick] = useState(0)
  const location = useLocation()
  let Index = null
  function handleClick(index) {
    setClick(index)
    Index = index
    document.querySelectorAll(".ant-timeline-item-head").forEach((el) => {
      document.addEventListener('click', () => {
        el.style.backgroundColor = '#169622'
      })
    })
    document.querySelectorAll(".ant-timeline-item-tail").forEach((element) => {
      document.addEventListener('click', () => {
        element.style.borderLeft = '2px solid #169622'
      })
    })
  }
  return (
      <DocumentCard>
        <TimeLineHeader>Последовательность подачи документов</TimeLineHeader>
        <TimeLineProvider className='timeline-provider' click={click} Index={Index}>
          {
            timelineList?.map((timeline, index) => (
              <TimeLineProvider.Item
                color={(click >= index || location.pathname === '/personal-info') ? "#169622" : "#C6C5C2"}
                key={timeline.id}
                onClick={() => handleClick(index)}>
                <NavLink
                  to={timeline.pathName}
                  className="timeline-link"
                  activeClassName="timeline-nav-link"
                >
                  {timeline.name}
                </NavLink>
              </TimeLineProvider.Item>
            ))
          }

        </TimeLineProvider>
      </DocumentCard>
  );
}
