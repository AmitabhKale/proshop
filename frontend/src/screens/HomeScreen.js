import React, { useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import {listProducts } from '../actions/productActions';
import {useDispatch , useSelector} from 'react-redux';
import Message from '../components/Message'
import Loader from '../components/Loader'

const Homescreen = () => {
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(listProducts())
  },[dispatch])

  // make sure to bring productList  from store.js
  const productList = useSelector(state => state.productList);
  const {loading, error, products} = productList


  return (
    <div>
        <h1>Latest Products</h1>
        {loading ? (
         <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default Homescreen