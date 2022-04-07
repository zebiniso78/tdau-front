import React from 'react'
import Button from '@mui/material/Button';

export function CancelBtnComponent(props) {
   const {
      className,
      name,
      onClick
   } = props
   return (
      <Button variant="outlined" className={className} onClick={onClick}>{name}</Button>
   )
}
