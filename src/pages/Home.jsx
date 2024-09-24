import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductThunk, nextPage, prevPage } from "../redux/slice/productSlice";
import Spinner from 'react-bootstrap/Spinner';

function Home() {

  const { products, error, loading, productsPerPage, currentPage } = useSelector((state) => state.productReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductThunk())
    console.log(products)
  }, [])

  const totalPages = Math.ceil(products?.length / productsPerPage)
  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const visibleProducts = products?.slice(firstProductIndex, lastProductIndex)

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(nextPage())
    }
  }
  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(prevPage())
    }
  }

  return (
    <>
      {/* <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center w-100">
            <Carousel fade>
              <Carousel.Item interval={1000} >
                <img style={{ height: '300px', objectFit: 'cover', width: '100%', borderRadius: '5px' }} src="https://t4.ftcdn.net/jpg/03/83/21/85/360_F_383218557_t5fC98hOdrg0hr4BsulCZ9mPX9a4uube.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img style={{ height: '300px', objectFit: 'cover', width: '100%', borderRadius: '5px' }} src="https://t3.ftcdn.net/jpg/02/62/18/46/360_F_262184611_bXhmboL9oE6k2ILu4qXxNWFhNJCEbTn2.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img style={{ height: '300px', objectFit: 'cover', width: '100%', borderRadius: '5px' }} src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" alt="" />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img style={{ height: '300px', objectFit: 'cover', width: '100%', borderRadius: '5px' }} src="https://cdn.vectorstock.com/i/500p/57/56/template-banner-for-online-store-with-shopping-vector-42935756.jpg" alt="" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </header>
      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            {
              loading ?
                <h3>
                  <Spinner animation="border" role="status">
                  </Spinner>
                  Loading...
                </h3>
                :
                (
                  error ?
                    <h3>{error}</h3>
                    :
                    <>
                      {visibleProducts?.map(item => (

                        <div className="col mb-5">
                          <div className="card h-100">
                            <img className="card-img-top" src={item?.thumbnail} alt="..." />
                            <div className="card-body p-4">
                              <div className="text-center">
                                <h5 className="fw-bolder">{item?.title}</h5>
                                ${item.price}
                              </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              <div className="text-center">
                                <Link to={`/view/${item.id}`} className="btn btn-outline-info">View More ...</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    </>
                )
            }
          </div>
        </div>
      </section>
      <div className="mt-4 d-flex justify-content-center">
        <div className="d-flex align-items-center">
          <button className="btn">
            <i className="fa-solid fa-angles-left" onClick={handlePrev} />
          </button>
          <span className="mx-2">{currentPage} / {totalPages}</span>
          <button className="btn">
            <i className="fa-solid fa-angles-right" onClick={handleNext}/>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;