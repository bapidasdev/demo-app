import React, {useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import { FaSearch } from 'react-icons/fa'
import ColourModal from '../AllModalForm/ColourModal/ColourModal'

const Colour = () => {
  const [openColourModal, setOpenColourModal] = useState(false)
  return (
    <>
     <div>
      <Navbar/>
    </div>
    <div className='list_main_container'>
        <div className='list_header'>
          <h1>Colour</h1>
          <button className='btn'onClick={() => { setOpenColourModal(true) }}> + ADD LIST</button>
        </div>

        <div className='input_container'>
          <input type="text" placeholder=' Search list header data' />
          <i><FaSearch /></i>
        </div>
      </div>
    {openColourModal && <ColourModal closeColourModal={setOpenColourModal}/>}
    </>
   
  )
}

export default Colour
