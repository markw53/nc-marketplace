import React, { useState } from 'react';
import { postItem } from '../api';

const PostItem = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postItem({ itemName, description, imgUrl, price, category });
      setFeedback('Item posted successfully!');
    } catch (error) {
      setFeedback('Failed to post item.');
    }
  };

  return (
    <div>
      <h2>Post a New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item Description"
          required
        />
        <input
          type="text"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          placeholder="Image URL"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <button type="submit">Post Item</button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default PostItem;
