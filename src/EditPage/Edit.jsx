import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Footer from '../Home/Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const { id } = useParams();
  const navigate =  useNavigate();

  const [product, setProducts] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5444/getdata/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [id]);

  function handleUpload(event){
    event.preventDefault();
    const form = event.target;


    const brand = form.brand.value.trim();
    const title = form.title.value.trim();
    const name = form.name.value.trim();
    const image = form.img.value.trim();
    const rating = form.rating.value.trim();
    const ratingCount = form.ratingcount.value.trim();
    const oldPrice = form.oldprice.value.trim();
    const price = form.price.value.trim();
    const discount = form.discount.value.trim();
    const expressDelivery = form.expressdelivery.value.trim();
    const category = form.category.value.toLowerCase().trim();
    const isTrending = form.isTrending.checked;
    const isNewArrival = form.isNewArrival.checked;


    if (!brand) {
      alert("Brand is required");
      return;
    }

    if (!title) {
      alert("Title is required ");
      return;
    }

    if (!name) {
      alert("Name is required ");
      return;
    }

    if (!image) {
      alert("Image URL is required");
      return;
    }

    if (!image.startsWith("http")) {
      alert("Enter valid image URL ");
      return;
    }

    if (!rating || rating < 0 || rating > 5) {
      alert("Rating must be between 0 - 5 ");
      return;
    }

    if (!ratingCount || ratingCount < 0) {
      alert("Rating Count must be valid ");
      return;
    }

    if (!oldPrice || oldPrice <= 0) {
      alert("Old Price must be greater than 0 ");
      return;
    }

    if (!price || price <= 0) {
      alert("Price must be greater than 0 ");
      return;
    }

    if (Number(price) > Number(oldPrice)) {
      alert("Price cannot be greater than Old Price ");
      return;
    }

    if (!discount || discount < 0 || discount > 100) {
      alert("Discount must be between 0 - 100 ");
      return;
    }

    if (expressDelivery !== "true" && expressDelivery !== "false") {
      alert("Express Delivery must be true or false ");
      return;
    }

    const data = {
      brand,
      title,
      name,
      image,
      rating: Number(rating),
      ratingCount: Number(ratingCount),
      oldPrice: Number(oldPrice),
      price: Number(price),
      discount: Number(discount),
      expressDelivery: expressDelivery === "true",
      category,
      isTrending,
      isNewArrival,
    };


    fetch(`http://localhost:5444/editdata/${id}`, {
      method : 'PATCH',
      headers : {
        'Content-Type' : 'application/json '
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      navigate('/view')
      form.reset();
    })
    .catch(err => console.log(err))


  }
  return (
    <>
      <Navbar />
      <div className="form-container">
        <form className="product-form" onSubmit={handleUpload}>
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
                defaultChecked={product.isTrending  ? 'true' : 'false'}
                name="isTrending"
              />
              Trending
            </label>

            <label>
              <input
                type="checkbox"
                defaultChecked={product.isNewArrival ? 'true' : 'false'}
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