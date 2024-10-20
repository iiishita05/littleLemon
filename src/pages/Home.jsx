import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-container-desc">
            <h1>Little Lemon</h1>
            <h5>Chicago</h5>
            <p>Discover our culinary excellence and relax at home</p>
            <button>Book a Table</button>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXb59PaR-ycKvI44CuNiDGriUjLwHjO9AFyA&s"
                alt=""
              />
              <h4>Title</h4>
              <p>Description</p>
            </div>
            <div className="highlight-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXb59PaR-ycKvI44CuNiDGriUjLwHjO9AFyA&s"
                alt=""
              />
              <h4>Title</h4>
              <p>Description</p>
            </div>
            <div className="highlight-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXb59PaR-ycKvI44CuNiDGriUjLwHjO9AFyA&s"
                alt=""
              />
              <h4>Title</h4>
              <p>Description</p>
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
                <cite>Name</cite>
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
                <cite>Name</cite>
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
                <cite>Name</cite>
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
                <cite>Name</cite>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure
              </p>
            </div>
            <div className="about-container-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qqp7MXqRitCrmMg4AWShwvxXlBw9JNFkGw&s"
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
