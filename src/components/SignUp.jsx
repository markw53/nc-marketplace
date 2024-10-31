import React, { useState } from 'react';
import { createUser } from '../api';

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setFeedback(null); // Clear any previous feedback

    if (!username || !email || !password) {
      setFeedback('Please fill out all fields');
      return;
    }

    try {
      const user = await createUser({ username, email, password });
      setUser(user); // Set the user data in the app
      setFeedback('Signup successful!');
    } catch (error) {
      setFeedback('Failed to sign up. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default SignUp;
