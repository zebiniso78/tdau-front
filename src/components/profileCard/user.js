import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardLeft,
  CardRight,
  UserLocation,
  UserName,
  UserPosition,
} from './style';

export function UserCard({ item }) {
  const { t } = useTranslation();
  return (
    <Card>
      <CardLeft>
        <img src={`${process.env.REACT_APP_API_SECOND_ROOT}/${item?.photo}`} />
      </CardLeft>
      <CardRight>
        <UserName>{item?.fullname}</UserName>
        <UserPosition>{item?.desc}</UserPosition>
        <UserLocation>
          <li>
            {t('reseption-time')}: {item?.reception_time}
          </li>
          <li>
            {t('phone')}: <span>{item?.phone}</span>
          </li>
          <li>
            {t('email')}: <span>{item?.email}</span>
          </li>
        </UserLocation>
      </CardRight>
    </Card>
  );
}
