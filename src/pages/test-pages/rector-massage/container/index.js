import { FirebaseLoader } from 'components/firebaseLoader';
import { fetchData } from 'hooks/useFetch';
import React, { useEffect, useState } from 'react';
import { messageApi } from 'services/api/pagesApi';
import { LoadingSpinner } from 'video-react';
import TextContnet from '../components/textContnet';
import TitleCard from '../components/titleCard';
import { Container } from './style';

function RectorsMessage() {
  const [data, setData] = useState(undefined);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchData(messageApi.getMessage(), setData, setLoader);
  }, []);
  let myData = data ? data[0] : undefined;

  return (
    <>
      {myData !== undefined ? (
        <Container style={{ overflowY: 'hidden' }}>
          <TitleCard
            desc={myData?.description}
            rector_photo={myData?.rector_photo}
            rector_name={myData?.rector_name}
          />
          <TextContnet
            photo={myData?.photo}
            add_info={myData?.additional_infos}
            work_activities={myData?.work_activities}
          />
        </Container>
      ) : (
        <h3 style={{ textAlign: 'center' }}>
          <FirebaseLoader />
        </h3>
      )}
    </>
  );
}

export default RectorsMessage;
