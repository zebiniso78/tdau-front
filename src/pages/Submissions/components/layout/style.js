import styled from "styled-components"

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
export const PrivateRouteProvider = styled.div`

`