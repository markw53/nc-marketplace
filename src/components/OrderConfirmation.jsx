import React from 'react';
import { placeOrder } from '../api';

const OrderConfirmation = ({ basket, setBasket, user }) => {
  const handleOrder = async () => {
    await placeOrder({ items: basket, userId: user.id });
    setBasket([]);
    alert('Order placed successfully!');
  };

  return (
    <div>
      <h2>Order Confirmation</h2>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default OrderConfirmation;
