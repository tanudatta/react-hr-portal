import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import HRDashboard from './pages/HRDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import ApplyLeave from './pages/ApplyLeave';
import LeaveStatus from './pages/LeaveStatus';
import LeaveApproval from './pages/LeaveApproval';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard Pages */}
        <Route path="/hr-dashboard" element={<HRDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />

        {/* Employee Management */}
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
        <Route path="/apply-leave" element={<ApplyLeave />} />
        <Route path="/leave-status" element={<LeaveStatus />} />
        <Route path="/leave-approval" element={<LeaveApproval />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;