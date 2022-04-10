import styled from "styled-components"
import { Timeline } from 'antd';


export const LayoutProvider = styled.div`
 width: 100%;
 height: auto;
 background-color: #E5E5E5;
 padding: 40px;
 font-family: 'Inter', sans-serif;
 @media (max-width: 992px) {
    & .col-lg-9 {
       margin-top: 20px;
    }
 }
`

export const DocumentCard = styled.div`
width: 100%;
height: auto;
min-height: 95vh;
background: #FFFFFF;
border-radius: 12px;
border-radius: 12px;
padding: 15px;
&.right-side {
   padding: 5px;
}

& .timeline-link {
   text-decoration:none;
   color: #B2B1AE;
   font-weight: 500;
   font-family: 'Open Sans', sans-serif;
}
& .timeline-nav-link {
   color: #11711A;
   font-weight: 700;
}
`
export const TimeLineHeader = styled.h5`
font-weight: bold;
font-size: 18px;
line-height: 27px;
color: #11711A;
margin-bottom: 25px;
`
export const TimeLineProvider = styled(Timeline)`
&.timeline-provider {
  li > .ant-timeline-item-tail {
     border-left: 2px solid #F1F0ED;
  }
   li > .ant-timeline-item-head {
     border-color: transparent;
     /* background-color:  ${props => props.click >= props.Index ? "#169622" : "white"} !important; */
  }
}
`