import React, {useState} from 'react'
import Navbar from '../components/navbar/Navbar'

import '../stylesPages/pages.css'
import { FaSearch } from 'react-icons/fa'
import SubCategoryModal from '../AllModalForm/SubCategoryModal/SubCategoryModal'


const SubCategory = () => {

const [opneSubCategoryModal, setOpenSubCategoryModal] =useState(false)

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='list_main_container'>
        <div className='list_header'>
          <h1>SubCategory</h1>
          <button className='btn' onClick={()=>{setOpenSubCategoryModal(true)}}> + ADD LIST</button>
        </div>
        
          <div className='input_container'>
            <input type="text" placeholder=' Search list header data'/>
            <i><FaSearch /></i>
          </div>
      </div>
      {opneSubCategoryModal && <SubCategoryModal closeSubCategoryModal={setOpenSubCategoryModal}/>}
    </>
  )
}

export default SubCategory
