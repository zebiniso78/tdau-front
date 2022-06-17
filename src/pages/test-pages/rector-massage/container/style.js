import { systemColors } from 'assets/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% - 100px);
    background: rgba(255, 255, 255, 0.5);
    border: 1.03125px solid ${systemColors.white};
    box-shadow: 0px 9.59922px 24.0023px #DFD9CE;
    margin: 0 auto;
    display: flex;
    text-decoration: column;

`
export const ContentCard = styled.div`
display: flex;
width: 100%;
height: 520px;
align-items: center;
justify-content: center;
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
    & .right-content{
        width: 548px;
    }
    
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