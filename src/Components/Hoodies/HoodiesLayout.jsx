import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../slice/Cartslice';

const HoodiesLayout = ({product}) => {

    const dispatch = useDispatch();
  return (
    <>
          <div className="col-6 col-md-4 col-lg-3 mb-4 mt-4">
                <div className="card h-100  position-relative">
                    <img src={product.image} className="card-img-top"  alt={product.name} />

                    <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                        {product.discount}% OFF
                    </span>

                    <span className="badge bg-white text-dark position-absolute top-0 end-0 m-2">
                        <span className="text-success p-1">★</span>
                        {product.rating} | {product.ratingCount}
                    </span>

                    <div className="card-body  text-center">
                        <h5 className='product-brand'>{product.brand}</h5>
                        <h6 className="card-title fw-bold">{product.title}</h6>
                        <h6 className="card-title">{product.name}</h6>
                        <p className="card-text">
                            <span className="text-decoration-line-through me-2">
                                ₹{product.oldPrice}
                            </span>
                            <span className="fw-bold text-danger">
                                ₹{product.price}
                            </span>
                        </p>
        
                            {product.expressDelivery && (
                                <span className="badge text-dark mb-2 fw-bold">
                                    🚚2 days delivery
                                </span>
                            )}
                        
                        <button
                        className='btn btn-danger'
                        onClick={() => dispatch(addtoCart(product))}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default HoodiesLayout