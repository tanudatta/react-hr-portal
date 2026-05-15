import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/EmployeeList.css';

function EmployeeList() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3001/employees'
      );
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
      alert('Unable to load employee data.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this employee?'
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:3001/employees/${id}`
      );

      fetchEmployees();
      alert('Employee deleted successfully.');
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Unable to delete employee.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  return (
    <div className="employee-list-page">
      <div className="employee-list-card">
        <div className="employee-list-header">
          <h1>Employee List</h1>
          <p>All registered employees in the HR Portal.</p>
        </div>

        {loading ? (
          <p>Loading employees...</p>
        ) : employees.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          <div className="table-wrapper">
            <table className="employee-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>
                      {employee.firstName} {employee.lastName}
                    </td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.department}</td>
                    <td>{employee.gender}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(employee.id)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-button"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Delete
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

export default EmployeeList;