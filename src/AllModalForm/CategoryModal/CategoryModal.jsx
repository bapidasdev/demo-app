import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

import { ImCross } from "react-icons/im";
import Drag_Drop from '../../components/Drag&Drop/Drag__Drop'

const CategoryModal = ({closeCategoryModal, }) => {

  return (
    
    <div className='colormodal'
    style={{position:'absolute', top:'20%', left:'25%', width:'50%', height:'60%'}} >
      <div className='colourdelete'>
        <Tooltip title="Delete">
          <IconButton className='bapi' >
            <ImCross className='deletebtn' onClick={() => closeCategoryModal(false)} />
          </IconButton>
        </Tooltip>
      </div>

      <div className='inputuom'>
        <span>Category </span>
        <input type="text"
          //value={[]} onChange={e.target.value}
           placeholder='Category Name'style={{width:'400px'}} />
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
