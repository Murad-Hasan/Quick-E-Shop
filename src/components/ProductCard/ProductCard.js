import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './productCard.css'

const ProductCard = ({product}) => {
    const { _id,image, name, price} = product;
    return (
        <Col>
        <Card className="shadow mb-4" style={{ borderRadius: "20px", border: 0 , height:'500px'}}>
            <div className="d-flex align-items-center p-2" style={{ maxwidth: "300px", height: "300px"}}>
                <Card.Img
                    className="w-100"
                    style={{ objectFit: "contain", maxHeight: "300px" }}
                    variant="top"
                    src={image}
                />
            </div>
            <Card.Body className="pb-0">
                <Card.Title as={"h4"} >{name}</Card.Title>
            </Card.Body>
            <Card.Body className="d-flex justify-content-between align-items-center">
                <Card.Title
                    as={"h2"}
                    className="mb-1"
                    style={{ fontWeight: "600", color: "#FF4B2B"}}>
                    ${price}
                </Card.Title>
                <Button
                    as={Link}
                    to={`/checkout/${_id}`}
                    className="buy-btn shadow-none">
                    Buy Now
                </Button>
            </Card.Body>
        </Card>
    </Col >
    );
};

export default ProductCard;