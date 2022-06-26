import { Row } from 'antd'
import React from 'react'
import { bachelorList } from 'views/bachelor'
import { Items } from './items'
import { CardProvider, CardTitle } from './style'

export function Card() {
   return (
      <CardProvider>
         <CardTitle>Bachelor</CardTitle>
         <Row gutter={[16, 16]}>
            {
               bachelorList?.map((item) => (
                  <Items key={item?.id} item={item} />
               ))
            }
         </Row>
      </CardProvider>
   )
}
