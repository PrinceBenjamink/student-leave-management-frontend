import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import ApplyLeave from './pages/ApplyLeave';
import FacultyDashboard from './pages/FacultyDashboard';
import HODDashboard from './pages/HODDashboard';
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/apply-leave" element={<ApplyLeave />} />
            <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
            <Route path="/hod-dashboard" element={<HODDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
