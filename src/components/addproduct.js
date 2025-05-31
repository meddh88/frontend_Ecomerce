

import React from 'react';
import { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import axiosInstance from '../configuration/axiosconfig';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function Addproduct() {
   
    const [data, setData] = useState({
        name: '',
        description: '',
        price: ''
    });
    const [error, setError] = useState({});
    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
    const handleSubmit = async (e) => {
        const token = localStorage.getItem('token');
        e.preventDefault();
        console.log("Form submitted with data:", data);
        try {
      const response = await axiosInstance.post('/products', {
            headers: {
              Authorization: `Bearer ${token}`
            },
            data
          });
      console.log(response);
      navigate('/produit');
      toast.success("Product added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Product addition failed. Please try again.");
    }
        
    };



return(
  
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
          name="name" 
          type="text" 
          placeholder="Enter Product name" 
          value={data.name}
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="description:">
          <Form.Label>Description</Form.Label>
          <Form.Control 
          name="description"
          type="text" 
          placeholder="Enter Your Description" 
          value={data.description}
          onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control 
        name="price"
        type="number" 
        placeholder="Enter Price"
        value={data.price}
        onChange={handleChange}
           />
      </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> 

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>  */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default Addproduct;