import { Col, Row } from 'antd';
import { NextBtnComponent } from 'components/buttons/next-btn';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { ButtonsProvider } from 'components/buttons/style';
import { LoaderComponent } from 'components/loader';
import { fetchData } from 'hooks/useFetch';
import React, { useEffect, useState } from 'react';
import { admissionApi } from 'services/api/pagesApi';
import { Attachments } from './attachments';
import { Items } from './Items';
import { CheckApplicationProvider, ApplicationTitle } from './style';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CheckApplication() {
  const { t } = useTranslation();
  const history = useHistory();
  const [allAdmission, setAllAdmission] = useState(undefined);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetchData(
      admissionApi.admissionGetForign(null),
      setAllAdmission,
      setLoader
    );
  }, []);

  return (
    <CheckApplicationProvider className="container">
      <ApplicationTitle>{t('check-app')}</ApplicationTitle>
      {!loader ? (
        <>
          <Row gutter={[16, 16]} justify="space-between" align="top">
            <Items title={t('nationality')} info={allAdmission?.nationality} />
            <Items
              title={t('full-name')}
              info={
                allAdmission?.name +
                ' ' +
                allAdmission?.surname +
                ' ' +
                allAdmission?.middle_name
              }
            />
            <Items title={t('school')} info={allAdmission?.school} />
            <Items title="GPA" info={allAdmission?.GPA} />
            <Items
              title={t('accept-deadline')}
              info={allAdmission?.accept_deadline}
            />
            <Items
              title={t('address-info-address1') + ' 1'}
              info={allAdmission?.adress1}
            />
            <Items
              title={t('address-info-address1') + ' 2'}
              info={allAdmission?.adress2}
            />
            <Items
              title={t('academic-tip-program')}
              info={allAdmission?.aplication_type}
            />
            <Items
              title={t('cauntry-birth')}
              info={allAdmission?.country_birth}
            />

            <Items title={t('cauntry')} info={allAdmission?.current_country} />
            <Items title={t('district')} info={allAdmission?.district} />
            <Items title="Dtm" info={allAdmission?.dtm} />
            <Items title={t('email')} info={allAdmission?.email} />
            <Items
              title={t('passport-expiry')}
              info={allAdmission?.passport_expiry}
            />
            <Items
              title={t('passport-number')}
              info={allAdmission?.passport_number}
            />
            <Items title={t('phone')} info={allAdmission?.phone_a} />
            <Items title="Pnfl" info={allAdmission?.pnfl} />
            <Items
              title={t('post-address' + ' 1')}
              info={allAdmission?.post_adress1}
            />
            <Items
              title={t('post-address' + ' 2')}
              info={allAdmission?.post_adress2}
            />
            <Items
              title={t('post-district')}
              info={allAdmission?.post_district}
            />
            <Items title={t('post-index')} info={allAdmission?.post_index} />
            <Items
              title={t('post-index') + '2'}
              info={allAdmission?.post_index_2}
            />
            <Items title={t('post-region')} info={allAdmission?.post_region} />
            <Items
              title={t('qualification')}
              info={allAdmission?.qualification}
            />
            <Items
              title={t('qualification') + ' 2'}
              info={allAdmission?.qualification2}
            />
            <Items title={t('region')} info={allAdmission?.region} />
          </Row>
          <ApplicationTitle type="attachments">{t('attach')}</ApplicationTitle>
          <Row>
            {allAdmission?.attachments?.map((item) => {
              return (
                <Attachments
                  key={item?.id}
                  ext={item?.ext}
                  title={item?.info}
                  path={item?.path}
                />
              );
            })}
          </Row>
          <ButtonsProvider>
            <CancelBtnComponent
              name={t('back')}
              className="prev-btn"
              onClick={() => history.push('/university-admissions/references')}
              type="button"
            />
            <NextBtnComponent
              name={t('submit')}
              className="next-btn"
              onClick={() =>
                history.push('/university-admissions/additional-info')
              }
            />
          </ButtonsProvider>
        </>
      ) : (
        <LoaderComponent />
      )}
    </CheckApplicationProvider>
  );
}
