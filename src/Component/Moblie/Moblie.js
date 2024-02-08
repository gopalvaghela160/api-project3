import React, { useEffect, useState } from 'react'
import './moblie.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addcart } from '../../App/Counter/CounterSlice';
function Moblie() {

  let [data, setdata] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {

        console.log(response.data.products);
        setdata(response.data.products);
      })
      .catch(function (error) {

        console.log(error);
      })
      .finally(function () {

      });
  }, [])
  return (
    <>
      <Container fluid>
        <Row>
          {
            data.map((ele, ind) => {
              return (
                <Col key={ind} lg={4} className="mb-3">
                    <div>
                      <Link to={`/product/${ele.id}`}>
                        <Card className="shadow-sm" >
                          <div className='M-img'>
                            <Card.Img variant="top" className='M-box' src={ele.thumbnail} />

                          </div>
                          <Card.Body className='M-text'>
                            <b>
                              <Card.Title className='text-primary '>{ele.title}</Card.Title>
                              <Card.Title>{ele.category}</Card.Title>
                              <Card.Title>{ele.rating}</Card.Title>
                              <Card.Text>
                                {ele.price}
                              </Card.Text>
                            </b>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                    <div>
                      <Card.Body className='M-text'>

                        <Button variant="primary" onClick={() => { dispatch(addcart(ele)) }}>Buy</Button>
                      </Card.Body>

                    </div>

                </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default Moblie;