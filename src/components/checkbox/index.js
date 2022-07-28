import React, { memo } from 'react'
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
                  field: { onChange, onBlur, value, checked, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
               }) => (
                  <CustomCheckbox
                     onBlur={onBlur}
                     checked={checked}
                     value={value}
                     onChange={(e) => onChange(e.target.checked)}
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

export const MemoizedCheckbox = memo(CheckboxComponent)
