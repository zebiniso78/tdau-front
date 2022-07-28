import { Button, Col, Row } from 'antd'
import React from 'react'
import { defaultStyles, FileIcon } from 'react-file-icon';

export function FileUpload({ path, ext, setState }) {
   return (
      <Row gutter={[16, 16]} align='middle' justify='space-between'>
         <Col span={24} md={12}>
            <a
               style={{ maxWidth: '100px', display: 'inline-block' }}
               className="fileIcon"
               href={process.env.REACT_APP_API_SECOND_ROOT + '/' + path}
               target="_blank"
               // download
               rel="noreferrer"
            >
               <div style={{ textAlign: 'center', }}>
                  <FileIcon extension={ext} {...defaultStyles[ext]} />
               </div>
            </a>
         </Col>
         <Col span={24} md={12}>
            <Button onClick={() => setState(false)}>Перезагрузить</Button>
         </Col>
      </Row>
   )
}
