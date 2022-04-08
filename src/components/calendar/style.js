import styled from "styled-components";
import { DatePicker } from "antd"

export const CustomCalendar = styled(DatePicker)`
 width: 100%;
height: 38px;
background: #FFFFFF;
border: 1px solid #BCC6D4;
border-radius: 4px;
margin-top: 17px !important; 
&:focus {
   box-shadow: none;
}
`