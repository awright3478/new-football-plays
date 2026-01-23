import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

export const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Football Plays Manager</h1>
        <p>Organize and manage your football plays with ease</p>
        
        <div className="button-group">
          <Link to="/run-plays" className="btn btn-primary">
            Run Plays
          </Link>
          <Link to="/edit-plays" className="btn btn-secondary">
            Edit Plays
          </Link>
          <Link to="/my-plays" className="btn btn-tertiary">
            My Plays
          </Link>
        </div>
      </div>
    </div>
  );
};
