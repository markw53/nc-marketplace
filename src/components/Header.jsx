import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Marketplace</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/basket">Basket</Link>
      <Link to="/orders">Order History</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/kudos">Kudos</Link>
      <Link to="/post-item">Post Item</Link>
    </nav>
  </header>
);

export default Header;
