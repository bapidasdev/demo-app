import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar.jsx';
import ProductManager from './pages/ProductManager.jsx';
import ProductList from './pages/ProductList.jsx';
import Category from './pages/Category.jsx';
import SubCategory from './pages/SubCategory.jsx';
import Brand from './pages/Brand.jsx';
import Size from './pages/Size.jsx';
import Colour from './pages/Colour.jsx';
import UnitOfMeasure from './pages/UnitOfMeasure.jsx';


function App() {
  return (
    <Router>
      <Sidebar>
      <Routes>
      <Route path='/' element={<ProductManager />} />
      <Route path='/productList' element={<ProductList />} />
      <Route path='/category' element={<Category />} />
      <Route path='/subCategory' element={<SubCategory />} />
      <Route path='/brand' element={<Brand />} />
      <Route path='/size' element={<Size />} />
      <Route path='/colour' element={<Colour />} />
      <Route path='/unitOfMeasure' element={<UnitOfMeasure />} />
      
      </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
