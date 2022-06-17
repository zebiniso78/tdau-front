import React, { useEffect } from 'react';
import TextContnet from '../components/textContnet';
import TitleCard from '../components/titleCard';
import { Container } from './style';


function RectorsMessage() {

    return (
        <Container>
            <TitleCard />
            <TextContnet />
        </Container>
    );
}

export default RectorsMessage;