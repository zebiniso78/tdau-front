import styled from 'styled-components'


export const FooterProvider = styled.footer`
position: relative;
width: 100%;
height: auto;
background: rgba(255, 255, 255, 0.25);
border: 1.2px solid #FFFFFF;
box-shadow: 0px 60px 60px #DFD9CE;

& ul li {
   list-style: none;
   font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 25px;
text-align: right;
color: #142F38;
}
& ul li:first-child {
font-family: 'Inter';
font-weight: 700;
font-size: 16px;
line-height: 27px;
color: #142F38;
margin: 0;
padding: 0;
}
`
export const HorizontalLine = styled.hr`
border: 1px solid #1A3237;`
export const FooterBottom = styled.div`
display: flex;
justify-content: space-between;
& p:first-child {
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 18px;
color: #142E38;
}
& p:last-child {
   font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
color: #142E38;
}
`
export const FooterImage = styled.div`
position: absolute;
bottom: 0;
`
