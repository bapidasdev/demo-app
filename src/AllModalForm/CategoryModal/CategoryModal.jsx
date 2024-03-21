import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import Drag_Drop from '../../components/drag_drop/Drag__Drop'

const CategoryModal = ({closeCategoryModal}) => {
  return (
    <div className='colormodal'>

      <div className='colourdelete'>
        <Tooltip title="Delete">
          <IconButton>
            <MdDeleteSweep className='deletebtn' onClick={() => closeCategoryModal(false)} />
          </IconButton>
        </Tooltip>
      </div>

      <div className='inputuom'>
        <span>Colour Name:</span>
        <input type="text" placeholder='Colour Name' />
      </div>
      <div className='drag_drop_upload'>
        <Drag_Drop />
      </div>

      <div className='colourbtn'>
        <button className='coloursavebtn'>Save</button>
      </div>
    </div>
  )
}

export default CategoryModal
