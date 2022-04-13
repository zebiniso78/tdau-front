import React from 'react'
import Button from '@mui/material/Button';

export function NextBtnComponent(props) {
   const {
      className = 'next-btn',
      name,
      onClick,
      type
   } = props
   return (
      <Button
         variant="contained"
         className={className}
         onClick={onClick}
         type={type}>{name}</Button>
   )
}
