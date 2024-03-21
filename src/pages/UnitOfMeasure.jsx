import React, {useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import { FaSearch } from 'react-icons/fa'

import UomModal from '../AllModalForm/UOMModal/UomModal'

const UnitOfMeasure = () => {
  const [openUOMModal, setOpenUOMModal] = useState(false)
  return (
    <>
     <div>
      <Navbar />
    </div>

    <div className='list_main_container'>
        <div className='list_header'>
          <h1>Unit Of Measure</h1>
          <button className='btn' onClick={() => { setOpenUOMModal(true) }}> + ADD LIST</button>
        </div>

        <div className='input_container'>
          <input type="text" placeholder=' Search list header data' />
          <i><FaSearch /></i>
        </div>
      </div>
      {openUOMModal && <UomModal closeUomModal={setOpenUOMModal}/>}
    </>

  )
}

export default UnitOfMeasure
