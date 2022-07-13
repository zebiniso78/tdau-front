import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { aboutUniver } from 'services/api/pagesApi';

export default function useAboutUniver({ setLoading }) {
  const [aboutData, setAboutData] = useState(undefined);
  const [programsData, setProgramsData] = useState(undefined);
  const [branchesData, setBranchesData] = useState(undefined);
  const { t } = useTranslation();

  async function getData() {
    setLoading(true);
    try {
      const about = await aboutUniver.getAbout();
      const prog = await aboutUniver.getProgs();
      const branch = await aboutUniver.getBranches();
      setAboutData(about);
      setProgramsData(prog);
      setBranchesData(branch);
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
  return { aboutData, programsData, branchesData };
}
