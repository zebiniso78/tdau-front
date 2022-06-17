import React, { useEffect } from 'react';
import { Container, ContentCard, ContentParagraf, H1, Position } from './style';
import rectorImg from 'assets/rectors/rectorPhoto.png';

function RectorsMessage() {
    useEffect(() => {

    }, []);
    return (
        <Container>
            <ContentCard>
                <div className="left-img">
                    <div className="cubick-rub"> </div>
                    <img src={rectorImg} alt="Rector img" />
                </div>
                <div>
                <div className="right-content">
                    <H1>Khodzhaev Jamshid Abdukhakimovich</H1>
                    <Position>Rector</Position>
                    <ContentParagraf>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                         but also the leap into electronic typesetting, remaining essentially unchanged.
                    </ContentParagraf>
                </div>
                </div>
            </ContentCard>
        </Container>
    );
}

export default RectorsMessage;