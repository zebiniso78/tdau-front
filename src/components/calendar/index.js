import { Form } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { CustomCalendar } from './style';
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
  selected,
}) {
  return (
    <Form>
      <p style={{ margin: '10px', fontSize: '14px' }}>{label}</p>
      <Controller
        control={control}
        name={nameProps}
        rules={{ required: required }}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState: { errors },
        }) => (
          // <CustomCalendar
          //    // style={{ marginTop: '10px' }}
          //    onChange={onChange}
          //    className={className}
          //    format={format}
          //    value={value}
          //    picker={picker ? picker : undefined}
          //    placeholder={plProps}
          //    error={!!errors?.title}
          //    ref={ref}
          // />
          <CustomCalendar
            selected={value}
            onChange={onChange}
            placeholderText={plProps}
            className={className}
            value={value}
            error={!!errors?.title}
            ref={ref}
            dateFormat="dd/MM/yyyy"
          />
        )}
      />
    </Form>
  );
}
