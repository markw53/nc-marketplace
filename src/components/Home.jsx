import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ categories }) => (
  <div>
    <h2>Welcome to the Marketplace</h2>
    {categories.map((category, index) => (
      <Link key={index} to={`/categories/${category.category_name}`}>
        <button>{category.category_name}</button>
      </Link>
    ))}
  </div>
);

export default Home;
