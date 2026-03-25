import React from "react";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";
import "./AddProducts.css";

const AddProducts = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form Submited');
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


    fetch('http://localhost:5444/productupload', {
      method : 'POST',
      headers : {
  'Content-Type' : 'application/json; charset=utf-8' 
},
      body : JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
      alert('Data upload to you DB!..')
      form.reset();
    })
  }

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form className="product-form" onSubmit={handleSubmit}>
          <h2>Add Product</h2>

          <label>Category</label>
          <select name="category">
            <option value="hoodies">Hoodies</option>
            <option value="tshirts">T-Shirts</option>
          </select>

          <label>Brand</label>
          <input type="text" name="brand" />

          <label>Title</label>
          <input type="text" name="title" />

          <label>Name</label>
          <input type="text" name="name" />

          <label>Image URL</label>
          <input type="text" name="img" />

          <label>Rating</label>
          <input type="number" name="rating" />

          <label>Rating Count</label>
          <input type="text" name="ratingcount" />

          <label>Old Price</label>
          <input type="text" name="oldprice" />

          <label>Price</label>
          <input type="text" name="price" />

          <label>Discount</label>
          <input type="text" name="discount" />

          <label>Express Delivery</label>
          <input
            type="text"
            name="expressdelivery"
            placeholder="true / false"
          />

        
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="isTrending" />
              Trending
            </label>

            <label>
              <input type="checkbox" name="isNewArrival" />
              New Arrival
            </label>
          </div>

          <button type="submit">Upload Product</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddProducts;
