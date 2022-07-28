import { Discover } from 'components/discover';
import { ProgramContainer } from 'pages/programs/style';
import React from 'react';

export default function AboutComponents({ data }) {
  return (
    <ProgramContainer>
      <Discover type="magnusUniversity" firstInfo={data?.desc1} />
    </ProgramContainer>
  );
}
