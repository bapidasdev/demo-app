import React,{useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import { FaSearch } from 'react-icons/fa'
import CategoryModal from '../AllModalForm/CategoryModal/CategoryModal'

const Category = () => {
  const [openCategoryModal, setOpenCategoryModal]= useState(false)
  return (
    <>
     <div>
      <Navbar />
    </div>

    <div className='list_main_container'>
        <div className='list_header'>
          <h1>Category</h1>
          <button className='btn' onClick={()=>{setOpenCategoryModal(true)}}> + ADD LIST</button>
        </div>

        <div className='input_container'>
          <input type="text" placeholder=' Search list header data' />
          <i><FaSearch /></i>
        </div>
      </div>
      {openCategoryModal && <CategoryModal closeCategoryModal={setOpenCategoryModal}/>}
    </>
   
  )
}

export default Category
