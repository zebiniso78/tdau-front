import toast from "react-hot-toast";
import { admissionApi } from "services/api/pagesApi";
import { useHistory } from 'react-router-dom'

export const useSend = ({ setIsLoading, isChecked }) => {
   const history = useHistory()
   const onSubmit = async (data) => {
      localStorage.setItem('step', 4);
      try {
         console.log(data)
         setIsLoading(true);
         let formData = new FormData();
         formData.append('adress1', data?.address1);
         formData.append('adress2', data?.address2);
         if (data?.post_index !== undefined) formData.append('post_index', data?.post_index);
         if (data?.post_address1 !== undefined && isChecked) {
            formData.append('post_address1', data?.post_address1);
         } else {
            formData.append('post_address1', null);
         }
         if (data?.post_address2 !== undefined && isChecked) {
            formData.append('post_address2', data?.post_address2);
         } else {
            formData.append('post_address2', null);
         }
         if (data?.postRegion !== undefined && isChecked) {
            formData.append('post_region', data?.postRegion?.label);
         } else {
            formData.append('post_region', null);
         }
         if (data?.postDistrict !== undefined && isChecked) {
            formData.append('post_district', data?.postDistrict?.label);
         } else {
            formData.append('post_district', null);
         }
         if (data?.post_index2 !== undefined && isChecked) {
            formData.append('post_index2', data?.post_index2);
         } else {
            formData.append('post_index2', null);
         }
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