import React, { useEffect, useMemo, useState } from 'react';
import UserFormSelectComponent from '../../../../components/select';
import {
  AcademicInfoProvider,
  AcademicInfoTitle,
  AcademicInfo,
  AcademicForm,
} from './style';
import { Controller, useForm } from 'react-hook-form';
import { ButtonsProvider } from '../../../../components/buttons/style';
import { CancelBtnComponent } from '../../../../components/buttons/prev-btn';
import { NextBtnComponent } from '../../../../components/buttons/next-btn';
import { useHistory } from 'react-router-dom';
import { Error } from 'common/grid';
import { admissionApi } from 'services/api/pagesApi';
import toast from 'react-hot-toast';
import { useGetList } from '../hooks/useGetList';
// import TwoDate from 'components/calendar/twoDate';
// import moment from 'moment';
// import Calendar from 'components/calendar';
import { acceptDedline } from 'views';
import { fetchData } from 'hooks/useFetch';
import browserStorage from 'services/storage';
import { LoaderComponent } from 'components/loader';

export default function AcademicInformation() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();
  let universityID = browserStorage.set('university_id');
  let steps = localStorage.getItem('step')
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [educationFormList, setEducationFormList] = useState([]);
  const [educationTypeList, setEducationTypeList] = useState([]);
  const [facultyList, setFacultyList] = useState(undefined);
  const [eduTypeForeign, setEduTypeForeign] = useState([])
  const [facultyForeign, setFacultyForeign] = useState([])
  const [isFetch, setIsFetch] = useState(true)
  const [defaultValues, setDefaultValues] = useState(undefined)



  const { facultyByID } = useGetList({
    setEducationFormList,
    setEducationTypeList,
    setFacultyList,
    setEduTypeForeign
  });
  useEffect(() => {
    if (steps) {
      fetchData(admissionApi.admissionGetForign(null), setDefaultValues, setIsFetch)
    }
  }, [steps])
  useEffect(() => {
    if (defaultValues?.accept_deadline == null && defaultValues?.education_type_id == null) {
      console.log('null')
    } else {
      reset({
        srok_priema: {
          label: acceptDedline?.find(item => item?.label === defaultValues?.accept_deadline)?.label,
          value: acceptDedline?.find(item => item?.label === defaultValues?.accept_deadline)?.value
        },
        tip_programma: {
          label: eduTypeForeign?.find(item => item?.value === defaultValues?.education_type_id)?.label,
          value: eduTypeForeign?.find(item => item?.value === defaultValues?.education_type_id)?.value
        },
        napravleniya: {
          label: facultyForeign?.find(item => item?.value === defaultValues?.faculty_id)?.label,
          value: facultyForeign?.find(item => item?.value === defaultValues?.faculty_id)?.value
        }
      })
    }
  }, [defaultValues, acceptDedline, eduTypeForeign, facultyForeign])
  useEffect(() => {
    facultyByID()
  }, [universityID])
  useEffect(() => {
    if (facultyList?.faculties?.length > 0) {
      let cloneList = [...facultyList?.faculties]
      let newList = cloneList?.filter(item => item?.code === watch('tip_programma')?.label)?.map(x => {
        return {
          label: x?.name,
          value: x?.id
        }
      })
      console.log(newList)
      setFacultyForeign([...newList])
    }
  }, [facultyList?.faculties, watch('tip_programma')?.label])

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('faculty_id', data?.napravleniya?.value);
      formData.append('education_type_id', data?.tip_programma?.value);
      formData.append('accept_deadline', data?.srok_priema?.label)
      formData.append('register_step', 2);
      await admissionApi.admissionPostForign(formData);
      toast.success("Академические данные успешно созданы")
      localStorage.setItem('step', 2);
      history.push('/university-admissions/passport-info');
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast.error(e?.msg);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (localStorage?.getItem('step') > 0) {
      // getEducationForm();
      // getEducationType();
    } else {
      history.push('/university-admissions/personal-info');
    }
  }, []);
  return (
    <AcademicInfoProvider>
      <AcademicInfoTitle>Академическая информация</AcademicInfoTitle>
      <AcademicInfo>
        <p>
          Вы не можете подать заявку на онлайн-степени Международного
          сельскохозяйственного университета, используя эту форму. Пожалуйста,
          ознакомьтесь с информацией о наших онлайн-программах на получение
          степени на http://www.iau.uz/study/online/
        </p>
        <p>
          <strong>
            Поля ниже должны быть заполнены в том порядке, в котором они
            появляются, поскольку каждый предоставленный вами ответ будет
            заполнять доступные варианты в следующем поле.
          </strong>
        </p>
      </AcademicInfo>
      {
        !isFetch ? <AcademicForm
          onSubmit={handleSubmit(onSubmit)}
          className="row align-items-end"
        >
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Срок приема*"
              name="srok_priema"
              placeholder="Выберите"
              options={acceptDedline}
              disabled={false}
              className={
                errors &&
                errors?.hasOwnProperty('srok_priema') &&
                'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('srok_priema') && (
              <Error className="select-error-tooltip">
                Iltimos malumotni kiriting!
              </Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="тип программа*"
              name="tip_programma"
              placeholder="Выберите"
              // options={educationTypeList}
              options={eduTypeForeign}
              disabled={false}
              className={
                errors &&
                errors?.hasOwnProperty('tip_programma') &&
                'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('tip_programma') && (
              <Error className="select-error-tooltip">
                Iltimos malumotni kiriting!
              </Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Направление*"
              name="napravleniya"
              placeholder="Выберите"
              // options={educationFormList}
              options={facultyForeign}
              disabled={false}
              className={
                errors && errors?.hasOwnProperty('napravleniya') && 'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('napravleniya') && (
              <Error className="select-error-tooltip">
                Iltimos malumotni kiriting!
              </Error>
            )}
          </div>
          <ButtonsProvider>
            <CancelBtnComponent
              name="Отмена"
              className="prev-btn"
              onClick={() => history.push('/personal-info')}
            />
            {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
            <NextBtnComponent
              name="Продолжить"
              className="next-btn"
              type="submit"
              disabled={isLoading}
            // onClick={() => history.push('/passport-info')}
            />
          </ButtonsProvider>
        </AcademicForm> : <LoaderComponent type='academic_info' />
      }

    </AcademicInfoProvider>
  );
}
