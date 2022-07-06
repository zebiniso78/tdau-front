import {
  TextContainer,
  TextContainer2,
} from 'pages/test-pages/rector-massage/container/style';
import React from 'react';

function TextContnet({ data }) {
  return (
    <TextContainer>
      <TextContainer2>
        <h4>Additional infos</h4>
        {data?.map((x, i) => (
          <p key={i}>
            <b>{x?.key}</b> {x?.value}
          </p>
        ))}
      </TextContainer2>
    </TextContainer>
  );
}

export default TextContnet;
