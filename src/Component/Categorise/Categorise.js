import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import './categorise.css';
function Categorise() {
    let [data,setdata] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
               
                // console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },[])
    return (
        <div>
            <Container fluid>
                <ul className='c-main'>
                    {
                        data.map((ele,ind)=>{
                          return(
                            <li className='border list-unstyled fw-bold c-menu '><a href=''>{ele}</a></li>
                          );
                        })
                    }
                </ul>
            </Container>
        </div>
    )
}

export default Categorise;