import React, {useState} from 'react'
import Navbar from '../components/Navbar'

import '../stylesPages/ListManagement.css'
import { FaSearch } from 'react-icons/fa'
import ModalForm from '../components/modalform/ModalForm'



const ListManagement = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='list_main_container'>
        <div className='list_header'>
          <h1>List Search</h1>
          <button className='btn' onClick={()=> {setOpenModal(true)}}> + ADD LIST</button>
        </div>
        
          <div className='input_container'>
            <input type="text" placeholder=' Search list header data'/>
            <i><FaSearch /></i>
          </div>
      </div>
      {openModal && <ModalForm  closeModal={setOpenModal}/>}
    </>
  )
}

export default ListManagement
