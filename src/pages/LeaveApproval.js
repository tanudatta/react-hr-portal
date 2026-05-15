import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/LeaveApproval.css';

function LeaveApproval() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3001/leaveRequests'
      );
      setLeaveRequests(response.data);
    } catch (error) {
      console.error('Error fetching leave requests:', error);
      alert('Unable to load leave requests.');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(
        `http://localhost:3001/leaveRequests/${id}`,
        { status }
      );

      fetchLeaveRequests();
      alert(`Leave request ${status.toLowerCase()} successfully.`);
    } catch (error) {
      console.error('Error updating leave status:', error);
      alert('Unable to update leave status.');
    }
  };

  const getStatusClass = (status) => {
    if (status === 'Approved') return 'status-badge approved';
    if (status === 'Rejected') return 'status-badge rejected';
    return 'status-badge pending';
  };

  return (
    <div className="leave-approval-page">
      <div className="leave-approval-card">
        <div className="page-header">
          <h1>Leave Approval</h1>
          <p>Review and process employee leave requests.</p>
        </div>

        {loading ? (
          <p>Loading leave requests...</p>
        ) : leaveRequests.length === 0 ? (
          <p>No leave requests found.</p>
        ) : (
          <div className="table-wrapper">
            <table className="leave-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Leave Type</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((leave) => (
                  <tr key={leave.id}>
                    <td>{leave.employeeEmail}</td>
                    <td>{leave.leaveType}</td>
                    <td>{leave.fromDate}</td>
                    <td>{leave.toDate}</td>
                    <td>{leave.reason}</td>
                    <td>
                      <span className={getStatusClass(leave.status)}>
                        {leave.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="approve-button"
                        onClick={() =>
                          updateStatus(leave.id, 'Approved')
                        }
                      >
                        Approve
                      </button>

                      <button
                        className="reject-button"
                        onClick={() =>
                          updateStatus(leave.id, 'Rejected')
                        }
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeaveApproval;