import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HRDashboard.css';

function HRDashboard() {
  const navigate = useNavigate();

  // Get logged-in HR data
  const userData =
    JSON.parse(localStorage.getItem('userData')) || {};

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
    navigate('/');
  };

  const stats = [
    {
      title: 'Employee List',
      value: 'Manage',
      icon: '👥'
    },
    {
      title: 'Leave Requests',
      value: 'Review',
      icon: '📅'
    },
    {
      title: 'Add Employee',
      value: 'Create',
      icon: '➕'
    },
    {
      title: 'About Us',
      value: 'Info',
      icon: 'ℹ️'
    }
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">HR Portal</div>

        <nav className="sidebar-nav">
          <button
            className="nav-item active"
            onClick={() => navigate('/hr-dashboard')}
          >
            📊 Dashboard
          </button>

          <button
            className="nav-item"
            onClick={() => navigate('/employees')}
          >
            👥 Employees
          </button>

          <button
            className="nav-item"
            onClick={() => navigate('/add-employee')}
          >
            ➕ Add Employee
          </button>

          <button
            className="nav-item"
            onClick={() => navigate('/leave-approval')}
          >
            📅 Leave Approval
          </button>

          <button
            className="nav-item"
            onClick={() => navigate('/about')}
          >
            ℹ️ About Us
          </button>

          <button
            className="nav-item"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>
              Welcome, {userData.name || 'HR Manager'} 👋
            </h1>
            <p>
              Manage employees, leave requests, and HR services.
            </p>
          </div>

          <div className="profile-badge">
            {userData.name
              ? userData.name.charAt(0).toUpperCase()
              : 'H'}
          </div>
        </header>

        {/* Action Cards */}
        <section className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{item.icon}</div>
              <div>
                <h3>{item.value}</h3>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Quick Links */}
        <section className="activity-card">
          <h2>Quick Links</h2>
          <p>
            Use the sidebar to manage employees, approve leave
            requests, and access project information.
          </p>
        </section>
      </main>
    </div>
  );
}

export default HRDashboard;