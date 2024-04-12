import { Autocomplete, IconButton, TextField, Tooltip } from '@mui/material'
import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import Drag_Drop from '../../components/drag_drop/Drag__Drop'
import { ImCross } from 'react-icons/im'

const category = [
  { label: 'Door Handle (test)' },
  { label: 'Cabinet Handle' },
]

const SubCategoryModal = ({ closeSubCategoryModal }) => {
  return (
    <div className='colormodal' style={{position:'absolute', top:'20%', left:'25%', width:'50%', height:'70%'}}>

      <div className='colourdelete'>
        <Tooltip title="Delete">
          <IconButton>
            <ImCross className='deletebtn' onClick={() => closeSubCategoryModal(false)} />
          </IconButton>
        </Tooltip>
      </div>

      <div className='inputuom'>
        <span>Sub Category</span>
        <input type="text" placeholder='Sub Category Name' style={{width:'400px'}}/>
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
