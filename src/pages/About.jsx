import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./About.css";

export default function About() {
  return (
    <>
      <Header />
      <section className="about">
        <h3 className="about-head">Our Story</h3>
        <div className="about-container">
          <div className="about-content-item">
            <p>
              At Little Lemon, our journey began with a simple yet powerful
              idea: to create something that makes a difference. It all started
              in 1990 when a small group of passionate individuals came
              together, driven by a shared dream to innovate and bring change to
              the Hospitality Industry. What started as a humble beginning has
              now blossomed into a thriving endeavor that continues to touch the
              lives of countless people. In the early days, our founders had one
              mission - to provide solutions that genuinely improved the
              everyday experience of our customers. With nothing more than
              dedication, a relentless pursuit of excellence, and a vision to
              leave an indelible mark on the industry, they set out to build a
              brand that stands for quality, integrity, and innovation.
            </p>
          </div>
          <div className="about-image-item">
            <img
              src="https://img.freepik.com/premium-photo/group-chefs-kitchen-prepare-small-cakes-arrange-them-tray-cinematic-overhead-light-ai-generated-ai-generative-ai-generativ_295714-7977.jpg"
              alt="about us"
            />
          </div>
          <div className="about-content-item">
            <p>
              At Little Lemon, our journey began with a simple yet powerful
              idea: to create something that makes a difference. It all started
              in 1990 when a small group of passionate individuals came
              together, driven by a shared dream to innovate and bring change to
              the Hospitality Industry. What started as a humble beginning has
              now blossomed into a thriving endeavor that continues to touch the
              lives of countless people. In the early days, our founders had one
              mission - to provide solutions that genuinely improved the
              everyday experience of our customers. With nothing more than
              dedication, a relentless pursuit of excellence, and a vision to
              leave an indelible mark on the industry, they set out to build a
              brand that stands for quality, integrity, and innovation.
            </p>
          </div>

          <div className="about-image-item">
            <img
              src="https://media.istockphoto.com/id/649672568/photo/couple-at-a-restaurant-meal.jpg?s=612x612&w=is&k=20&c=i1wR4JiSgpIUWUX37IjcLjGCSimTIfQFYwv5m_ooavA="
              alt="about us"
            />
          </div>

          <div className="about-content-item">
            <p>
              At Little Lemon, our journey began with a simple yet powerful
              idea: to create something that makes a difference. It all started
              in 1990 when a small group of passionate individuals came
              together, driven by a shared dream to innovate and bring change to
              the Hospitality Industry. What started as a humble beginning has
              now blossomed into a thriving endeavor that continues to touch the
              lives of countless people. In the early days, our founders had one
              mission - to provide solutions that genuinely improved the
              everyday experience of our customers. With nothing more than
              dedication, a relentless pursuit of excellence, and a vision to
              leave an indelible mark on the industry, they set out to build a
              brand that stands for quality, integrity, and innovation.
            </p>
          </div>
          <div className="about-image-item">
            <img
              src="https://media.istockphoto.com/id/599485258/photo/casual-catering-discussion-meeting-colleagues-concept.jpg?s=612x612&w=0&k=20&c=idU_JVw93SyQ9jqYRdZnBZUxeB1Of9kBlE_Ytlq-778="
              alt="about us"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
