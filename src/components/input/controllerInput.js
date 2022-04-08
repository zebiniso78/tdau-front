import React from 'react'
import { Input } from './style'

export function InputComponent({ Controller, nameProps, plProps, control, required, disabled, label, className }) {
   return (
      <>
         <p style={{ marginBottom: '0', fontSize: '14px' }}>{label}</p>
         <Controller
            control={control}
            name={nameProps}
            rules={{ required: required, minLength: 3 }}
            render={({
               field: { onChange, onBlur, value, name, ref },
               fieldState: { invalid, isTouched, isDirty, error },
               formState: { errors },
            }) => (
               <Input
                  className={className}
                  oneTap
                  ref={ref}
                  name={name}
                  value={value}
                  disabled={disabled}
                  onChange={onChange}
                  placeholder={plProps}
               // onBlur={onBlur} /
               />
            )}

         />
      </>
   )
}