import React, {useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import { FaSearch } from 'react-icons/fa'
import SizeModal from '../AllModalForm/SizeModal/SizeModal'

const Size = () => {
  const [openSizeModal, setOpenSizeModal] = useState(false)
  return (
    <>
    <div>
      <Navbar />
    </div>

    <div className='list_main_container'>
        <div className='list_header'>
          <h1>Size</h1>
          <button className='btn' onClick={() => { setOpenSizeModal(true) }}> + ADD LIST</button>
        </div>

        <div className='input_container'>
          <input type="text" placeholder=' Search list header data' />
          <i><FaSearch /></i>
        </div>
      </div>
      {openSizeModal && <SizeModal closeSizeModal={setOpenSizeModal}/>}
    </>
    
  )
}

export default Size
