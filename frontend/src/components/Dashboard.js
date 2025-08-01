import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="user-info-card">
          <h2>User Information</h2>
          <div className="user-details">
            <div className="detail-item">
              <label>Email:</label>
              <span>{user?.email}</span>
            </div>
            <div className="detail-item">
              <label>User ID:</label>
              <span>{user?.id}</span>
            </div>
            <div className="detail-item">
              <label>Member Since:</label>
              <span>{user?.createdAt ? formatDate(user.createdAt) : 'N/A'}</span>
            </div>
          </div>
        </div>

        <div className="features-card">
          <h2>Available Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>🔐 Secure Authentication</h3>
              <p>Your account is protected with JWT-based authentication and bcrypt password hashing.</p>
            </div>
            <div className="feature-item">
              <h3>🛡️ Security Headers</h3>
              <p>Enhanced security with Helmet.js protection and CORS configuration.</p>
            </div>
            <div className="feature-item">
              <h3>⚡ Rate Limiting</h3>
              <p>Protection against brute force attacks with intelligent rate limiting.</p>
            </div>
            <div className="feature-item">
              <h3>✅ Input Validation</h3>
              <p>Comprehensive server-side validation and sanitization for all inputs.</p>
            </div>
          </div>
        </div>

        <div className="stats-card">
          <h2>Session Information</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">Active</div>
              <div className="stat-label">Session Status</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">JWT</div>
              <div className="stat-label">Token Type</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">7 Days</div>
              <div className="stat-label">Token Validity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
