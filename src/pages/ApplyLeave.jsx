import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ApplyLeave.css';

function ApplyLeave() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    registerNumber: '',
    fromDate: '',
    toDate: '',
    leaveType: 'Sick Leave',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in real app, this would send data to backend
    alert('Leave application submitted successfully!');
    navigate('/student-dashboard');
  };

  return (
    <div className="apply-leave-container">
      <div className="apply-leave-card">
        <h1>Apply for Leave</h1>
        <p className="form-subtitle">Fill in the details below to submit your leave request</p>

        <form onSubmit={handleSubmit} className="leave-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="registerNumber">Register Number *</label>
              <input
                type="text"
                id="registerNumber"
                name="registerNumber"
                value={formData.registerNumber}
                onChange={handleChange}
                placeholder="Enter register number"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fromDate">From Date *</label>
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="toDate">To Date *</label>
              <input
                type="date"
                id="toDate"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="leaveType">Leave Type *</label>
            <select
              id="leaveType"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="Sick Leave">Sick Leave</option>
              <option value="Personal Leave">Personal Leave</option>
              <option value="Medical Leave">Medical Leave</option>
              <option value="Emergency Leave">Emergency Leave</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason *</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Enter reason for leave"
              className="form-input textarea"
              rows="4"
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={() => navigate('/student-dashboard')}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyLeave;
