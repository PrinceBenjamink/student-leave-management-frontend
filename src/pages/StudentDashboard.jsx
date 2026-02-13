import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StudentDashboard.css';

function StudentDashboard() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  
  // Mock leave history data
  const [leaveHistory] = useState([
    {
      id: 1,
      fromDate: '15-01-2024',
      toDate: '17-01-2024',
      leaveType: 'Sick Leave',
      reason: 'Fever',
      status: 'Approved'
    },
    {
      id: 2,
      fromDate: '10-02-2024',
      toDate: '12-02-2024',
      leaveType: 'Personal Leave',
      reason: 'Family function',
      status: 'Pending'
    },
    {
      id: 3,
      fromDate: '05-03-2024',
      toDate: '06-03-2024',
      leaveType: 'Medical Leave',
      reason: 'Doctor appointment',
      status: 'Rejected'
    }
  ]);

  const getStatusClass = (status) => {
    return `status-badge status-${status.toLowerCase()}`;
  };

  // Filter leave history based on selected filter
  const filteredLeaves = filter === 'All' 
    ? leaveHistory 
    : leaveHistory.filter(leave => leave.status === filter);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p className="welcome-message">Welcome back! Manage your leave applications here.</p>
      </div>

      <div className="dashboard-actions">
        <button className="apply-leave-btn" onClick={() => navigate('/apply-leave')}>
          Apply for Leave
        </button>
      </div>

      <div className="leave-history-section">
        <div className="section-header">
          <h2>Leave History</h2>
          <div className="filter-buttons">
            <button 
              className={filter === 'All' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('All')}
            >
              All
            </button>
            <button 
              className={filter === 'Pending' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('Pending')}
            >
              Pending
            </button>
            <button 
              className={filter === 'Approved' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('Approved')}
            >
              Approved
            </button>
            <button 
              className={filter === 'Rejected' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('Rejected')}
            >
              Rejected
            </button>
          </div>
        </div>
        <div className="table-container">
          <table className="leave-table">
            <thead>
              <tr>
                <th>From Date</th>
                <th>To Date</th>
                <th>Leave Type</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaves.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.fromDate}</td>
                  <td>{leave.toDate}</td>
                  <td>{leave.leaveType}</td>
                  <td>{leave.reason}</td>
                  <td>
                    <span className={getStatusClass(leave.status)}>
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
