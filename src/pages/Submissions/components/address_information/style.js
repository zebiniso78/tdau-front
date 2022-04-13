import styled from "styled-components";

export const AddressInfoProvider = styled.div`
padding: 15px;
.input-error {
    border: 1px solid #d2504d;
  }
  .select-error > div {
    border: 1px solid #d2504d;
  }
`
export const Paragraph = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 19px;
color: #313131;
&.footer-paragraph {
   color: #777674;
   margin-top: 10px;
}
`
export const AddressForm = styled.form``
export const CheckboxWrapper = styled.div``
export const MaskInputWrapper = styled.div`
width: 40%;
@media (max-width: 992px) {
   width: 100%;
}
`
export const AddressFooter = styled.div``