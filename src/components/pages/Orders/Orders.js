import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { UserContext } from '../../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[showOrder, setShowOrder] = useState([]);
    useEffect(()=>{
        fetch("https://quick-e-shop.herokuapp.com/showorder?email=" + loggedInUser.email)
        .then((res) => res.json())
        .then((data) => setShowOrder(data));
    },[loggedInUser.email])
    console.log(showOrder);
    return (
        <Container>
        <h2 className='text-center font-monospace fw-bolder py-4'>Your Order</h2>
        <div className="checkoutTable">
        <Table striped borderless hover>
            <thead>
                <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                </tr>
            </thead>
           <tbody>
                {
                    showOrder.map((order)=>(
                        <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{
                      order? 'Pending' : ''
                    }</td>
                </tr>
                    ))
                }
            </tbody> 
          
       </Table>
       {
          showOrder.length === 0 && <div>Your Order cart is Empty</div> 
       }
        </div>
    </Container>
    );
};

export default Orders;