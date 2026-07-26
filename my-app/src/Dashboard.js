import './App.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard.</p>
        <Link to="/" className="dashboard-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
