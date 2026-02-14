import { useState } from 'react';
import '../styles/HODDashboard.css';

function HODDashboard() {
  const [filter, setFilter] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  
  // Mock faculty-approved leave requests
  const [approvedRequests, setApprovedRequests] = useState([
    {
      id: 1,
      studentName: 'Alice Brown',
      rollNumber: '24CS004',
      fromDate: '10-02-2024',
      toDate: '12-02-2024',
      leaveType: 'Sick Leave',
      reason: 'Medical treatment',
      facultyStatus: 'Approved',
      hodStatus: 'Pending'
    },
    {
      id: 2,
      studentName: 'Bob Wilson',
      rollNumber: '24CS005',
      fromDate: '15-02-2024',
      toDate: '17-02-2024',
      leaveType: 'Personal Leave',
      reason: 'Family wedding',
      facultyStatus: 'Approved',
      hodStatus: 'Pending'
    },
    {
      id: 3,
      studentName: 'Carol Davis',
      rollNumber: '24CS006',
      fromDate: '20-02-2024',
      toDate: '21-02-2024',
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

  // Filter requests based on HOD status
  const filteredRequests = filter === 'All' 
    ? approvedRequests 
    : approvedRequests.filter(request => request.hodStatus === filter);

  // Calculate statistics
  const stats = {
    pending: approvedRequests.filter(r => r.hodStatus === 'Pending').length,
    granted: approvedRequests.filter(r => r.hodStatus === 'Granted').length,
    rejected: approvedRequests.filter(r => r.hodStatus === 'Rejected').length,
    total: approvedRequests.length
  };

  // Mock student leave history for calendar
  const getStudentLeaveHistory = (rollNumber) => {
    const leaveHistoryData = {
      '24CS004': [
        '10-12-2025', '11-12-2025', '12-12-2025', '22-12-2025', '23-12-2025',
        '07-01-2026', '08-01-2026', '18-01-2026', '19-01-2026', '20-01-2026'
      ],
      '24CS005': [
        '15-12-2025', '16-12-2025', '17-12-2025', '26-12-2025', '27-12-2025',
        '11-01-2026', '12-01-2026', '22-01-2026', '23-01-2026'
      ],
      '24CS006': [
        '20-12-2025', '21-12-2025', '28-12-2025', '29-12-2025',
        '06-01-2026', '07-01-2026', '14-01-2026', '15-01-2026'
      ]
    };
    return leaveHistoryData[rollNumber] || [];
  };

  const handleViewCalendar = (student) => {
    setSelectedStudent(student);
    setShowCalendar(true);
  };

  const closeCalendar = () => {
    setShowCalendar(false);
    setSelectedStudent(null);
  };

  // Generate calendar from December 2025 to May 2026
  const generateCalendar = () => {
    const months = [];
    
    for (let i = 0; i < 6; i++) {
      const year = i === 0 ? 2025 : 2026;
      const month = i === 0 ? 11 : i - 1; // Dec=11, Jan=0, Feb=1, etc.
      const date = new Date(year, month, 1);
      const monthName = date.toLocaleString('default', { month: 'long' });
      
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      months.push({ year, month, monthName, firstDay, daysInMonth });
    }
    return months;
  };

  const isLeaveDay = (day, month, year) => {
    if (!selectedStudent) return false;
    
    // Check if the date is in the past or today
    const dateToCheck = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (dateToCheck > today) return false;
    
    const leaveHistory = getStudentLeaveHistory(selectedStudent.rollNumber);
    const dateStr = `${String(day).padStart(2, '0')}-${String(month + 1).padStart(2, '0')}-${year}`;
    return leaveHistory.includes(dateStr);
  };

  return (
    <div className="hod-dashboard-container">
      <div className="dashboard-header">
        <h1>HOD Grant Dashboard</h1>
        <p className="welcome-message">Final approval for faculty-approved leave requests</p>
      </div>

      <div className="stats-container">
        <div className="stat-card pending">
          <h3>Pending Approval</h3>
          <div className="stat-number">{stats.pending}</div>
        </div>
        <div className="stat-card granted">
          <h3>Granted Today</h3>
          <div className="stat-number">{stats.granted}</div>
        </div>
        <div className="stat-card rejected">
          <h3>Rejected Today</h3>
          <div className="stat-number">{stats.rejected}</div>
        </div>
        <div className="stat-card total">
          <h3>Total Requests</h3>
          <div className="stat-number">{stats.total}</div>
        </div>
      </div>

      <div className="requests-section">
        <div className="section-header">
          <h2>Faculty Approved Requests</h2>
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
              className={filter === 'Granted' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('Granted')}
            >
              Granted
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
          <table className="requests-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Roll No.</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Leave Type</th>
                <th>Reason</th>
                <th>Faculty Status</th>
                <th>HOD Status</th>
                {(filter === 'All' || filter === 'Pending') && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id} onClick={() => handleViewCalendar(request)} style={{ cursor: 'pointer' }}>
                  <td>{request.studentName}</td>
                  <td>{request.rollNumber}</td>
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
                  {(filter === 'All' || filter === 'Pending') && (
                    <td onClick={(e) => e.stopPropagation()}>
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
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && selectedStudent && (
        <div className="modal-overlay" onClick={closeCalendar}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Leave History - {selectedStudent.studentName} ({selectedStudent.rollNumber})</h2>
              <button className="close-btn" onClick={closeCalendar}>&times;</button>
            </div>
            <div className="calendar-container">
              {generateCalendar().map((monthData, idx) => (
                <div key={idx} className="month-calendar">
                  <h3>{monthData.monthName} {monthData.year}</h3>
                  <div className="calendar-grid">
                    <div className="day-header">Sun</div>
                    <div className="day-header">Mon</div>
                    <div className="day-header">Tue</div>
                    <div className="day-header">Wed</div>
                    <div className="day-header">Thu</div>
                    <div className="day-header">Fri</div>
                    <div className="day-header">Sat</div>
                    
                    {[...Array(monthData.firstDay)].map((_, i) => (
                      <div key={`empty-${i}`} className="calendar-day empty"></div>
                    ))}
                    
                    {[...Array(monthData.daysInMonth)].map((_, i) => {
                      const day = i + 1;
                      const isLeave = isLeaveDay(day, monthData.month, monthData.year);
                      return (
                        <div 
                          key={day} 
                          className={`calendar-day ${isLeave ? 'leave-day' : ''}`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HODDashboard;
