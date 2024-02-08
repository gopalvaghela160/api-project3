import React from 'react'
import { Container , Row ,Col } from 'react-bootstrap';
import Categorise from '../Component/Categorise/Categorise';
import Moblie from '../Component/Moblie/Moblie';

function Home() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col lg={3}><Categorise></Categorise></Col>
                <Col lg={9}><Moblie></Moblie></Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default Home;