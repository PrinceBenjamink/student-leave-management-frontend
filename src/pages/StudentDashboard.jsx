import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StudentDashboard.css';

function StudentDashboard() {
  const navigate = useNavigate();
  
  // Mock leave history data
  const [leaveHistory] = useState([
    {
      id: 1,
      fromDate: '2024-01-15',
      toDate: '2024-01-17',
      leaveType: 'Sick Leave',
      reason: 'Fever',
      status: 'Approved'
    },
    {
      id: 2,
      fromDate: '2024-02-10',
      toDate: '2024-02-12',
      leaveType: 'Personal Leave',
      reason: 'Family function',
      status: 'Pending'
    },
    {
      id: 3,
      fromDate: '2024-03-05',
      toDate: '2024-03-06',
      leaveType: 'Medical Leave',
      reason: 'Doctor appointment',
      status: 'Rejected'
    }
  ]);

  const getStatusClass = (status) => {
    return `status-badge status-${status.toLowerCase()}`;
  };

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
        <h2>Leave History</h2>
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
              {leaveHistory.map((leave) => (
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
