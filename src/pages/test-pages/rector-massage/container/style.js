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
        width: 548px;
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
