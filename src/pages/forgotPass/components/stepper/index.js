import React from 'react';

import { Steps } from 'antd';
const { Step } = Steps;
export default function Stepper({ myState }) {
  return (
    <Steps current={myState?.step}>
      <Step title="Phone" />
      <Step title="Verification" />
      <Step title="Change Password" />
    </Steps>
  );
}
