import { IconButton, Tooltip } from '@mui/material'
import React, { useState } from 'react'

import './UomModal.css'
import { ImCross } from 'react-icons/im';

const UomModal = ({ closeUomModal }) => {
  
  return (
    <div className='uommodal' style={{position:'absolute', top:'20%', left:'5%', width:'40%', height:'30%'}}  >
      <div className='modaldeletebtn' >
        <Tooltip title="Delete" className='modaldeletebtn'>
          <IconButton>
            <ImCross className='deletebtn' onClick={() => closeUomModal(false)} />
          </IconButton>
        </Tooltip>
      </div>
      <div className='inputuom'>
        <span>U0M Name:</span>
        <input type="text" placeholder='UoM Name' />
      </div>
      <div className='oumbtn'>
      <button className='uomsavebtn'>Save</button>
      </div>
      
      
    </div>
  )
}

export default UomModal
