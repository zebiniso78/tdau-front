import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { aboutUniver } from 'services/api/pagesApi';

export default function useLevel() {
  const [data, setData] = useState(undefined);
  const { id } = useParams();
  async function GetData() {
    try {
      const data = await aboutUniver.getFacById(id);
      setData(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.msg || 'error');
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  return { data };
}
