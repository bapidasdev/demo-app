import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import ClientLiabilities from './pages/ClientLiabilities.jsx'
import InvoicingReceiption from './pages/InvoicingReceiption.jsx'
import ListManagement from './pages/ListManagement.jsx'
import Reports from './pages/Reports.jsx'
import RuleSet from './pages/RuleSet.jsx'
import RuleSetGroup from './pages/RuleSetGroup.jsx'
import Settings from './pages/Settings.jsx'
import CaseManagement from './pages/CaseManagement.jsx'


import Sidebar from './components/sidebar/Sidebar.jsx';



function App() {
  return (
    <Router>
      <Sidebar>
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/clientLiabilities' element={<ClientLiabilities />} />
      <Route path='/invoicingReceiption' element={<InvoicingReceiption />} />
      <Route path='/listManagement' element={<ListManagement />} />
      <Route path='/reports' element={<Reports />} />
      <Route path='/ruleSet' element={<RuleSet />} />
      <Route path='/ruleSetGroup' element={<RuleSetGroup />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/caseManagement' element={<CaseManagement />} />
      </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
