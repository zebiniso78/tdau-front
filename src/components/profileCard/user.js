import React from 'react';
import {
  Card,
  CardLeft,
  CardRight,
  UserLocation,
  UserName,
  UserPosition,
} from './style';

export function UserCard({ item }) {
  return (
    <Card>
      <CardLeft>
        <img src={`${process.env.REACT_APP_API_SECOND_ROOT}/${item?.photo}`} />
      </CardLeft>
      <CardRight>
        <UserName>{item?.fullname}</UserName>
        <UserPosition>{item?.desc}</UserPosition>
        <UserLocation>
          <li>Reception time: {item?.reception_time}</li>
          <li>
            Phone: <span>{item?.phone}</span>
          </li>
          <li>
            E-mail: <span>{item?.email}</span>
          </li>
        </UserLocation>
      </CardRight>
    </Card>
  );
}
