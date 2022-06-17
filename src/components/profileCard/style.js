import { systemColors } from 'assets/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% - 100px);
    
    margin: 0 auto;
    /* display: flex;
    text-decoration: column; */
`
export const ContentCard = styled.div`
display: flex;
width: 100%;
height: 520px;
align-items: center;
background: rgba(255, 255, 255, 0.5);
    border: 1.03125px solid ${systemColors.white};
    box-shadow: 0px 9.59922px 24.0023px #DFD9CE;
border-radius: 17.1875px;
gap: 50px;
padding: 0 96px;
& .left-img{
    display: flex;
    & .cubick-rub{
        width: 48px;
        height: 80px;
        background-color: #318161;
    }
    img{
        width: 255px;
        height: 306px;
    }
}
& .card-container{
    position: relative;
    & .card-img{
        position: absolute;
        object-fit: cover;
        width: 278px;
        height: 228px;
        top: 0;
        left: 30%;
        margin: 0 auto;
    }
}
& .right-content{
        /* width: 548px; */
}
`

export const H1 = styled.h1`
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 39px;
color: #142E38;
`
export const Position = styled.p`
font-family: 'Rubik';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 33px;
color: #142E38;
`
export const ContentParagraf = styled.p`
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 17.9221px;
line-height: 150%;
color: #142E38;
`

export const TextContainer = styled.div`
margin-top: 3rem;
width: 100%;
font-family: 'Inter';
`
export const TextContainer1 = styled.div`
display: flex;
justify-content: space-between;
gap: 35px;
p{
    margin: 0;
}
p b{
    color: #318161;
}
img{
    width: 458px;
    height: 288px;
}
    @media (max-width: 950px) {
    flex-direction: column-reverse !important;
    img{
        width: calc(100% - 150px);
        height: auto;
    }
    &:first-child{
        align-items: center
    }
    }
    @media (max-width: 668px) {
        img{
            width: 100%;
        }
    }
`
export const TextContainer2 = styled.div`
margin-top: 25px;
margin-bottom: 50px;
& h4{
    color: #318161;
    font-size: 20px;
}
p {
    margin: 0;
}
p b{
    color: #318161;
}
`
export const CardInfo = styled.ul`
font-family: 'Rubik', sans-serif;
margin: 0;
padding: 0;
`
export const SocialParams = styled.li`
list-style: none;
font-weight: 400;
& span {
    color: #318161; 
}
`
export const Card = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
min-height: 250px;
background: rgba(255, 255, 255, 0.5);
box-shadow: 0px 6.38489px 15.9622px #DFD9CE;
backdrop-filter: blur(11.4286px);
border-radius: 3px;`
export const CardLeft = styled.div`
width: 40%;
overflow: hidden;
& img {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    object-fit: cover;
    transition: all .3s;
    &:hover {
        transform: scale(1.2);
    }
}
`
export const CardRight = styled.div`
 width: 60%;
 padding: 20px 10px 20px 20px;
`
export const UserName = styled.h5`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
text-transform: uppercase;
color: #142E38;`

export const UserPosition = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #142E38;
`
export const UserLocation = styled.ul`
margin: 0;
padding: 0;
& li {
    list-style: none;
    font-size: 12px;
    color: #142E38;
    font-family: 'Inter', sans-serif;
    line-height: 19px;
    & span {
        color: #318161;
        font-weight: 500;
    }
}
`