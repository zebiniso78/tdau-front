import { fabClasses } from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { aboutUniver } from 'services/api/pagesApi';

export default function useLevels() {
  const [data, setData] = useState(undefined);
  const [prog, setProg] = useState(undefined);
  const [loading, setLoading] = useState(fabClasses);
  const { t } = useTranslation();

  async function getData() {
    setLoading(true);
    try {
      const data = await aboutUniver.getFacs();
      const prog = await aboutUniver.getProgs();
      setData(data);
      setProg(prog);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.msg || t('error-text'));
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return { data, prog };
}
