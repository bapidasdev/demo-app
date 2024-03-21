import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { FaSearch } from 'react-icons/fa'
import BrandModal from '../AllModalForm/BrandModal/BrandModal'

const Brand = () => {
  const[openBrandModal, setOpenBrandModal]=useState(false)
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='list_main_container'>
        <div className='list_header'>
          <h1>Brand</h1>
          <button className='btn' onClick={()=>setOpenBrandModal(true)}> + ADD LIST</button>
        </div>

        <div className='input_container'>
          <input type="text" placeholder=' Search list header data' />
          <i><FaSearch /></i>
        </div>
      </div>
      {openBrandModal && <BrandModal closeBrandModal={setOpenBrandModal}/>}
    </>

  )
}

export default Brand
