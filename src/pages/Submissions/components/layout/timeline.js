import React, { useState } from 'react';
import { DocumentCard, TimeLineHeader, TimeLineProvider } from './style';
import { NavLink } from 'react-router-dom';
import { useList } from './useList';



export default function TimeLine() {
  const [click, setClick] = useState(0)
  const { timelineList } = useList()
  function handleClick(index) {
    setClick(index)
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
      <TimeLineProvider className='timeline-provider' click={click} >
        {
          timelineList?.map((timeline, index) => (
            <TimeLineProvider.Item
              color={click >= index ? "#169622" : "#C6C5C2"}
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
