import React, { useState } from 'react';
import '../styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (role === 'hr') {
        response = await axios.get(
          `http://localhost:3001/hr?email=${email}&password=${password}`
        );

        if (response.data.length > 0) {
          localStorage.setItem('userRole', 'hr');
          localStorage.setItem('userData', JSON.stringify(response.data[0]));

          alert('Welcome HR Manager!');
          navigate('/hr-dashboard');
        } else {
          alert('Invalid HR credentials.');
        }
      } else {
        response = await axios.get(
          `http://localhost:3001/employees?email=${email}&password=${password}`
        );

        if (response.data.length > 0) {
          localStorage.setItem('userRole', 'employee');
          localStorage.setItem('userData', JSON.stringify(response.data[0]));
          alert('Login successful!');
          navigate('/employee-dashboard');
        } else {
          alert('Invalid employee credentials.');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Unable to connect to the server.');
    }
  };

  return (
    <div className="login-page">
      <div className="left-panel">
        <div className="brand-badge">HR</div>
        <h1 className="main-heading">Welcome Back</h1>
        <p className="sub-text">
          Manage employees, approve leaves, and streamline HR operations.
        </p>

        <div className="feature-card">
          <span className="feature-icon">👥</span>
          <div>
            <h4 className="feature-title">Employee Management</h4>
            <p className="feature-description">
              Track employee profiles and onboarding.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <span className="feature-icon">📅</span>
          <div>
            <h4 className="feature-title">Leave Approval</h4>
            <p className="feature-description">
              Approve and monitor leave requests instantly.
            </p>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="login-card">
          <h2 className="card-title">Sign In</h2>
          <p className="card-subtitle">Access your HR Portal account</p>

          <form onSubmit={handleLogin}>
            <div className="form-group-custom">
              <label>Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group-custom">
              <label>Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group-custom">
              <label>Login As</label>
              <select
                className="form-input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="employee">Employee</option>
                <option value="hr">HR Manager</option>
              </select>
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>

          <p className="footer-text">
            New employee? <a href="/signup">Create Account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;