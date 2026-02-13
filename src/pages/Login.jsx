import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Route based on selected role
    if (role === 'student') {
      navigate('/student-dashboard');
    } else if (role === 'faculty') {
      navigate('/faculty-dashboard');
    } else if (role === 'hod') {
      navigate('/hod-dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome</h1>
        <p className="login-subtitle">Student Leave Management System</p>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="role">Select Role</label>
            <select 
              id="role" 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              className="form-input"
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="hod">HOD</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
