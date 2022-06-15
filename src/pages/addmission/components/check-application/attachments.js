import { Col, Row } from 'antd'
import React from 'react'
import { defaultStyles, FileIcon } from 'react-file-icon';

export function Attachments({ title, path, ext }) {
   return (
      <Col span={24} md={12} xl={8}>
         <Row align="middle">
            <Col span={24} style={{ textTransform: 'capitalize' }}>{title}:</Col>
            <Col span={24}>
               <a
                  className="fileIcon"
                  href={process.env.REACT_APP_API_SECOND_ROOT + '/' + path}
                  target="_blank"
                  // download
                  rel="noreferrer"
               >
                  <div style={{ textAlign: 'center', width: '30px' }}>
                     <FileIcon extension={ext} {...defaultStyles[ext]} />
                  </div>
               </a>
               {/* <div className="info">{(info && !info?.includes('undefined')) ? info : <span>Заполнить поле</span>}</div> */}
            </Col>
         </Row>
      </Col>
   )
}
