import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { FaSearch } from 'react-icons/fa'
import ProductListModal from '../AllModalForm/ProductListModal/ProductListModal'

const ProductList = () => {
  const[openProductListModal, setOpenProductListModal]= useState(false)
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='list_main_container'>
        <div className='list_header'>
          <h1>Product List</h1>
          <button className='btn' onClick={()=>{setOpenProductListModal(true)}}> + ADD LIST</button>
        </div>

        <div className='input_container'>
          <input type="text" placeholder=' Search list header data' />
          <i><FaSearch /></i>
        </div>
      </div>
      
      {openProductListModal && <ProductListModal closeopenProductListModal={setOpenProductListModal}/>}
    </>

  )
}

export default ProductList
