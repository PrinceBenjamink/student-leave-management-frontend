import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StudentDashboard.css';

function StudentDashboard() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [showCalendar, setShowCalendar] = useState(false);
  
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

  // Calculate statistics
  const totalAllowed = 20; // Total leave days allowed per year
  const stats = {
    approved: leaveHistory.filter(l => l.status === 'Approved').length,
    pending: leaveHistory.filter(l => l.status === 'Pending').length,
    rejected: leaveHistory.filter(l => l.status === 'Rejected').length,
    available: totalAllowed - leaveHistory.filter(l => l.status === 'Approved').length
  };

  // Mock leave dates for calendar
  const leaveDates = [
    '15-12-2025', '16-12-2025', '17-12-2025', '20-12-2025', '21-12-2025',
    '05-01-2026', '06-01-2026', '10-01-2026', '11-01-2026', '12-01-2026',
    '19-01-2026', '20-01-2026'
  ];

  // Generate calendar from December 2025 to May 2026
  const generateCalendar = () => {
    const months = [];
    for (let i = 0; i < 6; i++) {
      const year = i === 0 ? 2025 : 2026;
      const month = i === 0 ? 11 : i - 1;
      const date = new Date(year, month, 1);
      const monthName = date.toLocaleString('default', { month: 'long' });
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      months.push({ year, month, monthName, firstDay, daysInMonth });
    }
    return months;
  };

  const isLeaveDay = (day, month, year) => {
    const dateToCheck = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (dateToCheck > today) return false;
    
    const dateStr = `${String(day).padStart(2, '0')}-${String(month + 1).padStart(2, '0')}-${year}`;
    return leaveDates.includes(dateStr);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p className="welcome-message">Welcome back! Manage your leave applications here.</p>
      </div>

      <div className="stats-container">
        <div className="stat-card approved">
          <h3>Leaves Taken</h3>
          <div className="stat-number">{stats.approved}</div>
        </div>
        <div className="stat-card pending">
          <h3>Pending Requests</h3>
          <div className="stat-number">{stats.pending}</div>
        </div>
        <div className="stat-card rejected">
          <h3>Rejected Requests</h3>
          <div className="stat-number">{stats.rejected}</div>
        </div>
        <div className="stat-card available">
          <h3>Available Days</h3>
          <div className="stat-number">{stats.available}</div>
        </div>
      </div>

      <div className="dashboard-actions">
        <button className="apply-leave-btn" onClick={() => navigate('/apply-leave')}>
          Apply for Leave
        </button>
        <button className="view-calendar-btn" onClick={() => setShowCalendar(true)}>
          View Leave Calendar
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

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="modal-overlay" onClick={() => setShowCalendar(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>My Leave Calendar</h2>
              <button className="close-btn" onClick={() => setShowCalendar(false)}>&times;</button>
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

export default StudentDashboard;
