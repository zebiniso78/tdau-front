import React from 'react';
import { DatePicker } from 'antd';
import Form from 'antd/lib/form/Form';
const { RangePicker } = DatePicker;
export default function TwoDate({
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
    <Form>
      <p style={{ marginLeft: '0', marginBottom: '-10px', fontSize: '14px' }}>
        {label}
      </p>
      <Controller
        control={control}
        name={nameProps}
        rules={{ required: required }}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState: { errors },
        }) => (
          <RangePicker
            style={{ marginTop: '20px' }}
            onChange={onChange}
            className={className}
            format={format}
            value={value}
            picker={picker ? picker : undefined}
            placeholder={plProps}
            error={!!errors?.title}
            ref={ref}
          />
        )}
      />
    </Form>
  );
}
