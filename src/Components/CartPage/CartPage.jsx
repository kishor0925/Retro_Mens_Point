import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calctotal, removeCart, updatequan } from '../../slice/Cartslice'
import Navbar from '../../Home/Navbar/Navbar'
import Footer from '../../Home/Footer/Footer'

const CartPage = () => {

    const { cartItems, totalAmount } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(calctotal());  
    },[dispatch, cartItems])

    return (
        <div>
            <Navbar />

            <div className='container mt-5'>
                <h2 className='mb-4 text-center'>Shopping Cart</h2>

                {cartItems.length === 0 ? (
                    <h4 className="text-center">Your cart is empty</h4>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle text-center">
                            
                            <thead className="table-dark">
                                <tr>
                                    <th style={{ minWidth: "80px" }}>Image</th>
                                    <th style={{ minWidth: "150px" }}>Product</th>
                                    <th>Price</th>
                                    <th style={{ minWidth: "140px" }}>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.id}>
                                        
                                        {/* Image */}
                                        <td>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                width="60"
                                                className="img-fluid rounded"
                                            />
                                        </td>

                                        {/* Product Name */}
                                        <td className="text-start small fw-semibold">
                                            {item.name}
                                        </td>

                                        {/* Price */}
                                        <td className="small">
                                            ₹{item.price}
                                        </td>

                                        {/* Quantity Controls */}
                                        <td>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <button
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() =>
                                                        dispatch(updatequan({ pid: item.id, change: -1 }))
                                                    }
                                                >
                                                    -
                                                </button>

                                                <span className="mx-2 fw-bold">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() =>
                                                        dispatch(updatequan({ pid: item.id, change: 1 }))
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>

                                        {/* Row Total */}
                                        <td className="fw-semibold text-danger">
                                            ₹{item.price * item.quantity}
                                        </td>


                                        <td>
                                            <button className='btn btn-danger'
                                            onClick={() => dispatch(removeCart(item.id))}
                                            >
                                            Remove cart
                                            </button>
                                        </td>

                                    </tr>
                                ))}

                                <tr>
                                    <td colSpan="4" className="text-end fw-bold">
                                        Grand Total:
                                    </td>
                                    <td className="fw-bold text-success">
                                        ₹{totalAmount} 
                                        <button className='btn btn-danger m-2'>
                                            Buynow
                                        </button>
                                    </td>
                                </tr> 

                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default CartPage