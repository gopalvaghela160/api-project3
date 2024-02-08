import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './product.css';

import { FaShoppingCart } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";


function Product() {
    let [data, setdata] = useState('');
    let { id } = useParams();
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                
                console.log(error);
            })
            .finally(function () {
            
            });
    }, []);
    return (
        <Container>
            <Row className='d-flex mt-3'>
                <Col className='l-img d-flex flex-column' lg={2}>
                    <img src={'https://cdn.dummyjson.com/product-images/1/1.jpg'}></img>
                    <img src={'https://cdn.dummyjson.com/product-images/1/2.jpg'}></img>
                    <img src={'https://cdn.dummyjson.com/product-images/1/3.jpg'}></img>
                    <img src={'https://cdn.dummyjson.com/product-images/1/4.jpg'}></img>
                    <img src={'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'}></img>
                </Col>
                <Col className='main-img d-flex flex-column'>
                    <div className='d-flex align-items-center  justify-content-center'>
                        <img src={data.thumbnail}></img>
                    </div>
                    <div className='m-auto'>
                        <div className='mt-3 ms-3 d-flex'>
                            <button type="button" class="btn btn-primary fw-bold text-white px-5 py-3 me-3 d-flex"><FaShoppingCart   />GO TO CART</button>
                            <button type="button" class="btn btn-warning fw-bold text-white px-5 py-3 d-flex"><GiElectric />BUY NOW</button>
                        </div>
                    </div>
                </Col>
                <Col>


                    <ul>
                        <li>{data.id}</li>
                        <li>{data.title}</li>
                        <li>{data.description}</li>
                        <li>{data.price}</li>
                        <li>{data.discountPercentage}</li>
                        <li>{data.rating}</li>
                        <li>{data.stock}</li>
                        <li>{data.brand}</li>
                        <li>{data.category}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Product;