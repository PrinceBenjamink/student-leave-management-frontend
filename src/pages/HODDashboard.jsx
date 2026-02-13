import { useState } from 'react';
import '../styles/HODDashboard.css';

function HODDashboard() {
  // Mock faculty-approved leave requests
  const [approvedRequests, setApprovedRequests] = useState([
    {
      id: 1,
      studentName: 'Alice Brown',
      registerNumber: 'CS2021004',
      fromDate: '2024-02-10',
      toDate: '2024-02-12',
      leaveType: 'Sick Leave',
      reason: 'Medical treatment',
      facultyStatus: 'Approved',
      hodStatus: 'Pending'
    },
    {
      id: 2,
      studentName: 'Bob Wilson',
      registerNumber: 'CS2021005',
      fromDate: '2024-02-15',
      toDate: '2024-02-17',
      leaveType: 'Personal Leave',
      reason: 'Family wedding',
      facultyStatus: 'Approved',
      hodStatus: 'Pending'
    },
    {
      id: 3,
      studentName: 'Carol Davis',
      registerNumber: 'CS2021006',
      fromDate: '2024-02-20',
      toDate: '2024-02-21',
      leaveType: 'Emergency Leave',
      reason: 'Personal emergency',
      facultyStatus: 'Approved',
      hodStatus: 'Granted'
    }
  ]);

  const handleGrant = (id) => {
    setApprovedRequests(approvedRequests.map(request =>
      request.id === id ? { ...request, hodStatus: 'Granted' } : request
    ));
  };

  const handleReject = (id) => {
    setApprovedRequests(approvedRequests.map(request =>
      request.id === id ? { ...request, hodStatus: 'Rejected' } : request
    ));
  };

  const getStatusClass = (status) => {
    return `status-badge status-${status.toLowerCase()}`;
  };

  return (
    <div className="hod-dashboard-container">
      <div className="dashboard-header">
        <h1>HOD Grant Dashboard</h1>
        <p className="welcome-message">Final approval for faculty-approved leave requests</p>
      </div>

      <div className="requests-section">
        <h2>Faculty Approved Requests</h2>
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
                <th>Faculty Status</th>
                <th>HOD Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {approvedRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.studentName}</td>
                  <td>{request.registerNumber}</td>
                  <td>{request.fromDate}</td>
                  <td>{request.toDate}</td>
                  <td>{request.leaveType}</td>
                  <td>{request.reason}</td>
                  <td>
                    <span className={getStatusClass(request.facultyStatus)}>
                      {request.facultyStatus}
                    </span>
                  </td>
                  <td>
                    <span className={getStatusClass(request.hodStatus)}>
                      {request.hodStatus}
                    </span>
                  </td>
                  <td>
                    {request.hodStatus === 'Pending' && (
                      <div className="action-buttons">
                        <button 
                          className="grant-btn"
                          onClick={() => handleGrant(request.id)}
                        >
                          Grant Leave
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

export default HODDashboard;
