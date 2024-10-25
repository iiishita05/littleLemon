import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
   const navigate = useNavigate(); 

   const handleClick = () => {
     navigate("/reservations");
   };
  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-container-desc">
            <h1>Little Lemon</h1>
            <h5>India</h5>
            <p>
              Little Lemon is a cozy, family-owned restaurant that specializes
              in fresh, Mediterranean-inspired dishes. Known for its vibrant
              flavors and locally sourced ingredients, Little Lemon offers a
              warm, inviting atmosphere perfect for casual dining or special
              occasions.
            </p>
            <button onClick={handleClick}>Book a Table</button>
          </div>
          <div className="hero-container-pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXb59PaR-ycKvI44CuNiDGriUjLwHjO9AFyA&s"
              alt=""
            />
          </div>
        </section>

        <section className="Highlights">
          <h3>Specials</h3>

          <div className="highlight-container">
            <div className="highlight-item">
              <img
                src="https://images.mrcook.app/recipe-image/01914cc0-97d5-7f44-bc35-ee33b9861929?cacheKey=VHVlLCAxMyBBdWcgMjAyNCAxNzoxOTo0MCBHTVQ="
                alt=""
              />
              <h4>Lemon Herb Grilled Chicken </h4>
              <p>
                Tender chicken marinated in lemon, olive oil, and herbs, grilled
                to perfection for a burst of Mediterranean flavor
              </p>
            </div>
            <div className="highlight-item">
              <img
                src="https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food-top-view_2829-14371.jpg?semt=ais_hybrid"
                alt=""
              />
              <h4>Falafel Wrap</h4>
              <p>
                Crispy chickpea fritters wrapped in soft pita, with tahini
                sauce, fresh veggies, and a hint of garlic.
              </p>
            </div>
            <div className="highlight-item">
              <img
                src="https://media.istockphoto.com/id/1161711740/photo/greek-salad-with-fresh-vegetables-feta-cheese-and-kalamata-olives-healthy-food-top-view.jpg?s=612x612&w=0&k=20&c=pQy_0z1-a4YqY1bGc2JpVLgEL3oDYLJqEsQNNVwQ5SQ="
                alt=""
              />
              <h4>Greek Salad</h4>
              <p>
                A refreshing mix of cucumbers, tomatoes, olives, and feta
                cheese, tossed in olive oil and lemon dressing.
              </p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h4>Testimonials</h4>
          <div className="testimonial-container">
            <div className="testimonial-container-item">
              <h5>★★★★☆</h5>
              <img src="" alt="" />
              <span>
                <cite>Rahul</cite>
              </span>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                "
              </p>
            </div>
            <div className="testimonial-container-item">
              <h5>★★★★☆</h5>
              <img src="" alt="" />
              <span>
                <cite>Anjali</cite>
              </span>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                "
              </p>
            </div>
            <div className="testimonial-container-item">
              <h5>★★★★☆</h5>
              <img src="" alt="" />
              <span>
                <cite>Walter</cite>
              </span>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                "
              </p>
            </div>
            <div className="testimonial-container-item">
              <h5>★★★★☆</h5>
              <img src="" alt="" />
              <span>
                <cite>Will</cite>
              </span>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                "
              </p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="about-container">
            <div className="about-container-item">
              <h3>About Us</h3>
              <h6>Chicago</h6>
              <p>
                Little Lemon is a cozy, family-owned restaurant that specializes
                in fresh, Mediterranean-inspired dishes. Known for its vibrant
                flavors and locally sourced ingredients, Little Lemon offers a
                warm, inviting atmosphere perfect for casual dining or special
                occasions.
              </p>
            </div>
            <div className="about-container-item">
              <img
                src="https://r2.erweima.ai/imgcompressed/img/compressed_f4adc66aa03b9e3a0b7726e9f52318d9.webp"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
