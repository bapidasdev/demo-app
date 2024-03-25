import React, { useEffect, useState } from 'react'
import './ModalForm.css'
import { MdDeleteSweep } from "react-icons/md";
import { Autocomplete, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Tooltip } from '@mui/material';

import Editor from '../editor/Editor';
import Drag_Drop from '../drag_drop/Drag__Drop';
import Drag__Drop2 from '../drag_drop/Drag__Drop2';
// import ModalNewForm from '../newmodalform/ModalNewForm';

import { MdDelete } from "react-icons/md";


const ModalForm = ({ closeModal }) => {

  const [selectedCategory, setSelectedCategory] = useState('');

  const [category, setCategory] = useState([]);
  const [brand, setbrand] = useState([]);
  const [colour, setColour] = useState([]);
  const [size, setSize] = useState([]);
  const [uom, setUom] = useState([])
  
  // -----------category api---------------------------------------

  useEffect(() => {
    fetch('https://pvrd-backend.vercel.app/api/v1/categories/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setCategory(data);
      });
  }, []);
  // -----------brand api---------------------------------------
 
  useEffect(() => {
    fetch('https://pvrd-backend.vercel.app/api/v1/brands/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setbrand(data);
      });
  }, []);
  // -----------colour api---------------------------------------
  
  useEffect(() => {
    fetch('https://pvrd-backend.vercel.app/api/v1/colours/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setColour(data);
      });
  }, []);
  // -----------size api---------------------------------------

  useEffect(() => {
    fetch('https://pvrd-backend.vercel.app/api/v1/sizes/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setSize(data)
      })
  }, []);
  // -----------UOM api---------------------------------------
  useEffect(() => {
    fetch('https://pvrd-backend.vercel.app/api/v1/uoms/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setUom(data)
      })
  }, []);


  const [openNewModal, setOpenNewModal] = useState(false)



  // const [selectLabel, setSelectLabel] = useState([])

  // const handleValue=(e)=>{
  //   const value = e.target.value;
  //   // setSelectValue(value)
  //   setSelectValue(
  //     (selectValue && selectValue.length)===(category.length)?[]:setCategory
  //   );return;


  // }

  //_______________________________________new changer________________+*********************************************************-------------------

  const [productVariants, setProductVariants] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddVariant = (e) => {
    e.preventDefault();
    setProductVariants([...productVariants, { colour: '', size: '', uom: '', price: '', packingUnit: '', rewardPoint: '' }])
  }

  const handleVariantChange = (value, key, index) => {
    let tempProductVariants = [...productVariants];
    tempProductVariants[index][key] = value;
    setProductVariants(tempProductVariants);
  }

  const handleDeleteVariant = (index) => {
    let tempProductVariants = [...productVariants];
    tempProductVariants = tempProductVariants.filter((variant, i) => {
      return i != index;
    });
    setProductVariants(tempProductVariants);
  }
  // _________________________________________________new chamge______+*********************************************************-------------------
  return (
    
    <>
      <div style={{ overflowY: "scroll" }}>
        <div className="modal_bg" style={{ overflowY: "scroll" }}>
          <form>
            <div className="input_name">
              <span>Name: </span>
              <input type="text" name="productName" placeholder="ProductName" className='name_input' />
            </div>

            <div className='category__brand'>
              <div>
                <span>Product Category</span>

              </div>
              <div>

                <FormControl>
                  <InputLabel id="category-select">Product Category</InputLabel>
                  <Select
                    style={{ width: '289px', height: '50px' }}
                    labelId="category-select"
                    id="select"
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                  {category.map((item, index) => (<MenuItem key={index} value={item.value}>{item.name}</MenuItem>))}
                  </Select>
                </FormControl>

              </div>

              <div>
                <span> Product Brand</span>
              </div>
              <div>
                <FormControl>
                  <InputLabel id="category-select">Product Brand</InputLabel>
                  <Select
                    style={{ width: '289px', height: '50px' }}
                    labelId="category-select"
                    id="select"
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => setSelectedCategory(e.target.value)}

                  >
                    
                    {brand.map((item, index) => (<MenuItem key={index} value={item.value}>{item.name}</MenuItem>))}
                    
                  </Select>
                </FormControl>

              </div>
            </div>
            {/* ----------========-=-=----------========-=-=----------========-=-=----------========-=-=----------========-=-= */}

            <div className="colour__size">
              <div>
                <span> Product Colour</span>
              </div>
              <div>
                <FormControl>
                  <InputLabel id="category-select">Product Colour</InputLabel>
                  <Select
                    style={{ width: '289px', height: '50px' }}
                    labelId="category-select"
                    id="select"
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => setSelectedCategory(e.target.value)}

                  >
                    {colour?.map((item, index) => (<MenuItem key={index} value={item.value}>{item.name}</MenuItem>))}
                  </Select>
                </FormControl>
              </div>

              <div>
                <span> Product Size</span>
              </div>
              <div>
                <FormControl>
                  <InputLabel id="category-select">Product Size</InputLabel>
                  <Select
                    style={{ width: '289px', height: '50px' }}
                    labelId="category-select"
                    id="select"
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => setSelectedCategory(e.target.value)}

                  >
                    {size?.map((item, index) => (<MenuItem key={index} value={item.value}>{item.name}</MenuItem>))}
                  </Select>
                </FormControl>
              </div>
            </div>
            {/* ----------========-=-=----------========-=-=----------========-=-=----------========-=-=----------========-=-= */}

            <div className="measure__mrp">
              <div>
                <span>Unit of Measure</span>
              </div>
              <div>
                <FormControl>
                  <InputLabel id="category-select">Unit of Measure</InputLabel>
                  <Select
                    style={{ width: '289px', height: '50px' }}
                    labelId="category-select"
                    id="select"
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {uom?.map((item, index) => (<MenuItem key={index} value={item.value}>{item.name}</MenuItem>))}
                  </Select>
                </FormControl>

              </div>
              <div className='input_mrp'>
                <span>MRP</span>
                <input type="number" name='ProductPrice' placeholder='Product MRP' className='mrp_input' />
              </div>
            </div>

            <div className='Reward_Poin_input'>
              <span>Reward Point</span>
              <input type="number" name='ProductPrice' placeholder='Reward Point' className='reward_input' />
            </div>

            <div className="dec_editor">

              <Editor />
            </div>


            <div style={{ marginTop: '20px' }} className="drag_drop_container">
              <Drag_Drop />
            </div>

            <div className="drag_drop_container">
              <Drag__Drop2 />
            </div>




            <div className='newModalOpen'>
              {/* <span>Product variants:</span>
            <button type='button' onClick={() => { setOpenNewModal(true) }} className='newModalOpenBtn'>ADD variant</button>
            {openNewModal && <ModalNewForm closeNewModal={setOpenNewModal} />} */}


              {/* _______________________________________________________+*********new change************************************************------------------- */}
              <button
                type="button"
                disabled={loading}
                onClick={(e) => handleAddVariant(e)}
                className='newModalOpenBtn'
              >Add variant</button>

              {productVariants?.map((variant, index) => {

                return (
                  <div key={index} className='addInput'
                  // className='addInput' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px',  }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div className='input_div'>
                        <div className='addInputBox'>
                          <span>Colour:</span>
                          <input type='text' name='colour' placeholder='Colour'
                            value={productVariants[index].colour} onChange={(e) => { handleVariantChange(e.target.value, 'colour', index) }} />
                        </div>

                        <div className='addInputBox'>
                          <span>Size:</span>
                          <input type='text' name='size' placeholder='Size'
                            value={productVariants[index].size} onChange={(e) => { handleVariantChange(e.target.value, 'size', index) }} />
                        </div>

                        <div className='addInputBox'>
                          <span>UOM</span>
                          <input type='text' name='uom' placeholder='Unit of Measurement'
                            value={productVariants[index].uom} onChange={(e) => { handleVariantChange(e.target.value, 'uom', index) }} />
                        </div>

                        <div className='addInputBox'>
                          <span>Price:</span>
                          <input required={true} type='number' name='price' placeholder='Price'
                            value={productVariants[index].price} onChange={(e) => { handleVariantChange(e.target.value, 'price', index) }} />
                        </div>

                        <div className='addInputBox'>
                          <span>Packing:</span>
                          <input type='number' name='packingUnit' placeholder='Packing Unit'
                            value={productVariants[index].packingUnit} onChange={(e) => { handleVariantChange(e.target.value, 'packingUnit', index) }} />
                        </div>

                        <div className='addInputBox'>
                          <span>Reward</span>
                          <input type='number' name='rewardPoint' placeholder='Reward Point'
                            value={productVariants[index].rewardPoint} onChange={(e) => { handleVariantChange(e.target.value, 'rewardPoint', index) }} />
                        </div>
                      </div>

                      <div className='button_div'>
                        <button className='delete_icon'><MdDelete className='AddvaDelete' onClick={(e) => { handleDeleteVariant(index) }} />
                        </button>
                      </div>
                    </div>


                  </div>
                )
              })}
              {/* ______________________________________________________+****************new change*****************************************--------
            ----------- */}
            </div>
            <button className='savebtn'>Save</button>

          </form>


        </div>



        <div className='cencel_btn'>
          <Tooltip title="Delete">
            <IconButton>
              <MdDeleteSweep onClick={() => closeModal(false)} />
            </IconButton>
          </Tooltip>
        </div>
      </div>

    </>
  )
}

export default ModalForm
