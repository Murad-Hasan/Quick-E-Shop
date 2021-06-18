import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../../ProductCard/ProductCard';

const Home = () => {
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
      
    return (
        <main style={{background:'#EFEFE9'}}>
            <Container>
            <form className="input-group w-50 mx-auto py-5">
                <input className="form-control" placeholder="Search" />
                <button type='button' className="btn btn-outline-danger">Search</button>
            </form>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map(product => <ProductCard key={product._id} product={product} />)
                }
            </Row>
            </Container>
        </main>
    );
};

export default Home;