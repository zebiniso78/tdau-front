import React from 'react'
import { FormControlLabel } from '@mui/material'
import { CustomCheckbox } from "./style"


export function CheckboxComponent({ name, label, Controller, control, className }) {
   return (
      <FormControlLabel
         control={
            <Controller
               control={control}
               name={name}
               render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
               }) => (
                  <CustomCheckbox
                     onBlur={onBlur}
                     onChange={onChange}
                     checked={value}
                     inputRef={ref}
                     className={className}
                  />
               )}
            />
         }
         label={label}
      />


   )
}
