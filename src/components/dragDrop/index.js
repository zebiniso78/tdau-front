import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FiFolder } from 'react-icons/fi';
import { VscFolderActive } from 'react-icons/vsc';
import {
   // AiOutlineCloseCircle,
   AiOutlineWarning,
   AiOutlineDelete,
} from 'react-icons/ai';
import { MyDiv, Alert, AlertDanger, Station, Info, Icon, Title } from "./style"
function DragDrop(props) {
   const wrapperRef = useRef(null);
   const [inpErr, setInpErr] = useState(false);
   const [inpVal, setInpVal] = useState([]);
   const [inp, setInp] = useState(false);

   const onDragEnter = () => wrapperRef.current.classList.add('asad');
   const onDragLeave = () => wrapperRef.current.classList.remove('asad');
   const onDrop = () => wrapperRef.current.classList.remove('asad');

   const onFileDrop = (e) => {
      setInpErr(false);
      const newFile = e.target.files[0];
      console.log(newFile);

      if (newFile) {
         if (e.target.files[0].size <= 52428800 && props.files.length < 3) {
            const allFiles = [...props.files, newFile];
            props.setFile(allFiles);
            setInpVal(...inpVal, newFile.name);
            setInp(true);
         } else {
            setInpErr(true);
            //   setInp(false);
         }
      }
   };
   const DeleteFile = (time, size, name) => {
      setInpErr(false);
      const allFiles = [...props.files];

      props.setFile(
         allFiles.filter(
            (file) =>
               file.lastModified !== time && file.size !== size && file.name !== name
         )
      );

      if (props.files.length < 2) {
         setInp(false);
      }
   };

   return (
      <MyDiv>
         <Station
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            style={inpErr === true ? { borderColor: 'red' } : null}
         >
            <Info>
               <Icon>
                  <FiFolder />
               </Icon>
               <p>
                  Выберите изображение или перетащите его сюда JPG, PNG, PDF, DOC... <br />
                  <span>(max: 50mb)</span>
               </p>
            </Info>
            <input
               name={props.name}
               id={props.inputId}
               type="file"
               value=""
               onChange={onFileDrop}
            // required={props.required ? true : false}
            />
         </Station>

         {inpErr === true ? (
            <AlertDanger>
               <AiOutlineWarning />
               <p>Fayl xato kritildi yoki 3 tadan ko'p </p>
               <button onClick={() => setInpErr(false)}>
                  <AiOutlineDelete />
               </button>
            </AlertDanger>
         ) : null}

         {inp === true
            ? props.files.map((file) => (
               <Alert key={file.lastModified + file.size}>
                  <VscFolderActive />
                  <p>{file.name}</p>
                  <button
                     onClick={() =>
                        DeleteFile(file.lastModified, file.size, file.name)
                     }
                  >
                     <AiOutlineDelete />
                  </button>
               </Alert>
            ))
            : null}
      </MyDiv>
   );
}


export default DragDrop;
