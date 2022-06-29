import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function useVice() {
  const [rectorData, setRectorData] = useState(undefined);
  const [data, setData] = useState(undefined);

  async function getElements() {
    try {
      const info = await structureApi.getStructure();
      // const reactorInfo = await structureApi.getStructure();
    } catch (error) {
      console.log(error);
      toast.error(error.msg || error);
    }
  }

  useEffect(() => {
    getElements();
  }, []);

  return {};
}
