import styled from 'styled-components';
import { Timeline } from 'antd';

export const LayoutProvider = styled.div`
  width: 100%;
  height: auto;
  background-color: #e5e5e5;
  padding: 40px;
  font-family: 'Inter', sans-serif;
  @media (max-width: 992px) {
    & .col-lg-9 {
      margin-top: 20px;
    }
  }
  @media (max-width: 720px) {
    padding: 40px 0;
  }

  & .logout {
    color: #eb5757 !important;
    text-transform: capitalize !important;
    font-family: 'Inter', sans-serif;
    border: 1px solid #eb5757 !important;
    min-width: 140px;
    margin-bottom: 16px;
    margin-top: -24px;
    @media (max-width: 991px) {
      margin-top: -4px;
    }
  }
`;

export const DocumentCard = styled.div`
  width: 100%;
  height: auto;
  min-height: 95vh;
  background: #ffffff;
  border-radius: 12px;
  padding: 0px;
  &.right-side {
    padding: 5px;
  }

  & .timeline-link {
    text-decoration: none;
    color: #b2b1ae;
    font-weight: 500;
    font-size: 13px;
    font-family: 'Open Sans', sans-serif;
  }
  & .timeline-nav-link {
    color: #11711a;
    font-weight: 700;
  }
`;
export const TimeLineHeader = styled.h5`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #11711a;
  padding-top: 15px;
  padding: 16px;
  /* margin-bottom: 25px; */
  /* margin-left: 15px; */
`;
export const TimeLineProvider = styled(Timeline)`
  padding-left: 15px;
  &.timeline-provider {
    li > .ant-timeline-item-tail {
      border-left: 2px solid #f1f0ed;
    }
    li > .ant-timeline-item-head {
      border-color: transparent;
      /* background-color:  ${(props) =>
        props.click >= props.Index ? '#169622' : 'white'} !important; */
    }
  }
`;

export const DocumentCardProvider = styled.div`
  position: sticky;
  top: 12px;
`;
