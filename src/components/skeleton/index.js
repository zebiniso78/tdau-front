import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { CardProvider, CardWrap } from 'styles/globalStyle';
import { Col, Row } from 'antd';
import { Card, CardBody, CardFooter, CardHeader } from 'components/card/style';

export function UniversitySkeleton() {
   return (
      <Row gutter={[16, 16]}>
         {
            Array.from(new Array(4))?.map((item, index) => (
               <Col key={index} span={24} md={6} xl={6} sm={12}>
                  <Card>
                     <CardHeader>
                        <Skeleton variant="rectangular"
                           style={{ borderRadius: '4.88166px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }} width='100%' height={250} />
                     </CardHeader>
                     <CardBody style={{ textAlign: 'center' }}>
                        <Skeleton variant="rectangular" width={260} height={25} style={{ marginTop: '15px', marginLeft: '15px', borderRadius: '4px' }} />
                     </CardBody>
                     <CardFooter>
                        <Skeleton variant="rectangular" width={250} height={25} style={{ marginTop: '15px', marginLeft: '15px', borderRadius: '4px' }} />
                     </CardFooter>
                  </Card>
               </Col>
            ))
         }
      </Row>
   );
}