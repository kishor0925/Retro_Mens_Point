import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import './CustomerReviews.css'
const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Arun Kumar",
      rating: "★★★★★",
      comment: "Quality semma 🔥 Hoodie fit perfect-aa irundhuchu. Definitely worth the price!",
      location: "Chennai"
    },
    {
      id: 2,
      name: "Priya S",
      rating: "★★★★☆",
      comment: "Material romba soft-aa irukku. Delivery fast. Packaging super 👌",
      location: "Coimbatore"
    },
    {
      id: 3,
      name: "Vignesh R",
      rating: "★★★★★",
      comment: "Oversize fit exactly as shown in image. Street style look 🔥",
      location: "Madurai"
    },
    {
      id: 4,
      name: "Sneha",
      rating: "★★★★☆",
      comment: "Colour and print nalla irukku. Slightly heavy but premium feel 😍",
      location: "Bangalore"
    },
    {
      id: 5,
      name: "Karthik",
      rating: "★★★★★",
      comment: "Indha price-ku indha quality romba rare. Totally satisfied 💯",
      location: "Salem"
    },
    {
      id: 6,
      name: "Divya",
      rating: "★★★★☆",
      comment: "Gift-aa vanginen. Friend ku romba pidichirundhuchu 😄",
      location: "Trichy"
    },
    {
      id: 7,
      name: "Sathish",
      rating: "★★★★★",
      comment: "Fabric thick-aa irukku. Winter-ku perfect hoodie ❄️🔥",
      location: "Hyderabad"
    },
    {
      id: 8,
      name: "Nandhini",
      rating: "★★★★☆",
      comment: "Looks exactly like Instagram pics. Trendy and comfy 💕",
      location: "Erode"
    }
  ]

  return (
    <section className="customer-review container">
        
        <h2 className="text-center shpbyctgrheading">Happy Customers, Real Reviews</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        className="review-swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
      >
        {reviews.map(review => (
          <SwiperSlide key={review.id} className="p-5 text-center">
            <div className="review-card">
              <h3 className="review-name">{review.name}</h3>
              <p className="review-stars text-warning">{review.rating}</p>
              <p className="review-comment">“{review.comment}”</p>
              <span className="review-location">{review.location}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default CustomerReview
