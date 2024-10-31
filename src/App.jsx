import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Categories from './components/Categories';
import Items from './components/Items';
import Basket from './components/Basket';
import OrderConfirmation from './components/OrderConfirmation';
import OrderHistory from './components/OrderHistory';
import SignUp from './components/SignUp';
import Kudos from './components/Kudos';
import PostItem from './components/PostItem';
import { fetchCategories } from './api';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [basket, setBasket] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data.categories);
    };
    loadCategories();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route path="/categories" element={<Categories categories={categories} />} />
        <Route path="/items/:category_name" element={<Items basket={basket} setBasket={setBasket} />} />
        <Route path="/basket" element={<Basket basket={basket} setBasket={setBasket} />} />
        <Route path="/order" element={<OrderConfirmation basket={basket} setBasket={setBasket} user={user} />} />
        <Route path="/orders" element={<OrderHistory user={user} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/kudos" element={<Kudos />} />
        <Route path="/post-item" element={<PostItem />} />
      </Routes>
    </Router>
  );
};

export default App;
