import React, { useState } from 'react'
import '../stylesPages/ModalForm.css'
import { IoMdCloudUpload } from "react-icons/io";
import { MdDelete, MdDeleteSweep } from "react-icons/md";
import { FaFile, FaUser } from "react-icons/fa";
import { Autocomplete, IconButton, TextField, Tooltip } from '@mui/material';

import Editor from '../components/Editor'
import Drag_Drop from './Drag__Drop';

const category = [
  { label: 'Door Handle (test)' },
  { label: 'Cabinet Handle' },
]
const brand = [
  { label: 'Ebco' }, { label: 'S.D.' }, { label: 'Look' }, { label: 'K.T' }, { label: 'Beeta' }, { label: 'Saswat' },
  { label: 'Yesh Desire' }, { label: 'RAC' }, { label: 'GPE' },
]
const colour = [
  { label: 'Galden (Test)' }, { label: 'Steel (Test)' }
]
const Measure = [
  { label: 'Piece' }, { label: 'PCS' }, { label: 'Packet' }, { label: 'Set(s)' }
]
const size = [
  { label: '12"16mm*3mm' }, { label: '96mm' }, { label: '128mm' }, { label: '160mm' },
  { label: '224mm' }, { label: '288mm' }, { label: '10"' }, { label: '12"' }
]

const ModalForm = ({ closeModal }) => {

  return (
    <>
      <div className="modal_bg" style={{ overflowY: "scroll" }}>
        <form>
          <div className="input_name">
            <span>Name: </span>
            <input type="text" name="productName" placeholder="ProductName" className='name_input' />
          </div>

          <div className='category__brand'>
            <div>
              <span>Product Category</span>
            </div>
            <div>
              <Autocomplete
                style={{ marginRight: "10px" }}
                disablePortal
                id="combo-box-demo"
                options={category}
                sx={{ width: 289 }}
                renderInput={(params) => <TextField {...params} label="Category" />}
              />
            </div>

            <div>
              <span> Product Brand</span>
            </div>
            <div>
              <Autocomplete
                style={{ marginRight: "10px" }}
                disablePortal
                id="combo-box-demo"
                options={brand}
                sx={{ width: 270 }}
                renderInput={(params) => <TextField {...params} label="Brand" />}
              />
            </div>
          </div>
          {/* ----------========-=-=----------========-=-=----------========-=-=----------========-=-=----------========-=-= */}

          <div className="colour__size">
            <div>
              <span> Product Colour</span>
            </div>
            <div>
              <Autocomplete
                style={{ marginRight: "10px" }}
                disablePortal
                id="combo-box-demo"
                options={colour}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Colour" />}
              />
            </div>

            <div>
              <span> Product Size</span>
            </div>
            <div>
              <Autocomplete
                style={{ marginRight: "10px" }}
                disablePortal
                id="combo-box-demo"
                options={size}
                sx={{ width: 290 }}
                renderInput={(params) => <TextField {...params} label="Size" />}
              />
            </div>
          </div>
          {/* ----------========-=-=----------========-=-=----------========-=-=----------========-=-=----------========-=-= */}

          <div className="measure__mrp">
            <div>
              <span>Unit of Measure</span>
            </div>
            <div>
              <Autocomplete
                style={{ marginRight: "10px" }}
                disablePortal
                id="combo-box-demo"
                options={Measure}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Unit of Measure" />}
              />

            </div>
            <div className='input_mrp'>
              <span>MRP</span>
              <input type="number" name='ProductPrice' placeholder='Product MRP' className='mrp_input' />
            </div>
          </div>

          <div className='Reward_Poin_input'>
            <span>Reward Point</span>
            <input type="number" name='ProductPrice' placeholder='Reward Point' className='reward_input' />
          </div>





          
          <div className="dec_editor">
             <label>
               Description: 
             </label>
            <Editor />
           </div> 


          <div className="drag_drop_container">
            <Drag_Drop />
          </div>


          <div>
            <span>Product variants:</span>
            <button type='button'>ADD variant</button>
          </div>

          <div>
            <button>save</button>
            <button>Delete</button>
          </div>

        </form>
      </div>

      <div className='cencel_btn'>
        <Tooltip title="Delete">
          <IconButton>
            <MdDeleteSweep onClick={() => closeModal(false)} />
          </IconButton>
        </Tooltip>
      </div>
      <button onClick={() => closeModal(false)} id='cancelBtn'>Cancel</button>
    </>
  )
}

export default ModalForm
