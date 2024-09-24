import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchWithKey } from '../redux/slice/productSlice';

function Header() {


  const { items } = useSelector((state) => state.wishReducer)
  const { cart } = useSelector((state) => state.cartReducer)

  const [key,setKey] = useState('')

  const dispatch = useDispatch()


  return (
    <>
      <Navbar className='bg-primary'>
        <Container>
          <Navbar.Brand href="#home" className='text-white'>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
              <i className="fa-solid fa-cart-shopping fa-xl me-2" style={{ color: '#74C0FC' }}></i>
              {' '}
              E-Kart
            </Link>
          </Navbar.Brand>
          <div className='d-flex'>
            <div className='d-flex me-5'>
              <input type="text" onChange={(e)=>setKey(e.target.value)} className='form-control' placeholder='Search for products' />
              <button className='btn btn-outline-warning' onClick={()=>dispatch(searchWithKey(key))}>Search</button>
            </div>
            <Link className='btn border border-1 border-light me-3' to={'/wish'}>
              <i className="fa-solid fa-heart me-2" style={{ color: "#B197FC", }} />
              WishList <span className='text-warning badge bg-dark'>{items?.length}</span>
            </Link>
            <Link className='btn border border-1 border-light me-3' to={'/cart'}>
              <i className="fa-solid fa-cart-shopping me-2" style={{ color: "#63E6BE", }} />
              Cart <span className='text-warning badge bg-dark'>{cart?.length}</span>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header