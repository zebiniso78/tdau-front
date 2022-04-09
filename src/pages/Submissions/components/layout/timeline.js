import React from 'react';
import { DocumentCard, TimeLineHeader, TimeLineProvider } from './style';
import { NavLink } from 'react-router-dom';

export default function TimeLine() {
  return (
    <DocumentCard>
      <TimeLineHeader>Последовательность подачи документов</TimeLineHeader>
      <TimeLineProvider>
        <TimeLineProvider.Item>
          <NavLink
            to="/personal-info"
            className="timeline-link"
            activeClassName="timeline-nav-link"
          >
            Персональные данные
          </NavLink>
        </TimeLineProvider.Item>
        <TimeLineProvider.Item>
          <NavLink
            to="/academic-info"
            className="timeline-link"
            activeClassName="timeline-nav-link"
          >
            Академическая информация
          </NavLink>
        </TimeLineProvider.Item>
        <TimeLineProvider.Item>
          <NavLink
            to="/passport-info"
            className="timeline-link"
            activeClassName="timeline-nav-link"
          >
            Паспортная информация
          </NavLink>
        </TimeLineProvider.Item>
        <TimeLineProvider.Item>
          <NavLink
            to="/address-info"
            className="timeline-link"
            activeClassName="timeline-nav-link"
          >
            Адресаная информация
          </NavLink>
        </TimeLineProvider.Item>
        <TimeLineProvider.Item>
          <NavLink
            to="/education-qualifications"
            className="timeline-link"
            activeClassName="timeline-nav-link"
          >
            Образование и квалификации
          </NavLink>
        </TimeLineProvider.Item>
        <TimeLineProvider.Item>
          <NavLink
            to='/english-language'
            className="timeline-link"
            activeClassName="timeline-nav-link">Английский язык
          </NavLink>
        </TimeLineProvider.Item>
        <TimeLineProvider.Item>
          <NavLink
            to="/supporting-info"
            className="timeline-link"
            activeClassName="timeline-nav-link"
          >
            Вспомогательная информация
          </NavLink>
        </TimeLineProvider.Item>
        <TimeLineProvider.Item>
          <NavLink
            to="/references"
            className="timeline-link"
            activeClassName="timeline-nav-link"
          >
            Использованная литература
          </NavLink>
        </TimeLineProvider.Item>
        <TimeLineProvider.Item>
          <NavLink
            to="/additional-info"
            className="timeline-link"
            activeClassName="timeline-nav-link"
          >
            Дополнительная информация
          </NavLink>
        </TimeLineProvider.Item>
      </TimeLineProvider>
    </DocumentCard>
  );
}
