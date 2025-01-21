import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const ReadData = () => {
  const [data, setData] = useState('');
  const { token } = useContext(AuthContext);

  const handleReadData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/read', {
        headers: {
          'x-access-token': token,
        },
      });
      setData(JSON.stringify(response.data, null, 2));
    } catch (error) {
      alert('Error reading data');
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <button
        onClick={handleReadData}
        className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
      >
        Read Data
      </button>
      <Link to='/save'>
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 w-full"
      >
        Save Data
      </button>
      </Link>
      <pre className="border border-gray-300 p-3 bg-gray-50 rounded-lg overflow-auto whitespace-pre-wrap">
        {data}
      </pre>
    </div>
  );
};

export default ReadData;
