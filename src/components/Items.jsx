import React, { useEffect, useState } from 'react';
import { fetchItemsByCategory } from '../api';
import { useParams } from 'react-router-dom';

const Items = () => {
  const { category_name } = useParams(); // Get category name from route params
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItemsByCategory(category_name);
        setItems(data.items);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load items", error);
        setLoading(false);
      }
    };

    getItems();
  }, [category_name]);

  return (
    <div>
      <h2>Items in {category_name}</h2>
      {loading ? (
        <p>Loading items...</p>
      ) : items.length > 0 ? (
        <div className="item-list">
          {items.map(item => (
            <div key={item.item_id} className="item-card">
              <img src={item.img_url} alt={item.item_name} />
              <h3>{item.item_name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No items found in this category.</p>
      )}
    </div>
  );
};

export default Items;
