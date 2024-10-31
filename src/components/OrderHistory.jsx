import React, { useEffect, useState } from 'react';
import { fetchOrderHistory } from '../api';

const OrderHistory = ({ user }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const data = await fetchOrderHistory(user.id);
      setOrders(data.orders);
    };
    loadOrders();
  }, [user.id]);

  return (
    <div>
      <h2>Order History</h2>
      {orders.map(order => (
        <div key={order.id}>
          <h3>Order {order.id}</h3>
          {order.items.map(item => (
            <p key={item.item_id}>{item.item_name}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
