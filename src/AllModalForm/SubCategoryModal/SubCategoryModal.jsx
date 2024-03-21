import { Autocomplete, IconButton, TextField, Tooltip } from '@mui/material'
import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import Drag_Drop from '../../components/drag_drop/Drag__Drop'

const category = [
  { label: 'Door Handle (test)' },
  { label: 'Cabinet Handle' },
]

const SubCategoryModal = ({ closeSubCategoryModal }) => {
  return (
    <div className='colormodal'>

      <div className='colourdelete'>
        <Tooltip title="Delete">
          <IconButton>
            <MdDeleteSweep className='deletebtn' onClick={() => closeSubCategoryModal(false)} />
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

      


      <div className='category__brand' style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <div>
              <span>Choose Category</span>
            </div>
            <div>
              <Autocomplete
                style={{ marginRight: "10px" }}
                disablePortal
                id="combo-box-demo"
                options={category}
                sx={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Category" />}
              />
            </div>

          </div>





      <div className='colourbtn'>
        <button className='coloursavebtn'>Save</button>
      </div>
    </div>
  )
}

export default SubCategoryModal
