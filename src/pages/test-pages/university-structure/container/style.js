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