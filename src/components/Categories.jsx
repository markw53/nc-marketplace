import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../api';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories(); // Ensure this matches your API call
        setCategories(data.categories); // Assuming data structure from the API response
      } catch (error) {
        console.error("Failed to load categories", error);
      }
    };

    getCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      {categories && categories.length > 0 ? (
        categories.map((category, index) => (
          <Link key={index} to={`/items/${category.category_name}`}>
            <button>{category.category_name}</button>
          </Link>
        ))
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
  );
};

export default Categories;
