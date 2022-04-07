import styled from "styled-components";

export const PersonalInfoProvider = styled.form`
& .col-lg-3 {
   margin-top: 20px;
}
& h4 {
   margin: 24px 0 0 0px;
   font-weight: 700;
font-size: 24px;
line-height: 110%;
color: #010E31;
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