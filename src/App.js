
import Signap from './components/Signap'
import Login from './components/login';
import Profile from './components/profile';
import Dashboard from './components/dashboard';
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { useState } from 'react';
import ResponsiveProduit from './Dashboards/produit'; 
import Addproduct from './components/addproduct';


function App() {
  const storedtoken = localStorage.getItem('token');
  const [token, setToken] = useState(null);
  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<Signap />} />
        <Route path="/login" element={<Login setToken={setToken}/>} />
        <Route path='/*' element={<Navigate to="/login" />} />
      </Routes>
    );
  }
  if (token) {
    return (
      <Routes>
        <Route path="/produit" element={<ResponsiveProduit />} />
        <Route  path="/addProduct" element={<Addproduct />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/*' element={<Navigate to="/produit" />} />
        
      </Routes>
    );
  }
} 
export default App;