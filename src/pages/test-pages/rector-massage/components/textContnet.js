import React from 'react';
import {
  TextContainer,
  TextContainer1,
  TextContainer2,
} from '../container/style';

function TextContnet({ add_info, work_activities, photo }) {
  return (
    <TextContainer>
      <TextContainer1>
        <div className="right-text">
          {add_info?.map((x, i) => (
            <p key={i}>
              <b>{x?.key}:</b> <span>{x?.value}</span>
            </p>
          ))}
        </div>
        <img
          src={`${process.env.REACT_APP_API_SECOND_ROOT}/${photo}`}
          alt="rector foto"
        />
      </TextContainer1>
      <TextContainer2>
        <h4>WORK ACTIVITIES</h4>

        {work_activities?.map((x, i) => (
          <p key={i}>
            <b>{x?.key}:</b> {x?.value}
          </p>
        ))}
      </TextContainer2>
    </TextContainer>
  );
}

export default TextContnet;
