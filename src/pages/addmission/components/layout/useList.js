import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export function useList() {
  const { t } = useTranslation();
  const timelineList = useMemo(
    () => [
      {
        id: 1,
        pathName: '/university-admissions/personal-info',
        name: t('personal-info'),
      },
      {
        id: 2,
        pathName: '/university-admissions/academic-info',
        name: t('academic-admission-info'),
      },
      {
        id: 3,
        pathName: '/university-admissions/passport-info',
        name: t('passport-info'),
      },
      {
        id: 4,
        pathName: '/university-admissions/address-info',
        name: t('address-info-title'),
      },
      {
        id: 5,
        pathName: '/university-admissions/education-qualifications',
        name: t('education-title'),
      },
      // {
      //   id: 6,
      //   pathName: '/university-admissions/supporting-info',
      //   name: t('support-title'),
      // },
      // {
      //   id: 7,
      //   pathName: '/university-admissions/references',
      //   name: t('reference-titl'),
      // },
      {
        id: 8,
        pathName: '/university-admissions/check-your-application',
        name: t('check-app'),
      },
      {
        id: 9,
        pathName: '/university-admissions/additional-info',
        name: t('additional-info-title'),
      },
    ],
    [t]
  );

  return { timelineList };
}
