
import Signap from './components/Signap'
import Login from './components/login';
import Profile from './components/profile';
import Dashboard from './components/dashboard';
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { useState,useEffect } from 'react';
import ResponsiveProduit from './Dashboards/produit'; 
import Addproduct from './components/addproduct';
import UpdateProduct from './components/updateProduct';


function App() {
  const storedtoken = localStorage.getItem('token');
  const [token, setToken] = useState(storedtoken || null);
  useEffect(() => {

    if (storedtoken) {
      setToken(storedtoken);
    }
  }, [storedtoken]);
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
        <Route path="/profile" element={<Profile token={token} />} />
        <Route path="/produit" element={<ResponsiveProduit />} />
        <Route  path="/addProduct" element={<Addproduct />} />
        <Route path="/" element={<Dashboard />} />

        <Route path='/produit' element={<ResponsiveProduit/>} />
        <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />

      </Routes>
    );
  }
} 
export default App;