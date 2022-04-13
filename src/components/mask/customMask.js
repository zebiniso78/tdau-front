import React, { useState } from 'react';
import MaskedInput from 'react-maskedinput';
import { Wrapper } from './style';

export function CustomMask({
  Controller,
  control,
  nameProps,
  placeholder,
  mask,
  title,
}) {
  return (
    <Wrapper>
      <label>{title}</label>
      <Controller
        control={control}
        name={nameProps}
        // rules={{ required: required, minLength: 3 }}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState: { errors },
        }) => (
          <MaskedInput
            mask={mask}
            className="pasport-mask"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      />
    </Wrapper>
  );
}
