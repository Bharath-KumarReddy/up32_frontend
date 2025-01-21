import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const SaveData = () => {
  const [data, setData] = useState('');
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/save', { data }, {
        headers: {
          'x-access-token': token,
        },
      });
      alert('Data saved successfully');
    } catch (error) {
      alert('Error saving data');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <textarea
        placeholder="Enter JSON data"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        rows="6"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Save Data
      </button>


     <Link to='/read'>
      <button
        type="submit"
        className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300 w-full"
      >
        Read Data
      </button>
      </Link>
    </form>
  );
};

export default SaveData;
