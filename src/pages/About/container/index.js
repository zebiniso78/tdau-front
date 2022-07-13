import React, { useEffect, useState } from 'react';
import { AboutMain, Article, Discover, ImageComponent } from '../components';
import { AboutContainer } from './style';
import { Video } from '../components/video';
import { fetchData } from 'hooks/useFetch';
import { partnersApi } from 'services/api/pagesApi';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const [loader, setLoader] = useState(true);
  const [siteBlog, setSiteBlog] = useState(undefined);
  const { id } = useParams();
  // let siteBlog = JSON.parse(localStorage.getItem('blog'));

  async function getData() {
    setLoader(true);
    try {
      const res = await partnersApi.readPartners(null);
      const el = res?.all?.find((item) => item?.id == id);
      setSiteBlog(el);
      setLoader(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.msg || 'There was an error loading data!');
      setLoader(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ msOverflowX: 'hidden' }}>
      <AboutMain />
      <AboutContainer data-aos="fade-up" type="video">
        <Discover type="magnusUniversity" firstInfo={siteBlog?.description} />
      </AboutContainer>
      <Video url={siteBlog?.videos} />
      <AboutContainer data-aos="fade-up" className="my-5">
        <ImageComponent
          title={`${t('why-univer')}?`}
          image={
            `${process.env.REACT_APP_API_SECOND_ROOT}/` + siteBlog?.picture_desc
          }
          alt="WSB University"
        />
        <Article articles={siteBlog?.texts} />
      </AboutContainer>
    </div>
  );
}
