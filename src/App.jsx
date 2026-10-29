
import { NavLink } from 'react-router';

import DealsOfTheMonth from './Components/DealOfTheMonth';
import NewArrivals from './Components/NewArrival';
import PeakyBlindersSection from './Components/PeakyBlinderSelection';
import InstagramFeed from './Components/instagramFeed';
import CustomerTestimonials from './Components/CustomerTestimonial';
import NewLetterFooter from './Components/NewLetterFooter';
import Navbar from './Components/Navbar';

import heroLeft from './assets/image 2 28.png';
import heroCenterTop from './assets/images.png';
import heroCenterBottom from './assets/image.png';
import heroRight from './assets/image 227.png';

import logoOne from './assets/logo.png';
import logoTwo from './assets/logo (1).png';
import logoThree from './assets/logo (2).png';
import logoFour from './assets/logo (3).png';
import logoFive from './assets/logo copy.png';

import iconQuality from './assets/icon.png';
import iconWarranty from './assets/icon (1).png';
import iconShipping from './assets/2891214031638194523 1.png';
import iconSupport from './assets/vector.png';

const App = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const brandLogos = [
    logoOne,
    logoTwo,
    logoThree,
    logoFour,
    logoFive,
  ];

  const features = [
    {
      icon: iconQuality,
      title: 'High Quality',
      description: 'Crafted from top materials',
    },
    {
      icon: iconWarranty,
      title: 'Warranty Protection',
      description: 'Over 2 years',
    },
    {
      icon: iconShipping,
      title: 'Free Shipping',
      description: 'Order over $150',
    },
    {
      icon: iconSupport,
      title: '24 / 7 Support',
      description: 'Dedicated support',
    },
  ];

  return (
    <div
      className="bg-white text-dark"
      style={{ minHeight: '100vh' }}
    >
      {/* Navigation */}
      <header className="container-fluid px-3 px-lg-5 py-3">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="container-fluid px-3 px-lg-5 py-3">
        <div className="row g-3 g-lg-4 align-items-stretch">

          {/* Left Image */}
          <div className="col-12 col-md-4">
            <div
              className="d-flex justify-content-center align-items-end h-100"
              style={{
                backgroundColor: '#e8e8e8',
                borderRadius: '10px',
                minHeight: '400px',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              <img
                src={heroLeft}
                alt="Fashion model"
                className="img-fluid"
                style={{
                  maxHeight: '500px',
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column gap-3 h-100">

              {/* Top Image */}
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: '#e8e8e8',
                  borderRadius: '10px',
                  height: '120px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={heroCenterTop}
                  alt="New fashion collection"
                  className="w-100 h-100 rounded"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Sale Content */}
              <div
                className="text-center d-flex flex-column justify-content-center align-items-center flex-grow-1"
                style={{
                  backgroundColor: '#f4f4f4',
                  borderRadius: '10px',
                  padding: '30px 15px',
                  minHeight: '300px',
                }}
              >
                <h1
                  className="fw-bold mb-0"
                  style={{
                    fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                    color: '#444',
                    lineHeight: 1,
                  }}
                >
                  ULTIMATE
                </h1>

                <h1
                  className="fw-bold mb-0"
                  style={{
                    fontSize: 'clamp(3rem, 7vw, 6rem)',
                    color: 'transparent',
                    WebkitTextStroke: '2px #777',
                    lineHeight: 1.1,
                  }}
                >
                  SALE
                </h1>

                <p
                  className="mt-3 mb-0"
                  style={{
                    letterSpacing: '3px',
                    color: '#666',
                  }}
                >
                  NEW COLLECTION
                </p>

                <button
                  type="button"
                  className="btn btn-dark px-5 py-3 mt-4"
                  style={{
                    borderRadius: '8px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  }}
                  onClick={handleScrollToTop}
                >
                  SHOP NOW
                </button>
              </div>

              {/* Bottom Image */}
              <div
                style={{
                  borderRadius: '10px',
                  height: '180px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={heroCenterBottom}
                  alt="Fashion collection"
                  className="w-100 h-100 rounded"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-12 col-md-4">
            <div
              className="d-flex justify-content-center align-items-end h-100"
              style={{
                backgroundColor: '#e8e8e8',
                borderRadius: '10px',
                minHeight: '400px',
                overflow: 'hidden',
              }}
            >
              <img
                src={heroRight}
                alt="Fashion model"
                className="img-fluid"
                style={{
                  maxHeight: '500px',
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="container-fluid px-3 px-lg-5 text-center py-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 align-items-center">
          {brandLogos.map((logo, index) => (
            <div className="col" key={index}>
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="img-fluid"
                style={{
                  maxHeight: '65px',
                  maxWidth: '150px',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Deals */}
      <section className="container-fluid px-3 px-lg-5 py-4">
        <DealsOfTheMonth />
      </section>

      {/* New Arrivals */}
      <section className="container-fluid px-3 px-lg-5 py-4">
        <NewArrivals />
      </section>

      {/* Featured Collection */}
      <section className="container-fluid px-3 px-lg-5 py-4">
        <PeakyBlindersSection />
      </section>

      {/* Features */}
      <section className="container-fluid px-3 px-lg-5 py-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 align-items-center">
          {features.map((feature) => (
            <div className="col" key={feature.title}>
              <div className="p-3 p-lg-4 rounded-4 h-100 d-flex align-items-center gap-3">
                <img
                  src={feature.icon}
                  alt=""
                  style={{
                    width: '48px',
                    height: '48px',
                    objectFit: 'contain',
                    flexShrink: 0,
                  }}
                />

                <div>
                  <h6 className="fw-semibold mb-1">
                    {feature.title}
                  </h6>

                  <p className="text-muted mb-0">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="container-fluid px-3 px-lg-5 py-4">
        <InstagramFeed />
      </section>

      {/* Customer Testimonials */}
      <section className="container-fluid px-3 px-lg-5 py-4">
        <CustomerTestimonials />
      </section>

      {/* Newsletter and Footer */}
      <footer className="container-fluid px-3 px-lg-5 py-4">
        <NewLetterFooter />
      </footer>

      {/* Floating Buttons */}
      <div
        className="position-fixed d-flex gap-3"
        style={{
          bottom: '20px',
          right: '20px',
          zIndex: 1050,
        }}
      >
        <NavLink
          to="/ShoppingCartPage"
          aria-label="Shopping cart"
          className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: '50px',
            height: '50px',
          }}
        >
          🛒
        </NavLink>

        <button
          type="button"
          id="scrollToTop"
          aria-label="Scroll to top"
          className="btn btn-light rounded-circle border d-flex align-items-center justify-content-center"
          style={{
            width: '50px',
            height: '50px',
          }}
          onClick={handleScrollToTop}
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default App;
