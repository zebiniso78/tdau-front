import { PhoneMask } from 'components/mask';
import { CustomMask } from 'components/mask/customMask';
import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import PureModal from 'react-pure-modal';
import { authApi } from 'services/api/pagesApi';
import Button from "../../../Button"



export function Verify({ setConfirmModel, setRegisterModel,  confirmModel }) {
   const {
      handleSubmit,
      watch,
      control,
      formState: { errors },
   } = useForm();
   async function onSubmit(data) {
      console.log(data)
      try {
         let formData = new FormData()
         formData.append("phone", `+998${data?.phone}`)
         formData.append("code", data?.code)
         let response = await authApi.verify(formData)
         console.log(response)
      } catch (e) {
         console.log(e)
      }
   }
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <PureModal
            header="Вход"
            footer={
               <div className="footer-button__wrapper">
                  <Button type="submit" title="Зарегистрироваться" />
                  <Button
                     type="submit"
                     title="Выход"
                     bgColor="transparent"
                     color="#2e7df6"
                     // onClick={() => {
                     //    setConfirmModel(false);
                     //    setRegisterModel(false);
                     // }}
                  />
               </div>
            }
            isOpen={confirmModel}
            closeButton="X"
            closeButtonPosition="header"
            onClose={() => {
               setConfirmModel(false);
               return true;
            }}
         >
            <PhoneMask
               Controller={Controller}
               control={control}
               nameProps='phone'
               title='Phone number'
               required={true}
               validators={['required', 'isNumber']} />

            {/* <Input
               type={`password`}
               required
               title="СМС-код"
               placeholder="Введите код"
               length={80}
            /> */}
            <CustomMask
               Controller={Controller}
               control={control}
               nameProps="code"
               mask="1111"
               title='СМС-код'
               placeholder='----'
            />
            <p>
               <span>00:56</span>Отправить код ещё раз
            </p>
         </PureModal>
      </form>
   )
}
