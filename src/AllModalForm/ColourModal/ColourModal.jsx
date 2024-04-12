import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import './ColourModal.css'
import Drag_Drop from '../../components/drag_drop/Drag__Drop'
import { ImCross } from 'react-icons/im'

const ColourModal = ({ closeColourModal }) => {
  return (
    <div className='colormodal' style={{position:'absolute', top:'20%', left:'25%', width:'50%', height:'60%'}}>

      <div className='colourdelete'>
        <Tooltip title="Delete">
          <IconButton>
            <ImCross className='deletebtn' onClick={() => closeColourModal(false)} />
          </IconButton>
        </Tooltip>
      </div>

      <div className='inputuom'>
        <span>Colour Name:</span>
        <input type="text" placeholder='Colour Name' style={{width:'400px'}} />
      </div>
      <div className='drag_drop_upload'>
        <Drag_Drop/>
      </div>
      <div className='colourbtn'>
        <button className='coloursavebtn'>Save</button>
      </div>
    </div>
  )
}

export default ColourModal
