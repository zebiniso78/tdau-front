import React from 'react';
import { BranchProvider, BranchTitle, Image } from './style';
import BranchImage from 'assets/director/branch.png';
import { Paragraph } from 'styles/globalStyle';

export function Branch({ data }) {
  return (
    <BranchProvider>
      <BranchTitle>{data?.name}</BranchTitle>
      <Image
        style={{ width: '100%', maxHeight: '80vh', objectFit: 'cover' }}
        src={`${process.env.REACT_APP_API_SECOND_ROOT}/${data?.photo2}`}
        alt="branch"
      />
      <Paragraph style={{ marginTop: '60px' }}>{data?.desc}</Paragraph>
    </BranchProvider>
  );
}
