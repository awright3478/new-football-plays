import React, { useState, useEffect } from 'react';
import { fetchPlays } from '../api';
import './RunPlays.css';

interface Play {
  id: string;
  name: string;
  description: string;
}

export const RunPlays: React.FC = () => {
  const [plays, setPlays] = useState<Play[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPlays = async () => {
      try {
        const data = await fetchPlays();
        setPlays(data);
      } catch (err) {
        setError('Failed to load plays');
      } finally {
        setLoading(false);
      }
    };

    loadPlays();
  }, []);

  if (loading) return <div className="container"><p>Loading plays...</p></div>;
  if (error) return <div className="container"><p className="error">{error}</p></div>;

  return (
    <div className="container">
      <h1>Run Plays</h1>
      <div className="plays-grid">
        {plays.length > 0 ? (
          plays.map(play => (
            <div key={play.id} className="play-card">
              <h2>{play.name}</h2>
              <p>{play.description}</p>
              <button className="btn btn-primary">Run</button>
            </div>
          ))
        ) : (
          <p>No plays available. Create one in Edit Plays!</p>
        )}
      </div>
    </div>
  );
};
