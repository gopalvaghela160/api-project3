import React from 'react';
import { useSelector } from 'react-redux';
import './cartitem.css';
import { Container } from 'react-bootstrap';
function CartItem() {
    const cartdata = useSelector((state) => state.cart.value);
    console.log(cartdata);
    return (
        <Container>
            {
                cartdata.map((ele, ind) => {
                    return (
                        <div key={ind} className='cart-box'>
                            <div className='d-flex'>
                                <div lg={3}>
                                    <img src={ele.thumbnail}></img>
                                </div>
                                <div className='mt-4'>
                                    <ul width={100} className='cart-text'>
                                        <li className='list-unstyled fw-bold'>Brand := {ele.brand}</li>
                                        <li className='list-unstyled fw-bold'>Name := {ele.title}</li>
                                        <li className='list-unstyled'>Category := {ele.category}</li>
                                        <li className='list-unstyled  fw-bold text-danger'>Price := <span>₹ </span>{ele.price}</li>
                                        <li><button className='btn btn-light'>+</button> {ele.id} <button className='btn btn-light'>-</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div >
                                <span>PRICE DETAILS</span>
                            </div>
                        </div>
                    )
                })
            }
        </Container>
    )
}

export default CartItem;