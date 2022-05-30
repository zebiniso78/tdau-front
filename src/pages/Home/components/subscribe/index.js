import React from 'react'
import {
   SubscribeProvider, SubscribeLeft,
   SubscribeRight, Form, SubscribeInputWrap,
   Input, Button
} from './style'
import Message from "assets/subscribe/message.png"

export function Subscribe() {
   return (
      <SubscribeProvider>
         <SubscribeLeft>
            <img src={Message} alt="message" />
         </SubscribeLeft>
         <SubscribeRight>
            <Form>
               <h1>Straight from our desk, to your Inbox.</h1>
               <h4>Subscribe to our newsletter</h4>
               <SubscribeInputWrap>
                  <Input type='email' placeholder='Your Email' />
                  <Button type='submit'>Subscribe</Button>
               </SubscribeInputWrap>
            </Form>
         </SubscribeRight>
      </SubscribeProvider>
   )
}
