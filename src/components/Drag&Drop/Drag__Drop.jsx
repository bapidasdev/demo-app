
import React, { useState } from 'react'
import { FaFile } from 'react-icons/fa'
import { IoMdCloudUpload } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

import './Drag_Drop.css'

const Drag_Drop = () => {
  const [img, setImg] = useState(null)
  const [fileName, setFileName] = useState("No selected file")

  return (
    <div style={{ display: 'flex' }}>
      <div className='drag_drop image' onClick={() => document.querySelector(".image_input").click()}>
        <span >Product image:</span>
        <input type="file" accept='image/*' className='input_file image_input' hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name)
            if (files) {
              setImg(URL.createObjectURL(files[0]))
            }
          }}
        />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '2', }}>
            {img ? <img src={img} width={250} height={150} alt='fileName' /> : < IoMdCloudUpload color='rgb(144, 155, 237)' size={60} />}
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
          </div>
        </div>
        {/* < IoMdCloudUpload color='rgb(144, 155, 237)' size={60} /> */}
        <p>Browse  Files to upload</p>
      </div>
      {img && <div className='delete_div'>
        <span className='upload_span'>
          <MdDelete className='delete' onClick={() => {
            setImg(null)
            setFileName("No sellected file")
          }} />
        </span>
      </div>}
    </div>
  )
}

export default Drag_Drop
