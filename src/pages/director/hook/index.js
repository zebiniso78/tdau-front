import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { aboutUniver } from 'services/api/pagesApi';

export default function useDirector() {
  const [data, setData] = useState(undefined);
  const { id } = useParams();
  const { t } = useTranslation();

  async function GetData() {
    try {
      const data = await aboutUniver.getBrancheById(id);
      setData(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.msg || t('error-text'));
    }
  }

  useEffect(() => {
    GetData();
  }, []);
  return { data };
}
