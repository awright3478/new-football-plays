import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { RunPlays } from './pages/RunPlays';
import { EditPlays } from './pages/EditPlays';
import { MyPlays } from './pages/MyPlays';
import './App.css';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="nav-brand">
            Football Plays
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/run-plays">Run Plays</Link>
            <Link to="/edit-plays">Edit Plays</Link>
            <Link to="/my-plays">My Plays</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/run-plays" element={<RunPlays />} />
            <Route path="/edit-plays" element={<EditPlays />} />
            <Route path="/my-plays" element={<MyPlays />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
