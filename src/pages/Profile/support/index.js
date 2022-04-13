import { NextBtnComponent } from 'components/buttons/next-btn';
import React from 'react';
import { Container } from './style';

export default function SupportComponent() {
  return (
    <Container>
      <p>How can we help?</p>

      <div className="row align-items-end justify-content-between">
        <div className="col-md-8">
          <textarea placeholder="your message"></textarea>
        </div>
        <div className="col-md-4">
          <div>
            <NextBtnComponent
              name="Отравить"
              className="next-btn"
              type="submit"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
