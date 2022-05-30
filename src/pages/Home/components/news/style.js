import styled from 'styled-components'

export const LatestNewsProvider = styled.section``
export const NewsTitle = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 34px;
text-align: center;
color: #142E38;
margin-bottom: 60px;`
export const ImageLayout = styled.div`
position: relative;
width: 100%;
height: 392px;
border-radius: 6px;
overflow: hidden;

& img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 6px;
   transition: all .5s;
   
}
&:hover  {
   img {
      transform: scale(1.1);
   }
   }
&.image-layout {
   height: 275px;
}
& h1, h3 {
   position: absolute;
   z-index: 2;
   color: white;
   top: 45px;
   left: 52px;
   right: 30px;
   font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 31px;
color: #FFFFFF;
text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.75);
}
& h3 {
   font-size: 16px;
   line-height: 20px;
}
& h4, h5 {
   position: absolute;
   z-index: 2;
   color: white;
   bottom: 50px;
   left: 52px;
}
& h5 {
   font-size: 14px;
}
`

export const Wrap = styled.div`
position: absolute;
z-index: 1;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
`