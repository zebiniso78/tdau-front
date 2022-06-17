import React from 'react'
import { Card, CardLeft, CardRight, UserLocation, UserName, UserPosition } from './style'

export function UserCard({ item }) {
   return (
      <Card>
         <CardLeft>
            <img src={item?.image} />
         </CardLeft>
         <CardRight>
            <UserName>{item?.name}</UserName>
            <UserPosition>{item?.position}</UserPosition>
            <UserLocation>
               <li>Reception time: {item?.reception_time}</li>
               <li>Phone: <span>{item?.phone}</span></li>
               <li>E-mail: <span>{item?.email}</span></li>
            </UserLocation>
         </CardRight>
      </Card>
   )
}
