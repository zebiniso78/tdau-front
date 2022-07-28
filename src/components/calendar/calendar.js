import { Form } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { CustomCalendar } from './calendar.style';
// import { FormGroupProvider } from 'components/popover/style';


export default function AntdCalendar({
   Controller,
   nameProps,
   plProps = 'dd/mm/yyyy',
   control,
   format,
   label,
   picker,
   className,
   required = false,
   popoverText = false,
   disabled = false
}) {
   return (
      <Form>
         {/* <p style={{ margin: '10px', fontSize: '14px' }}>{label}</p> */}
         <Controller
            control={control}
            name={nameProps}
            rules={{ required: required }}
            render={({
               field: { onChange, onBlur, value, name, ref },
               fieldState: { invalid, isTouched, isDirty, error },
               formState: { errors },
            }) => (
               <>
                  <CustomCalendar
                     // style={{ marginTop: '10px' }}
                     onChange={onChange}
                     className={className}
                     format={format}
                     value={value}
                     picker={picker ? picker : undefined}
                     placeholder={plProps}
                     error={!!errors?.title}
                     ref={ref}
                     disabled={disabled}
                  />
               </>
            )}
         />
      </Form>
   );
}
