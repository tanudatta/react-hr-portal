import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EmployeeDashboard.css';

function EmployeeDashboard() {
  const navigate = useNavigate();

  // Get logged-in employee data
  const userData =
    JSON.parse(localStorage.getItem('userData')) || {};

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
    navigate('/');
  };

  const quickActions = [
    {
      title: 'Apply for Leave',
      description: 'Submit a new leave request.',
      icon: '📝',
      path: '/apply-leave'
    },
    {
      title: 'Leave Status',
      description: 'Track your leave requests.',
      icon: '📅',
      path: '/leave-status'
    },
    {
      title: 'About Us',
      description: 'Learn more about the HR Portal.',
      icon: 'ℹ️',
      path: '/about'
    }
  ];

  return (
    <div className="employee-dashboard">
      {/* Header */}
      <header className="employee-header">
        <div>
          <h1>
            Welcome Back, {userData.firstName || 'Employee'} 👋
          </h1>
          <p>
            Manage your profile, leave requests, and HR services.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <div className="employee-avatar">
            {userData.firstName
              ? userData.firstName.charAt(0).toUpperCase()
              : 'E'}
          </div>

          <button
            className="action-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Profile Summary */}
      <section className="profile-card">
        <h2>My Profile</h2>

        <div className="profile-grid">
          <div>
            <span className="profile-label">Employee ID</span>
            <strong>{userData.id || 'N/A'}</strong>
          </div>

          <div>
            <span className="profile-label">Department</span>
            <strong>
              {userData.department || 'Not Provided'}
            </strong>
          </div>

          <div>
            <span className="profile-label">Email</span>
            <strong>{userData.email || 'Not Provided'}</strong>
          </div>

          <div>
            <span className="profile-label">Phone</span>
            <strong>{userData.phone || 'Not Provided'}</strong>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="actions-section">
        <h2>Quick Actions</h2>

        <div className="actions-grid">
          {quickActions.map((action, index) => (
            <div className="action-card" key={index}>
              <div className="action-icon">{action.icon}</div>
              <h3>{action.title}</h3>
              <p>{action.description}</p>

              <button
                className="action-button"
                onClick={() => navigate(action.path)}
              >
                Open
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EmployeeDashboard;