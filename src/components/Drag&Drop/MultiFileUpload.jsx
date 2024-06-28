
import React, { useRef, useState } from 'react'
import { FaFile } from 'react-icons/fa'
import { IoMdCloudUpload } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

const Drag_Drop = () => {
  const [img, setImg] = useState(null)
  const [fileName, setFileName] = useState("No selected file")


  const [productGalleryImages, setProductGalleryImages] = useState(null);
  const [productGalleryImagesURL, setProductGalleryImagesURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const productGalleryImageRef = useRef(null);

  const handleProductGalleryImage = (e) => {
    setProductGalleryImages(e.target.files);
    let tempURLs = [];
    for (let i = 0; i < e.target.files.length; i++) {
      tempURLs.push(URL.createObjectURL(e.target.files[i]));
    }
    setProductGalleryImagesURL(tempURLs);
  }

  const handleRemoveProductGalleryImage = () => {
    setProductGalleryImagesURL(null);
    setProductGalleryImages('');
    productGalleryImageRef.current.value = "";
  }

  return (
    <div style={{ display: 'flex' }}>
      
      <div className='drag_drop gallery' style={{ marginTop: '20px' }} onClick={() => document.querySelector(".gallery_inputtt").click()}>
        <span style={{ marginRight: '5px' }}>Product Gallery Images: </span>
        <input ref={productGalleryImageRef} onChange={e => handleProductGalleryImage(e)} type='file' name='productGallaryImage'
          multiple hidden className='input_file gallery_inputtt' />

        
        <div style={{ display: 'flex', flexWrap: 'wrap', overflow: 'scroll', marginLeft: '10px', columnGap: '10px', rowGap: '10px' }}>
          {productGalleryImagesURL && (productGalleryImagesURL.map(image => {
            return (

              <img className='multiple_img' src={image} height={60} width={60} />

            )
          }))}
        </div>
        <p>Browse  Files to upload</p>
      </div>
      {productGalleryImagesURL && (<button style={{ marginLeft: '10px' }}
        className='mulImgDelete' type="button" onClick={handleRemoveProductGalleryImage} disabled={loading}>
        <MdDelete className='mdDelete' />
      </button>)}

    </div>
  )
}

export default Drag_Drop
