import React from 'react'
import { Spin } from 'antd';
import { SpinProvider } from './style';

export function LoaderComponent({ type }) {
   return (
      <SpinProvider type={type}>
         <Spin size='large' />
      </SpinProvider>
   )
}
