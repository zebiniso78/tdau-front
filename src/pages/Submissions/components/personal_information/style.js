import styled from "styled-components";

export const PersonalInfoProvider = styled.form`
padding: 15px;
& .col-lg-3 {
   margin-top: 20px;
}
& h4 {
   font-weight: 700;
font-size: 24px;
line-height: 110%;
color: #010E31;
}
.input-error {
   border: 1px solid #D2504D;
}
 input {
 font-size: 14px;
 font-family:'Inter', sans-serif;
}
.select-error > div {
   border: 1px solid #D2504D;
}

`
export const ButtonsProvider = styled.div`
 margin-top: 30px;
 & .next-btn {
    margin-left: 20px;
    background: #169622 !important;
    border-radius: 4px; 
    text-transform: capitalize !important;
    font-family: 'Inter', sans-serif;
 }
 & .prev-btn {
    color: #EB5757;
    text-transform: capitalize !important;
    font-family: 'Inter', sans-serif;
    border: 1px solid #EB5757 !important;
 }
`

export const Error = styled.div`
    color: #D2504D;
    font-size: 12px;
    margin-top: -2px;
    border-radius: 4px;
    padding: 2px 8px;
    &.select-error-tooltip {
     margin-top: 6px;
}
`