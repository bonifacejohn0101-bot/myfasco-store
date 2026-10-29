import { NavLink, useLocation } from 'react-router';
import confirmationBanner from '../assets/Rectangle 19280.png';

const ConfirmationWindow = () => {
  const { state } = useLocation();
  const order = state?.order;

  if (order) {
    const { lineItem, total } = order;

    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light py-5">
        <div className="card border-0 shadow-sm w-100" style={{ maxWidth: '720px', borderRadius: '24px' }}>
          <div className="card-body p-4 p-md-5 text-center">
            <h1 className="fw-semibold mb-2">Order confirmed</h1>
            <p className="text-muted mb-4">Thank you for your purchase.</p>

            <div className="d-flex flex-column flex-sm-row align-items-center gap-4 text-start border rounded-3 p-3 mb-4">
              <img
                src={lineItem.img}
                alt={lineItem.name}
                className="rounded bg-light"
                style={{ width: '160px', height: '160px', objectFit: 'contain' }}
              />
              <div className="flex-grow-1">
                <h2 className="h5 fw-semibold">{lineItem.name}</h2>
                <p className="text-muted mb-2">Color: {lineItem.color}</p>
                <p className="text-muted mb-2">Quantity: {lineItem.quantity}</p>
                <p className="fw-semibold mb-0">
                  ${Number(lineItem.price).toFixed(2)} each
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-between border-top pt-3 mb-4">
              <span className="fw-semibold">Order total</span>
              <span className="fw-bold">${Number(total).toFixed(2)}</span>
            </div>

            <NavLink to="/shop" className="btn btn-dark px-4 py-2">
              Continue shopping
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      {/* Main Card Container */}
      <div 
        className="row w-100 shadow-sm bg-white overflow-hidden" 
        style={{ maxWidth: '1000px', borderRadius: '24px' }}
      >
        
        {/* Left Side: Image Banner */}
        <div className="col-md-6 p-0 d-none d-md-block">
          <img 
            src={confirmationBanner} 
            alt="FASCO Fashion Banner" 
            className="w-100 h-100"
            style={{ objectFit: 'cover', minHeight: '550px' }}
          />
        </div>

        {/* Right Side: Confirmation Form */}
        <div className="col-md-6 d-flex flex-column justify-content-between p-5">
          
          {/* Top Brand Logo */}
          <div className="text-center my-3">
            <h1 className="fw-serif display-5 tracking-wide" style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}>
              FASCO
            </h1>
          </div>

          {/* Form Content Wrapper */}
          <div className="mx-auto w-100" style={{ maxWidth: '380px' }}>
            <h5 className="text-start mb-4 fw-semibold text-dark" style={{ fontSize: '1.1rem' }}>
              Enter The Confirmation Code
            </h5>

            {/* Input Form */}
            <form onSubmit={(e) => e.preventDefault()}>
              
              {/* Single Underlined Confirmation Code Input */}
              <div className="mb-5">
                <input 
                  type="text" 
                  className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                  placeholder="Confirmation Code" 
                  style={{ borderBottom: '1px solid #ccc', fontSize: '0.85rem' }}
                />
              </div>

              {/* Action Button */}
              <button 
                type="submit" 
                className="btn btn-dark w-100 py-2.5 mb-3 fw-semibold shadow"
                style={{ borderRadius: '8px', backgroundColor: '#000', fontSize: '0.9rem' }}
              >
                Recover Account
              </button>
              
              {/* Resend Code Link */}
              <div className="text-center mt-3">
                <span className="text-muted small">Didn't receive Confirmation Code? </span>
                <a href="#resend" className="text-decoration-none fw-semibold small" style={{ color: '#4A60A1' }}>
                  Resend Now
                </a>
              </div>
            </form>
          </div>

          {/* Footer Terms */}
          <div className="text-end mt-4">
            <small className="text-muted" style={{ fontSize: '0.75rem', cursor: 'pointer' }}>
              FASCO Terms & Codnitions
            </small>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConfirmationWindow;