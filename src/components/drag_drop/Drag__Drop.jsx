
import React, { useState } from 'react'
import { FaFile } from 'react-icons/fa'
import { IoMdCloudUpload } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

const Drag_Drop = () => {
  const [img, setImg] = useState(null)
  const [fileName, setFileName] = useState("No selected file")

  return (
    <div>
      <div className='drag_drop image' onClick={() => document.querySelector(".image_input").click()}>
        <span>Product image:</span>
        <input type="file" accept='image/*' className='input_file image_input' hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name)
            if (files) {
              setImg(URL.createObjectURL(files[0]))
            }
          }}
        />
        {img ? <img src={img} width={150} height={100} alt='fileName' /> : < IoMdCloudUpload color='rgb(144, 155, 237)' size={60} />}
        <p>Browse  Files to upload</p>
      </div>

      <section className='uploaded'>
        <FaFile color='rgb(144, 155, 237)' size={20} />
        <span className='upload_span'>
          {fileName} -
          <MdDelete onClick={() => {
            setImg(null)
            setFileName("No sellected file")

          }} />
        </span>
      </section>

      <div className='drag_drop gallery' onClick={() => document.querySelector(".gallery_input").click()}>
        <span>Product Gallery Images:</span>
        <input type="file" accept='image/*' className='input_file gallery_input' hidden 
        onChange={({ target: { files } }) => {
          files[0] && setFileName(files[0].name)
          if (files) {
            setImg(URL.createObjectURL(files[0]))
          }
        }}
        />
        {img ? <img src={img} width={60} height={60} alt='fileName' /> : < IoMdCloudUpload color='rgb(144, 155, 237)' size={60} />}
        <p>Browse  Files to upload</p>
      </div>

      <section className='uploaded'>
        <FaFile color='rgb(144, 155, 237)' size={20} />
        <span className='upload_span'>
          {fileName} -
          <MdDelete onClick={() => {
            setFileName("No sellected file")
            setImg(null)
          }} />
        </span>
      </section>
    </div>
  )
}

export default Drag_Drop
