import toast from "react-hot-toast";
import { admissionApi } from "services/api/pagesApi";
import { useHistory } from 'react-router-dom'

export const useSend = ({ setIsLoading, isChecked }) => {
   const history = useHistory()
   const onSubmit = async (data) => {
      localStorage.setItem('step', 4);
      try {
         setIsLoading(true);
         let formData = new FormData();
         formData.append('address1', data?.address1);
         formData.append('address2', data?.address2);
         if (data?.post_index !== undefined) formData.append('post_index', data?.post_index);
         if (data?.post_address1 !== undefined) formData.append('post_address1', data?.post_address1);
         if (data?.post_address2 !== undefined) formData.append('post_address2', data?.post_address2);
         if (data?.postRegion !== undefined) formData.append('post_region', data?.postRegion?.label);
         if (data?.postDistrict !== undefined) formData.append('post_district', data?.postDistrict?.label);
         if (data?.post_index2 !== undefined) formData.append('post_index2', data?.post_index2);
         formData.append('phone', `+998${data?.phone}`);
         formData.append('email', data?.email);
         formData.append('region', data?.regionID?.label);
         formData.append('district', data?.districtID?.label);
         formData.append('register_step', 4);
         await admissionApi.admissionPostForign(formData);
         toast.success("Информация об адресе успешно создана")
         history.push('/university-admissions/education-qualifications');
         setIsLoading(false);
      } catch (e) {
         console.log(e);
         toast.error(e?.msg);
         setIsLoading(false);
      }
   };
   return { onSubmit };
}