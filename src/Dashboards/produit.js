
import React, { useEffect,useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from '../configuration/axiosconfig';
import { useNavigate } from 'react-router-dom';


function ResponsiveProduit() {

const [Loading, setLoading] = useState(true);
const [produit, setProduit] = useState([]);
 const navigate = useNavigate();
  useEffect (() => { 
        const token=localStorage.getItem('token');
      setLoading(true);
        axios.get('/products',{
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            setProduit(response.data);
            console.log(response.data);
            setLoading(false);
        }).catch((error) => {
            console.error('Error fetching Product data:', error);
        }
        );
        
    },[]);
  return (
    <div>
      {produit.length === 0 ?(<h1> Produit not found :D !! </h1>):(
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {produit.map((index) => (
            <th key={index}>Produit Name</th>
            
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({length :12}).map((_, index) => (
            <td key={index}>Category {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Prix {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Stock {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>)
        }
       
        <button className="btn btn-primary" onClick={() => navigate('/addProduct')}>
          Ajouter un produit
        </button>
      </div>
  );
}
export default ResponsiveProduit;