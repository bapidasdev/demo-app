import React, { useEffect, useState } from 'react'
import './ModalForm.css'

import { FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';

import Editor from '../../components/description/Editor';
import Drag_Drop from '../../components/Drag&Drop/Drag__Drop';
import Drag__Drop2 from '../../components/Drag&Drop/MultiFileUpload';


import { MdDelete } from "react-icons/md";
import { ImCross } from 'react-icons/im';


const ModalForm = ({ closeModal }) => {

  const [selectedCategory, setSelectedCategory] = useState('');

  const [category, setCategory] = useState([]);
  const [brand, setbrand] = useState([]);
  const [colour, setColour] = useState([]);
  const [size, setSize] = useState([]);
  const [uom, setUom] = useState([]);
  const [productVariants, setProductVariants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);


  const getData = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        const res = await Promise.all([
          fetch("https://pvrd-backend.vercel.app/api/v1/categories/"),
          fetch("https://pvrd-backend.vercel.app/api/v1/brands/"),
          fetch("https://pvrd-backend.vercel.app/api/v1/colours/"),
          fetch("https://pvrd-backend.vercel.app/api/v1/sizes/"),
          fetch("https://pvrd-backend.vercel.app/api/v1/uoms/")
        ]);
        const data = await Promise.all(res.map(res => res.json()))
        setIsLoading(false);
        setHasError(false)
        console.log("Data: ",data);
        setCategory(data[0]);
        setbrand(data[1]);
        setColour(data[2]);
        setSize(data[3]);
        setUom(data[4]);
      } catch {
        setIsLoading(false);
        setHasError(true);
        console.log('coming inside catch block')
        //throw Error("Promise failed");
      }

  }

  useEffect(() => {
    getData();
  }, [])


  //_______________________________________new changer________________+*********************************************************-------------------

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

  const getModalStyle = () => {
    let styles = {overflowY: "scroll"};
    if(hasError || isLoading) {
      styles = {...styles,...{display:'flex',justifyContent:'center',alignItems:'center', height:'50vh'}}
    }
    return styles;
  }
  return (

    <>
      <div style={{ overflowY: "scroll" }}>
        <div 
          className="modal_bg"
          style={{...getModalStyle()}}
        >
          {isLoading && (
            <div>
              Loading...
            </div>
          )}
          {hasError && (
            <div>
              Something went wrong, Please try again
            </div>
          )}
          {!isLoading && !hasError && (
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



              {/* _______________________________________________________+*********new change************************************************------------------- */}
              <button
                type="button"
                disabled={isLoading}
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
          )}
        </div>
        <div className='cencel_btn'>
          <Tooltip title="Delete">
            <IconButton>
              <ImCross onClick={() => closeModal(false)} />
            </IconButton>
          </Tooltip>
        </div>
      </div>

    </>
  )
}

export default ModalForm
