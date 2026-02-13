import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <button className="home-btn" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
