import styled from "styled-components";

export const Input = styled.input`
width: 100%;
height: 38px;
background: #FFFFFF;
border: 1px solid #BCC6D4;
box-sizing: border-box;
border-radius: 4px;
outline: none;
margin: 8px 0px;
text-indent: 12px;
&::placeholder {
   font-size: 12px;
   color: #A8A8A8;
}
`
export const FormGroupProvider = styled.div`
`
// export const FormInput = styled.input`
//   width: 100%;
//   height: ${(props) => props.propsHeight};
//   background-color: ${systemColors.mainBackground} !important;
//   border-radius: 8px;
//   font-family: 'Montserrat', sans-serif !important;
//   border: 1px solid transparent;
//   margin-top: 4px;
//   box-shadow: inset 0 0 0 0 !important;

//   &::placeholder {
//     font-weight: 500;
//     font-size: 14px;
//     font-family: 'Montserrat', sans-serif;
//   }
//   &:-webkit-autofill {
//     background: #fff !important;
//   }
//   &.error-input {
//     border: 1px solid red !important;
//   }
//   &.error {
//     border: 1px solid ${systemColors.errorColor} !important;
//     &:focus {
//       border: 1px solid ${systemColors.errorColor} !important;
//       box-shadow: inset 0 0 0 0 !important;
//     }
//   }
// `;