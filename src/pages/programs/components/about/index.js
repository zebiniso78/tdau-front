import { Discover } from 'components/discover';
import { ProgramContainer } from 'pages/programs/style';
import React from 'react';

export default function AboutComponents() {
  return (
    <ProgramContainer>
      <Discover
        type="magnusUniversity"
        firstInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum libero ante, non tempus justo finibus at. Fusce semper consectetur porttitor. Vivamus vel dolor dolor. Fusce tempus sit amet sem accumsan pulvinar. Cras vestibulum justo sagittis tortor vehicula vulputate. In et purus eget dolor egestas sollicitudin et sit amet ligula. Aliquam ac sapien nec sapien consectetur facilisis. Sed eu nisl laoreet, pellentesque lectus nec, pulvinar neque. Sed placerat, risus eget dapibus venenatis, neque lectus ornare velit, eget venenatis arcu risus nec libero. Etiam tristique tellus quis est maximus, quis dignissim odio tristique. Vestibulum dignissim dolor vel augue feugiat mollis. Aenean mollis posuere gravida. Quisque malesuada vitae ante scelerisque porttitor. Praesent augue lorem, sagittis bibendum nibh id, aliquam rutrum enim. Vivamus nisi ipsum, vestibulum nec eros eu, finibus faucibus nunc. Aliquam sit amet porta neque, maximus feugiat elit. Morbi vestibulum elit neque, quis tincidunt libero laoreet sed. Mauris blandit aliquam sem in lacinia. Nunc mollis nibh non varius pharetra. In sollicitudin tristique leo eu pulvinar. Aliquam risus lorem, tempus ac diam molestie, iaculis molestie risus. Vestibulum malesuada aliquet orci eget condimentum. Maecenas euismod, augue vitae egestas porttitor, neque odio pretium nisl, sed commodo risus magna in mauris. Mauris et mauris eget diam pretium eleifend sit amet nec nulla. Aliquam quam orci, auctor nec bibendum eget, porttitor id quam. Pellentesque at quam vel turpis gravida rhoncus. Sed suscipit quam iaculis, ultricies urna ac, condimentum turpis."
      />
    </ProgramContainer>
  );
}
