import React from "react";
import "./Home.css";
import "./Testimonial.css";
import firstImg from "../testi_img/firstimg.jpeg";
import priya from "../testi_img/priya.png";
import salman from "../testi_img/salman.jpg";
import lady from "../testi_img/lady.jpg";
import krish from "../testi_img/krish.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  return (
    <section className="testimonials">
      <h4>Testimonials</h4>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        modules={[Autoplay]} 
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="testimonial-container"
      >
        <SwiperSlide>
          <div className="testimonial-container-item">
            <img src={firstImg} alt="Rahul" />
            <h5>★★★★☆</h5>
            <div>Rahul</div>
            <p>
              "Little Lemon is a hidden gem! Their Lemon Herb Grilled Chicken
              was perfectly cooked and bursting with flavors."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-container-item">
            <img src={lady} alt="Priya" />
            <h5>★★★★☆</h5>
            <div>Priya</div>
            <p>
              "I loved how the staff checked on us multiple times to ensure
              everything was perfect. Highly recommend!"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-container-item">
            <img src={salman} alt="Ajay" />
            <h5>★★★★☆</h5>
            <div>Rahul</div>
            <p>
              "Little Lemon is a hidden gem! Their Lemon Herb Grilled Chicken
              was perfectly cooked and bursting with flavors."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-container-item">
            <img src={priya} alt="Salman" />
            <h5>★★★★☆</h5>
            <div>Priya</div>
            <p>
              "I loved how the staff checked on us multiple times to ensure
              everything was perfect. Highly recommend!"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-container-item">
            <img src={krish} alt="Krish" />
            <h5>★★★★☆</h5>
            <div>Rahul</div>
            <p>
              "Little Lemon is a hidden gem! Their Lemon Herb Grilled Chicken
              was perfectly cooked and bursting with flavors."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
