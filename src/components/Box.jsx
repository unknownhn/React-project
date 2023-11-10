import { Button } from '@mui/material'
import React from 'react'

const Box = ({name}) => {
  return (
    <div className='border-b-[2px] py-[4px]'>
      <div className='flex justify-between '>
        <h1>{name}</h1>
        <Button>
        Full Time
        </Button>
      </div>
      <div className='flex justify-between'>
        <h1>Bangalore Instutute of Technology</h1>
        <p>Aug 2015 - Dec 2020</p>
      </div>
    </div>
  )
}

export default Box
