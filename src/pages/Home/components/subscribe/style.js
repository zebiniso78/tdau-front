import styled from 'styled-components';

export const SubscribeProvider = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 11.17px 27.93px #dfd9ce;
  border-radius: 65px;
  margin-bottom: 71px;
  @media (max-width: 1070px) {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }
  @media (max-width: 991px) {
    border-radius: 20px;
  }
`;
export const SubscribeLeft = styled.div`
  width: 50%;
  background: #fab65d;
  /* opacity: 0.5; */
  border-radius: 65px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1070px) {
    /* width: 100%; */
    display: none;
  }
`;
export const SubscribeRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1070px) {
    width: 100%;
    margin: 50px 0;
  }
`;
export const Form = styled.form`
  & h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 47px;
    color: #142e38;
    @media (max-width: 600px) {
      font-size: 18px;
    }
    @media (max-width: 420px) {
      font-size: 16px;
      text-align: center;
      line-height: 20px;
    }
  }
  & h4 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #142e38;
    opacity: 0.75;
    margin-top: 23px;
    @media (max-width: 420px) {
      font-size: 14px;
      text-align: center;
    }
  }
`;
export const SubscribeInputWrap = styled.div`
  margin-top: 23px;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Input = styled.input`
  background: #f9f9f9;
  border: 1.62812px solid #e6e6e6;
  box-shadow: 0px 9.59922px 24.0023px #dfd9ce;
  border-radius: 8.14062px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
  width: 72%;
  height: 67px;
  text-indent: 22px;
  font-family: 'Inter', sans-serif;
  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    color: #142e38;
    opacity: 0.75;
  }
  @media (max-width: 600px) {
    width: 50%;
    height: 50px;
  }
`;
export const Button = styled.button`
  background: #142e38;
  border: 1.62812px solid #e6e6e6;
  border-radius: 0px 8.14062px 8.14062px 0px;
  outline: none;
  height: 67px;
  color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  padding: 21px 29px;
  @media (max-width: 600px) {
    height: 50px;
    padding: 0 15px;
  }
`;
