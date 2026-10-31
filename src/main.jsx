
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import App from './App.jsx';
import Signup from './pages/signup.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import ShoppingCartDrawer from './pages/ShoppingCartDrawer.jsx';
import ShoppingCartPage from './pages/ShoppingCartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import Signin from './pages/Signin.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import ConfirmationWindow from './pages/ConfirmationWindow.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/Signin" replace />;
  }

  return children;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ProductDetails"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ShoppingCartDrawer"
          element={
            <ProtectedRoute>
              <ShoppingCartDrawer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ShoppingCartPage"
          element={
            <ProtectedRoute>
              <ShoppingCartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/CheckoutPage"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route path="/OrderConfirmation" element={<ConfirmationWindow />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route
          path="/ForgetPassword/ConfirmationWindow"
          element={<ConfirmationWindow />}
        />
        <Route path="/Signup/Signin" element={<Signin />} />
        <Route path="/ForgetPassword/Signin" element={<Signin />} />
        <Route path="/Signin/Signup" element={<Signup />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
