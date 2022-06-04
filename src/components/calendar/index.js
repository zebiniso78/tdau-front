// import Form from 'antd/lib/form/Form';
import React from 'react';
import 'antd/dist/antd.css';
// import { CustomCalendar } from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function Calendar({
  Controller,
  nameProps,
  plProps,
  control,
  format,
  label,
  picker,
  className,
  required = false,
}) {
  return (
    <>
      {/* <Form> */}
      <p style={{ margin: '10px', fontSize: '14px' }}>{label}</p>
      <Controller
        control={control}
        name={nameProps}
        rules={{ required: required }}
        render={({
          field: { onChange, value, ref },
          formState: { errors },
        }) => <DatePicker selected={value} onChange={onChange} />}
      />
      {/* </Form> */}
    </>
  );
}
