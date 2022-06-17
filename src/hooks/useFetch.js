import toast from "react-hot-toast"

export async function fetchData(url, setState, setLoader) {
   try {
      setLoader(true)
      const response = await url;
      setState(response);
      setLoader(false)
   } catch (e) {
      console.log(e)
      toast.error(e?.msg)
      setLoader(false)
   }
}