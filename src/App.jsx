import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import SaveData from './SaveData.jsx';
import ReadData from './ReadData.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route
            path="/save"
            element={
              <ProtectedRoute>
                <SaveData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/read"
            element={
              <ProtectedRoute>
                <ReadData />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
