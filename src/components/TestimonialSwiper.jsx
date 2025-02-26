import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Deppika",
    review:
      "This was the most amazing travel experience! Everything was well-organized, and I loved the destinations.",
    location: "Paris, France",
    image: "https://www.themoviedb.org/t/p/original/sXgEh0z6NzyvmEeBeLPK1ON7NBY.jpg",
  },
  {
    name: "Shardha",
    review:"Affordable prices, great destinations, and top-notch service. I’ll definitely book again.",
    location: "Bali, Indonesia",
    image: "https://i.pinimg.com/originals/3c/fc/cf/3cfccf5387edfa0bce8b8394b23c4c24.jpg",
  },
  {
    name: "Michael Smith",
    review:
      "Affordable prices, great destinations, and top-notch service. I’ll definitely book again.",
    location: "Tokyo, Japan",
    image: "https://www.hindustantimes.com/ht-img/img/2023/06/21/1600x900/Honey_Singh_1687354695537_1687354695690.jpg",
  },
  {
    name: "Michael Smith",
    review:
      "Affordable prices, great destinations, and top-notch service. I’ll definitely book again.",
    location: "Tokyo, Japan",
    image: "https://th.bing.com/th/id/OIP.sxZ2MJ6C8Xt8LHzQ8RsgtgHaJQ?w=200&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const TestimonialSwiper = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center my-8">Testimonials</h1>
        <p className="text-gray-600 text-center mb-6">
          Discover what our happy travelers have to share about their journeys with us.
        </p>

        {/* Swiper */}
        <Swiper
          className="testimonial-wrapper"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-gray-700 mt-4">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSwiper;
