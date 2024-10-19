import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <img src="" alt="" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-container-desc">
            <h1>Little Lemon</h1>
            <h5>Chicago</h5>
            <p>Discover our culinary excellence and relax at home</p>
            <button>Book a Table</button>
          </div>
          <div className="hero-container-pic">
            <img src="" alt="" />
          </div>
        </section>

        <section className="Highlights">
          <h3>Specials</h3>
          <span>
            <button>Book a Table</button>
          </span>
          <div className="highlight-container">
            <div className="highlight-item">
              <img src="" alt="" />
              <h4>Title</h4>
              <p>Description</p>
            </div>
            <div className="highlight-item">
              <img src="" alt="" />
              <h4>Title</h4>
              <p>Description</p>
            </div>
            <div className="highlight-item">
              <img src="" alt="" />
              <h4>Title</h4>
              <p>Description</p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h4>Testimonials</h4>
          <div className="testimonial-container">
            <div className="testimonial-container-item">
              <h5>Rating</h5>
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
              <h5>Rating</h5>
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
              <h5>Rating</h5>
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
              <h5>Rating</h5>
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
              <img src="" alt="" />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-container">
          <div className="footer-container-item">
            <img src="" alt="" />
          </div>
          <div className="footer-container-item">
            <h5>DoorMat Navigation</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Reservations</a>
              </li>
              <li>
                <a href="#">Order Online</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
          <div className="footer-container-item">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="#">Address</a>
              </li>
              <li>
                <a href="#">Phone</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
          </div>
          <div className="footer-container-item">
            <h5>Social Media</h5>
            <ul>
              <li href="#">Instagram</li>
              <li href="#">FaceBook</li>
              <li href="#">Twitter</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
