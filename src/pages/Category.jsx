import React, {  useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { FaSearch } from 'react-icons/fa'
import CategoryModal from '../AllModalForm/CategoryModal/CategoryModal'
import { DataGrid } from '@mui/x-data-grid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';


const Category = (deleteRow) => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false)
  const [categoryyy, setCategoryyy] = useState([]);

 const [rowToEdit,setRowToEdit]=useState(null)

  const handleEditRow = ()=>{
    setOpenCategoryModal(true)
  }

  const handleDelete =(id)=>{
    console.log(id + "has been delete")
  }
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'name', headerName: ' Name', width: 200 },
  
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell:params=>{
      return <img src={params.row.image} alt='img'
       style={{width:"40px", height:'40px', borderRadius:'50%', marginTop:'5px', objectFit:'cover'}} />},
      sortable: false,
      filterable:false
    },
    {
      field: 'subCategories',
      headerName: 'SubCategories',
      width: 180,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 160,
      renderCell: (cellValue) => {
        return (
          <FaEdit style={{fontSize:'25px', marginTop:'10px', cursor:'pointer'}}
           onClick={() => { handleEditRow();
             console.log(cellValue) }}
           />
        )
      }
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 160,
      renderCell: (cellValue) => {
        return (
          <MdDelete style={{fontSize:'25px', marginTop:'10px', cursor:'pointer'}} 
          //onClick={console.log("delete button click")}
          onClick={()=>handleDelete(cellValue.row.id)}
          />
        )
      }
    },
  ];
  
  useEffect(() => {
    fetch('https://pvrd-backend.vercel.app/api/v1/categories/')

      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setCategoryyy(data);
      });
  }, []);

  console.log(categoryyy)

  

  return (

    <>
      <div>
        <Navbar />
      </div>

      <div className='list_main_container'>
        <div className='list_header'>
          <h1>Category</h1>
          <button className='btn' onClick={() => { setOpenCategoryModal(true) }}> + ADD LIST</button>
        </div>

        <div className='input_container'>
          <input type="text" placeholder=' Search list header data' />
          <i><FaSearch /></i>
        </div>
      </div>


      <div
       style={{ height: 400, width: '95%', marginTop: '30px', marginLeft:'25px' }}
       >
       
         <DataGrid
          //style={{display:'flex', alignItems:'center', justifyContent:'center'}}
          rows={categoryyy }
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection

          
        />
      </div>


      {openCategoryModal && <CategoryModal closeCategoryModal={setOpenCategoryModal} />}
    </>

  )
}

export default Category
