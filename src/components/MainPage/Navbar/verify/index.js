import { CustomMask } from 'components/mask/customMask';
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import PureModal from 'react-pure-modal';
import { useHistory } from 'react-router-dom';
import { authApi } from 'services/api/pagesApi';
import Button from "../../../Button"



export function Verify({ setConfirmModel, setRegisterModel, confirmModel, phoneNumber }) {
   const {
      handleSubmit,
      watch,
      control,
      formState: { errors },
   } = useForm();
   const history = useHistory()
   const [isLoading, setIsLoading] = useState(false)
   async function onSubmit(data) {
      try {
         setIsLoading(true)
         let formData = new FormData()
         formData.append("phone", phoneNumber)
         formData.append("code", data?.code)
         let res = await authApi.verify(formData)
         localStorage.setItem('token', res?.token)
         setIsLoading(false)
         setConfirmModel(false)
         history.push('/')
      } catch (e) {
         console.log(e)
         setIsLoading(false)
      }
   }

 
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <PureModal
            header="Вход"
            footer={
               <div className="footer-button__wrapper">
                  <Button
                     type="submit"
                     title="Зарегистрироваться"
                     disabled={isLoading} />
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
