import styled from "styled-components"

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
    min-width: 140px;
 }
`