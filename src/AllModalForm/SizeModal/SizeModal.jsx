import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { ImCross } from 'react-icons/im'
import { MdDeleteSweep } from 'react-icons/md'

const SizeModal = ({closeSizeModal}) => {
  return (
    <div className='uommodal' style={{position:'absolute', top:'20%', left:'5%', width:'40%', height:'30%'}}>
      <div className='modaldeletebtn'>
        <Tooltip title="Delete">
          <IconButton>
            <ImCross className='deletebtn' onClick={() => closeSizeModal(false)} />
          </IconButton>
        </Tooltip>
      </div>
      <div className='inputuom'>
        <span>Size Name:</span>
        <input type="text" placeholder='Size Name:' />
      </div>
      <div className='oumbtn'>
      <button className='uomsavebtn'>Save</button>
      </div>
      
      
    </div>
  )
}

export default SizeModal
