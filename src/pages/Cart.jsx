import React from 'react'
import '../styles/cart.css';
import Helmet from '../Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import tdImg from '../assets/images/arm-chair-01.jpg';
import {motion} from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)

  return (
    <Helmet title="Cart">
        <CommonSection title='Shopping Cart'/>
        <section>
            <Container>
                <Row>
                    <Col lg='9'>    
                    {cartItems.length === 0 ? ( 
                      <h2 className='fs-4 text-center '>No item added to the cart</h2> 
                       ) : (
                      <table className='table bordered'>
                      <thead>
                          <tr>
                              <th>Image</th>
                              <th>Title</th>
                              <th>Price</th>
                              <th>Qty</th>
                              <motion.th whileTap={{scale:1.2}}>Delete</motion.th>
                          </tr>
                      </thead>

                      <tbody>
                          
                      </tbody>
                      {
                        cartItems.map((item, index) =>(
                            <tr>
                             <td><img src={item.image} alt="" /></td>
                             <td>{item.productName}</td>
                             <td>${item.price}</td>
                             <td>{item.quantity}px</td>
                             <td>
                                  <i class="ri-delete-bin-line"></i>
                             </td>
                          </tr>
                        ))
                      }
                  </table>
                    )}                    
                      
                    </Col>

                    <Col lg='3'></Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default Cart;