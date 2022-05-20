import styled from "styled-components";

export const MainWrapper = styled.div`
/* position: relative; */
width: calc(100% - 100px);
height: calc(100% - 160px);
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Inter';
@media (max-width: 768px) {
   display: flex;
   flex-direction: column-reverse;
   height: auto;
}
`
export const MainLeft = styled.div`
width: 50%;
@media (max-width: 768px) {
   width: 100%;
}
`
export const MainRight = styled.div`
width: 50%;
@media (max-width: 768px) {
   width: 100%;
}
& img {
   width: 75%;
}
`
export const MainInfo = styled.div``
export const MainInfoTitle = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 45px;
line-height: 55px;
color: #142E38;
`
export const MainInfoDescription = styled.p`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
margin-top: 25px;
color: #142E38;`
export const MainBtnWrap = styled.div`
margin-top: 71px;`
export const MainBtn = styled.button`
width: 162px;
height: 50px;
background: #318161;
border: 3.6px solid #318161;
border-radius: 16.8px;
outline: none;
font-family: 'Inter', sans-serif;
font-weight: 500;
font-size: 22px;
color: white;
`

export const MainFooter = styled.div`
display: flex;
position: absolute;
bottom: 0;
right: 0;
width: 68%;
height: 92px;
background: #142E38;
box-shadow: 8.95798px 12.5412px 34.0403px rgba(0, 0, 0, 0.14);
border-bottom-right-radius: 64.8px !important;
border-radius: 26.8739px 0px 0px 0px;
`
export const MainFooterLeft = styled.div`
position: relative;
width: 165px;
height: 100%;
background: #FAB65D;
border-radius: 26.8739px 0px 0px 0px;
& img {
   width: 71%;
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   top: -50%;
}
`
export const MainFooterRight = styled.div`
width: calc(100% - 165px);
height: 100%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
& P {
color: white;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 17px;
}
`

