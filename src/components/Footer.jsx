import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-dark p-5'>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <h3>ReduxCart</h3>
            <p style={{textAlign:'justify'}}>It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
          </Col>
          <Col sm={6}lg={3} className='text-center'>
          <h3>Links</h3>
          <div className='d-flex flex-column'>
            <Link to={'/wish'}>Wishlist</Link>
            <Link to={'/cart'}>Cart</Link>
          </div>
          </Col>
          <Col sm={6}lg={3} className='text-center'>
          <h3>Reference</h3>
          <div className='d-flex flex-column'>
            <Link to={'https://getbootstrap.com/'}>Bootstrap</Link>
            <Link to={'https://react.dev/'}>React</Link>
          </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
          <h3>Contact Us</h3>
          <p>Submit your email Id, so we can contact you....</p>
          <input type="text" className='form-control' placeholder='Enter Email ID'/>
          <button className='btn border border-1 border-light mt-3'>Send</button>
          </Col>
        </Row>
        <p className='text-center'>ReduxCart 2024 © All rights reserved..</p>
      </div>
    </>
  )
}

export default Footer