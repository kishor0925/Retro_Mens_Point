import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Footer from '../Home/Footer/Footer'
import { useParams } from 'react-router-dom'

const Edit = () => {
  const { id } = useParams();

  const [product, setProducts] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5444/getdata/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [id]);
  if (!product || !product._id) return <h2>Loading...</h2>;

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form className="product-form">
          <h2>Update Product</h2>

          <label>Category</label>
          <select name="category" defaultValue={product.category}>
            <option value="hoodies">Hoodies</option>
            <option value="tshirts">T-Shirts</option>
          </select>

          <label>Brand</label>
          <input type="text" defaultValue={product.brand} name='brand' />

          <label>Title</label>
          <input type="text" defaultValue={product.title} name='title' />

          <label>Name</label>
          <input type="text" defaultValue={product.name} name='name' />

          <label>Image URL</label>
          <input type="text" defaultValue={product.image} name='img' />

          <label>Rating</label>
          <input type="number" defaultValue={product.rating} name='rating' />

          <label>Rating Count</label>
          <input type="text" defaultValue={product?.ratingCount} name='ratingcount' />

          <label>Old Price</label>
          <input type="text" defaultValue={product.oldPrice} name='oldprice' />

          <label>Price</label>
          <input type="text" defaultValue={product.price} name='price' />

          <label>Discount</label>
          <input type="text" defaultValue={product.discount} name='discount' />

          <label>Express Delivery</label>
          <input type="text" defaultValue={product.expressDelivery} name='expressdelivery' />

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                defaultChecked={product.isTrending || false}
                name="isTrending"
              />
              Trending
            </label>

            <label>
              <input
                type="checkbox"
                defaultChecked={product.isNewArrival || false}
                name='isNewArrival'
              />
              New Arrival
            </label>
          </div>

          <button type="submit">Update Product</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Edit