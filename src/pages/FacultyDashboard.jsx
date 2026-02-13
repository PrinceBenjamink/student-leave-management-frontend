import { useState } from 'react';
import '../styles/FacultyDashboard.css';

function FacultyDashboard() {
  // Mock leave requests data
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      studentName: 'John Doe',
      registerNumber: 'CS2021001',
      fromDate: '2024-01-20',
      toDate: '2024-01-22',
      leaveType: 'Sick Leave',
      reason: 'Fever and cold',
      status: 'Pending'
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      registerNumber: 'CS2021002',
      fromDate: '2024-01-25',
      toDate: '2024-01-26',
      leaveType: 'Personal Leave',
      reason: 'Family emergency',
      status: 'Pending'
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      registerNumber: 'CS2021003',
      fromDate: '2024-02-01',
      toDate: '2024-02-03',
      leaveType: 'Medical Leave',
      reason: 'Medical checkup',
      status: 'Approved'
    }
  ]);

  const handleApprove = (id) => {
    setLeaveRequests(leaveRequests.map(request =>
      request.id === id ? { ...request, status: 'Approved' } : request
    ));
  };

  const handleReject = (id) => {
    setLeaveRequests(leaveRequests.map(request =>
      request.id === id ? { ...request, status: 'Rejected' } : request
    ));
  };

  const getStatusClass = (status) => {
    return `status-badge status-${status.toLowerCase()}`;
  };

  return (
    <div className="faculty-dashboard-container">
      <div className="dashboard-header">
        <h1>Faculty Approval Dashboard</h1>
        <p className="welcome-message">Review and approve student leave requests</p>
      </div>

      <div className="requests-section">
        <h2>Leave Requests</h2>
        <div className="table-container">
          <table className="requests-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Register No.</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Leave Type</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.studentName}</td>
                  <td>{request.registerNumber}</td>
                  <td>{request.fromDate}</td>
                  <td>{request.toDate}</td>
                  <td>{request.leaveType}</td>
                  <td>{request.reason}</td>
                  <td>
                    <span className={getStatusClass(request.status)}>
                      {request.status}
                    </span>
                  </td>
                  <td>
                    {request.status === 'Pending' && (
                      <div className="action-buttons">
                        <button 
                          className="approve-btn"
                          onClick={() => handleApprove(request.id)}
                        >
                          Approve
                        </button>
                        <button 
                          className="reject-btn"
                          onClick={() => handleReject(request.id)}
                        >
                          Reject
                        </button>
                      </div>
                    )}
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

export default FacultyDashboard;
