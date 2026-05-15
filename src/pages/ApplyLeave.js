import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ApplyLeave.css';

function ApplyLeave() {
  const [formData, setFormData] = useState({
    employeeEmail: '',
    leaveType: '',
    fromDate: '',
    toDate: '',
    reason: '',
    status: 'Pending'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:3001/leaveRequests',
        formData
      );

      alert('Leave request submitted successfully!');

      setFormData({
        employeeEmail: '',
        leaveType: '',
        fromDate: '',
        toDate: '',
        reason: '',
        status: 'Pending'
      });
    } catch (error) {
      console.error('Error submitting leave request:', error);
      alert('Unable to submit leave request.');
    }
  };

  return (
    <div className="apply-leave-page">
      <div className="apply-leave-card">
        <h1 className="page-title">Apply for Leave</h1>
        <p className="page-subtitle">
          Submit a leave request to HR.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">

            <div className="form-group full-width">
              <label>Employee Email</label>
              <input
                type="email"
                name="employeeEmail"
                value={formData.employeeEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Leave Type</label>
              <select
                name="leaveType"
                value={formData.leaveType}
                onChange={handleChange}
                required
              >
                <option value="">Select Leave Type</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Earned Leave">Earned Leave</option>
                <option value="Work From Home">Work From Home</option>
              </select>
            </div>

            <div className="form-group">
              <label>Reason</label>
              <input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>From Date</label>
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>To Date</label>
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <button type="submit" className="submit-button">
            Submit Leave Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplyLeave;