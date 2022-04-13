import styled from "styled-components";

export const PhoneMaskProvider = styled.div`
`
export const Wrapper = styled.div`
/* margin-top: 8px; */
margin-bottom: 8px;
& input{
  width: 100%;
  height: 38px;
  border: 1px solid #BCC6D4;
  text-align: center;
  outline: none;
  background-color: #fff !important;
  border-radius: 4px !important;
  /* padding: 10px 12px 8px 16px !important; */
  color: black !important;
  margin-top: 6px;
  &::placeholder {
    font-size: 14px;
  }
  &.input-error {
    border: 1px solid #d2504d !important;
  }
}
`