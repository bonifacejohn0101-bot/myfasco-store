
import { useEffect, useState } from 'react';
import arrivalImage3 from '../assets/Images (3).png';
import arrivalImage4 from '../assets/Images (4).png';
import arrivalImage5 from '../assets/Images (5).png';
import arrivalImage6 from '../assets/Images (6).png';

function NewArrivals() {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Women's Fashion");

  // CONTROL THE SIZES HERE
  const IMAGE_WIDTH = '100%';
  const IMAGE_HEIGHT = '260px';
  const CARD_WIDTH = '380px';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchData();
  }, []);

  const categories = [
    "Men's Fashion",
    "Women's Fashion",
    'Women Accessories',
    'Men Accessories',
    'Discount Deals',
  ];

  // Additional local product images
  const localProducts = [
    {
      id: 'local-3',
      title: 'Full Sweater',
      category: 'Al Karam',
      rating: { rate: 5, count: 4100 },
      price: 95.50,
      image: arrivalImage3,
    },
    {
      id: 'local-4',
      title: 'White Dress',
      category: 'Al Karam',
      rating: { rate: 5, count: 4100 },
      price: 95.50,
      image: arrivalImage4,
    },
    {
      id: 'local-5',
      title: 'Colorful Dress',
      category: 'Al Karam',
      rating: { rate: 5, count: 4100 },
      price: 95.50,
      image: arrivalImage5,
    },
    {
      id: 'local-6',
      title: 'White Shirt',
      category: 'Al Karam',
      rating: { rate: 5, count: 4100 },
      price: 95.50,
      image: arrivalImage6,
    },
  ];

  // Display API products followed by your local products
  const products = [...data, ...localProducts];

  return (
    <section
      id="new-arrivals"
      className="py-5 bg-light"
      style={{ minHeight: '100vh' }}
    >
      <div className="container">

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark display-5 mb-3">
            New Arrivals
          </h2>

          <p
            className="text-muted mx-auto"
            style={{
              maxWidth: '600px',
              fontSize: '0.9rem',
              lineHeight: '1.6',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque duis ultrices sollicitudin aliquam sem.
            Scelerisque duis ultrices sollicitudin.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="btn rounded-3 px-4 py-2 border-0"
              style={{
                fontSize: '0.85rem',
                backgroundColor:
                  activeCategory === category ? '#000' : '#f8f9fa',
                color:
                  activeCategory === category ? '#fff' : '#6c757d',
                boxShadow:
                  activeCategory === category
                    ? '0 10px 20px rgba(0,0,0,0.15)'
                    : 'none',
                fontWeight: '500',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="row g-4 justify-content-center">
          {products.map((item) => (
            <div
              key={item.id}
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <div
                className="card h-100 border-0 bg-white p-3 rounded-4 w-100"
                style={{
                  maxWidth: CARD_WIDTH,
                  boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
                }}
              >
                {/* Product Image */}
                <div
                  className="overflow-hidden rounded-4 mb-3 mx-auto"
                  style={{
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Card Body */}
                <div className="card-body p-1 d-flex flex-column justify-content-between">
                  <div>
                    {/* Title and Rating */}
                    <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
                      <h5 className="card-title fw-bold text-dark mb-0 fs-6">
                        {item.title}
                      </h5>

                      <div
                        className="text-warning small text-nowrap"
                        title={`Rating: ${item.rating?.rate ?? 0} out of 5`}
                      >
                        {'★'.repeat(
                          Math.round(item.rating?.rate ?? 0)
                        )}
                        {'☆'.repeat(
                          5 - Math.round(item.rating?.rate ?? 0)
                        )}
                      </div>
                    </div>

                    {/* Category */}
                    <p
                      className="text-muted mb-3"
                      style={{ fontSize: '0.75rem' }}
                    >
                      {item.category}
                    </p>

                    {/* Reviews */}
                    <p
                      className="text-muted mb-3"
                      style={{ fontSize: '0.75rem' }}
                    >
                      ({item.rating?.count ?? 0}) Customer Reviews
                    </p>
                  </div>

                  {/* Price and Availability */}
                  <div className="d-flex justify-content-between align-items-center mt-auto pt-2 gap-2">
                    <span className="fw-bold text-dark fs-5">
                      ${Number(item.price).toFixed(2)}
                    </span>

                    <span
                      className={
                        item.rating?.count > 200
                          ? 'text-success fw-semibold'
                          : 'text-danger fw-semibold'
                      }
                      style={{ fontSize: '0.7rem' }}
                    >
                      {item.rating?.count > 200
                        ? 'In Stock'
                        : 'Almost Sold Out'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-5">
          <button
            className="btn btn-dark text-white rounded-3 px-5 py-2 fw-medium border-0 fs-6 shadow-sm"
            style={{ backgroundColor: '#000' }}
          >
            View More
          </button>
        </div>

      </div>
    </section>
  );
}

export default NewArrivals;
