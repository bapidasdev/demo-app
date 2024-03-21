import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { MdDeleteSweep } from "react-icons/md";
import './UomModal.css'

const UomModal = ({ closeUomModal }) => {
  return (
    <div className='uommodal'>
      <div className='modaldeletebtn'>
        <Tooltip title="Delete">
          <IconButton>
            <MdDeleteSweep className='deletebtn' onClick={() => closeUomModal(false)} />
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
