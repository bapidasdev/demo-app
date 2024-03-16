import { Autocomplete, IconButton, TextField, Tooltip } from '@mui/material'
import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import './ModalNewForm.css'

const colour = [
  { label: 'Galden (Test)' }, { label: 'Steel (Test)' }
]

const size = [
  { label: '12"16mm*3mm' }, { label: '96mm' }, { label: '128mm' }, { label: '160mm' },
  { label: '224mm' }, { label: '288mm' }, { label: '10"' }, { label: '12"' }
]

const uom = [
  { label: 'piece' }, { label: 'pcs' }, { label: 'packet' }, { label: 'set(1)' }
]

const ModalNewForm = ({ closeNewModal }) => {
  return (

    <div className='main_container'>
      <div className='new_modalForm'>
        <div className='input'>
          <div>
            <span>Color</span>
          </div>
          <div>
            <Autocomplete
              style={{ marginRight: "10px" }}
              disablePortal
              id="combo-box-demo"
              options={colour}
              sx={{ width: 457 }}
              renderInput={(params) => <TextField {...params} label="colour" />}
            />
          </div>
        </div>

        <div className='input'>
          <div>
            <span> Size</span>
          </div>
          <div>
            <Autocomplete
              style={{ marginRight: "10px" }}
              disablePortal
              id="combo-box-demo"
              options={size}
              sx={{ width: 470 }}
              renderInput={(params) => <TextField {...params} label="size" />}
            />
          </div>
        </div>

        <div className='input'>
          <div>
            <span>UOM</span>
          </div>
          <div>
            <Autocomplete
              style={{ marginRight: "10px" }}
              disablePortal
              id="combo-box-demo"
              options={uom}
              sx={{ width: 462}}
              renderInput={(params) => <TextField {...params} label="uom" />}
            />
          </div>
        </div>

        <div className="input">
          <span>Price </span>
          <input type="text" name="productName" placeholder="Price" className='name_input' />
        </div>

        <div className="input ">
          <span className=''>Packing</span>
          <input type="text" name="productName" placeholder="Packing Unit" className='name_input' />
        </div>

        <div className="input ">
          <span>Reward</span>
          <input type="text" name="productName" placeholder="Reward Point" className='name_input' />
        </div>

      </div>

      <div>
        <button className='DeleteBtn' onClick={() => closeNewModal(false)}>Delete</button>
        {/* <Tooltip title="Delete" className='btnnew'>
            <IconButton>
              <MdDeleteSweep onClick={() => closeNewModal(false)}  />
            </IconButton>
          </Tooltip> */}
      </div>
    </div>



  )
}

export default ModalNewForm
