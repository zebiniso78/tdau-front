import { NextBtnComponent } from 'components/buttons/next-btn';
import React from 'react';
import { Modal } from 'antd';
import { Container } from './style';
export default function SupportComponent({
  setIsModalVisible,
  isModalVisible,
}) {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Container>
        <p className="px-2 py-1 bg-light mb-3">How can we help?</p>

        <div className="row align-items-end justify-content-between">
          <div className="col-md-8">
            <textarea placeholder="your message"></textarea>
          </div>
        </div>
      </Container>
    </Modal>
  );
}
