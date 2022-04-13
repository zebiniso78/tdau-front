import styled from 'styled-components';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export const CustomCalendar = styled(DatePicker)`
  width: 100%;
  height: 38px;
  background: #ffffff;
  border: 1px solid #bcc6d4;
  border-radius: 4px;
  /* margin-top: 16px !important; */
  margin-bottom: 8px !important;
  &:focus {
    box-shadow: none;
  }
`;
export const CustomTwoCalendar = styled(RangePicker)`
  width: 100%;
  height: 38px;
  background: #ffffff;
  border: 1px solid #bcc6d4;
  border-radius: 4px;
  margin-top: 16px !important;
  margin-bottom: 8px !important;
  &:focus {
    box-shadow: none;
  }
`;
