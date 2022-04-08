import { Form } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { CustomCalendar } from "./style"

export default function Calendar({
   Controller,
   nameProps,
   plProps,
   control,
   format,
   label,
   picker,
   className
}) {
   return (
      <Form>
         <p style={{ marginLeft: '0', marginBottom: '-10px', fontSize: '14px' }}>{label}</p>
         <Controller
            control={control}
            name={nameProps}
            render={({
               field: { onChange, onBlur, value, name, ref },
               fieldState: { invalid, isTouched, isDirty, error },
               formState,
            }) => (
               <CustomCalendar
                  style={{ marginTop: '20px' }}
                  onChange={onChange}
                  className={className}
                  format={format}
                  value={value}
                  picker={picker ? picker : undefined}
                  placeholder={plProps}
               />
            )}
         />
      </Form>
   );
}
