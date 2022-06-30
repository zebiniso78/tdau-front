import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { structureApi } from 'services/api/pagesApi';

export default function useVice() {
  const [rectorData, setRectorData] = useState(undefined);
  const [data, setData] = useState(undefined);

  async function getElements() {
    try {
      const info = await structureApi.getStructure();
      const reactorInfo = await structureApi.getRectorStructure();
      setData(info);
      setRectorData(reactorInfo);
    } catch (error) {
      console.log(error);
      toast.error(error.msg || error);
    }
  }

  useEffect(() => {
    getElements();
  }, []);

  return { rectorData, data };
}