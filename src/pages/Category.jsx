import React, {  useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { FaSearch } from 'react-icons/fa'
import CategoryModal from '../AllModalForm/CategoryModal/CategoryModal'

import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 200 },
//   { field: 'name', headerName: ' Name', width: 200 },

//   {
//     field: 'image',
//     headerName: 'Image',
//     width: 200,
//     renderCell:params=> <Avatar src={params.row.image} style={{marginTop:'5px', backgroundColor:'white'}} />,
//     sortable: false,
//     filterable:false
//   },
//   {
//     field: 'subCategories',
//     headerName: 'SubCategories',
//     width: 200,

//     // description: 'This column has a value getter and is not sortable.',
//     // sortable: false,
//     // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
//   {
//     field: 'edit',
//     headerName: 'Edit',
//     width: 200,
//     renderCell: (cellValue) => {
//       return (
//         <FaEdit style={{fontSize:'32px', marginTop:'5px'}} onClick={() => { setOpenCategoryModal(true) }}/>
//       )
//     }
//   },
//   {
//     field: 'delete',
//     headerName: 'Delete',
//     width: 200,
//     renderCell: (cellValue) => {
//       return (
//         <MdDelete style={{fontSize:'32px', marginTop:'5px'}} onClick={console.log("delete button click")}/>
//       )
//     }
//   },
// ];

// const rows = [
//   { id: 1, Name: '', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const Category = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false)
  const [categoryyy, setCategoryyy] = useState([]);
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: ' Name', width: 200 },
  
    {
      field: 'image',
      headerName: 'Image',
      width: 200,
      renderCell:params=> <Avatar src={params.row.image} style={{marginTop:'5px', backgroundColor:'white'}} />,
      sortable: false,
      filterable:false
    },
    {
      field: 'subCategories',
      headerName: 'SubCategories',
      width: 200,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 200,
      renderCell: (cellValue) => {
        return (
          <FaEdit style={{fontSize:'25px', marginTop:'10px', cursor:'pointer'}} onClick={() => { setOpenCategoryModal(true) }}/>
        )
      }
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 200,
      renderCell: (cellValue) => {
        return (
          <MdDelete style={{fontSize:'25px', marginTop:'10px', cursor:'pointer'}} onClick={console.log("delete button click")}/>
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


      <div style={{ height: 400, width: '95%', marginTop: '30px', marginLeft:'25px' }}>
        <DataGrid
          //style={{display:'flex', alignItems:'center', justifyContent:'center'}}
          rows={categoryyy}
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
