import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const CheckOut = () => {
    const { id } = useParams();
    console.log(id);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [product, setProduct] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/singleProduct/"+ id)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [id]);

    const newOrder = {...product}
    const { name , price } = newOrder;

    const handlePlaceOrder = () => {
        let today = new Date();
        let dateFormate=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
        const confirmOrder = {name, price, ...loggedInUser, date: dateFormate}
        fetch('http://localhost:5000/addorder', {
          method: 'POST' ,
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(confirmOrder)
      })
    .then(res => res.json())
    .then(data => {
        if (data) {
          alert('Order Placed')
        }
    })
    }
    return (
        <Container>
            <h2 className='text-center font-monospace fw-bolder py-4'>Your Cart {product.length}</h2>
            <div className="checkoutTable">
            <Table striped borderless hover>
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                {
                    product.length === 0 ? null : <tbody>
                    <tr>
                    <td>{name}</td>
                    <td>1</td>
                    <td>{price}</td>
                    </tr>
                </tbody> 
                }
           </Table>
           {
              product.length === 0 && <div>Your Cart is Empty</div> 
           }
          {product.length !== 0 && <Link to='/'><button onClick={handlePlaceOrder} className='btn btn-outline-success float-end'>Confirm Order</button></Link>}
            </div>
        </Container>
    );
};

export default CheckOut;