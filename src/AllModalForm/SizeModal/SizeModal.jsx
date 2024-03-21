import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'

const SizeModal = ({closeSizeModal}) => {
  return (
    <div className='uommodal'>
      <div className='modaldeletebtn'>
        <Tooltip title="Delete">
          <IconButton>
            <MdDeleteSweep className='deletebtn' onClick={() => closeSizeModal(false)} />
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
