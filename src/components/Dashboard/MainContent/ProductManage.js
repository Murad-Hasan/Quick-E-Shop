import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";
import './ProductManage.css'

const ProductManage = () => {
    const [products, setProducts] = useState([])
    async function getProduct() {
        try {
          const response = await axios.get('https://quick-e-shop.herokuapp.com/products');
          setProducts(response.data)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() =>{
        getProduct()
      },[])

      const deleteBook = (id) =>{
        fetch(`https://quick-e-shop.herokuapp.com/delete/${id}`,{
            method: "DELETE"
        })
        .then(res => {
          // console.log("response",res);
        })
        .catch((error) => {
          console.log('error massage',error);
      })
      setProducts(products.filter(product => product._id !== id))
       }
    console.log(products);
    return (
        <div>
            <div className="manage__header px-4">
                 <h2>Manage Your Product</h2>
            </div>
            <div className="content__table">
            <Table striped borderless hover>
            <thead>
                <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th className='text-center'>Action</th>
                </tr>
            </thead>
          <tbody>
              {
                  products.map((product)=>(
                      <tr key={product._id}>
                          <td>{product.name}</td>
                          <td>{product.catagory}</td>
                          <td>{product.price}</td>
                          <td  className='text-center'> <span onClick={() => deleteBook(product._id)} style={{cursor:'pointer'}}><BsFillTrashFill/></span></td>
                      </tr>
                  ))
              }
          </tbody>
       </Table>
            </div>
        </div>
    );
};

export default ProductManage;