import React from 'react';
import Form from 'antd/lib/form/Form';
import { CustomTwoCalendar } from './style';
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
          <CustomTwoCalendar
            style={{ marginTop: '20px' }}
            onChange={onChange}
            className={className}
            format={format}
            value={value}
            picker={'year'}
            // placeholder={plProps}
            error={!!errors?.title}
            ref={ref}
          />
        )}
      />
    </Form>
  );
}
