import React from 'react';

const Basket = ({ basket, setBasket }) => {
  const removeFromBasket = (itemId) => {
    setBasket(basket.filter(item => item.item_id !== itemId));
  };

  return (
    <div>
      <h2>Your Basket</h2>
      {basket.length === 0 ? <p>Basket is empty</p> : (
        basket.map(item => (
          <div key={item.item_id}>
            <h3>{item.item_name}</h3>
            <button onClick={() => removeFromBasket(item.item_id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Basket;
