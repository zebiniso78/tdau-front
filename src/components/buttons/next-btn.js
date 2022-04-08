import React from 'react'
import Button from '@mui/material/Button';

export function NextBtnComponent(props) {
   const {
    className='next-btn',
    name,
    onClick
   } = props
   return (
      <Button variant="contained" className={className} onClick={onClick}>{name}</Button>
   )
}
