
import { useState} from "react";
import { Form, useLoaderData, useLocation } from "react-router-dom";
import './Editor.css'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
const Editor = () => {
  let isEditMode = false;
  let productData = null;
  const location = useLocation();
  if (location.state?.productData) {
    isEditMode = true;
    productData = location.state.productData;
  }
  const [productDescription, setProductDescription] = useState(isEditMode ? productData?.description : '');
  const clearForm = () => {
    setProductDescription('');
  }
    if (isEditMode) {
      let data = new FormData();
      productDescription !== '' && data.set("description", productDescription); 
    } else {
      let data = new FormData();
      productDescription !== '' && data.set("description", productDescription);
    }

  return (
    <>
      <label >
        <span style={{marginTop:'20px'}}>Description</span>
      </label>
      <div style={{marginTop:'20px'}}>
        <ReactQuill theme="snow" value={productDescription} onChange={setProductDescription} />
      </div>
    </>
  );
}
export default Editor;




