import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post('http://localhost:5000/register', { username, password });
      alert('User registered successfully');
      navigate('/login');
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Register
        </button>
      </form>
    );
  };
  
  export default Register;
