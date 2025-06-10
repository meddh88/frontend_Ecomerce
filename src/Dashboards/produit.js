import React, { useEffect,useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from '../configuration/axiosconfig';
import { useNavigate } from 'react-router-dom';
import ModalComponent from '../components/ModalComponent';


function ResponsiveProduit() {
const [Loading, setLoading] = useState(true);
const [produit, setProduit] = useState([]);
const [modal, setModal] = useState(false);

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
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {produit.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price} DT</td>
            <td>
              <button className="btn btn-primary me-2" onClick={() => navigate(`/UpdateProduct/${item._id}`)}>
                Modifier
              </button>

                <button className="btn btn-danger" onClick={() => setModal(true)}>
                   Delete
               </button>
            </td>
            { modal && (<ModalComponent modal={modal} setModal={setModal}/>)}
          </tr>
         
        ))}
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
