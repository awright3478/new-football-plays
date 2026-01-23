import React, { useState, useEffect } from 'react';
import { fetchPlays } from '../api';
import './MyPlays.css';

interface Play {
  id: string;
  name: string;
  description: string;
}

export const MyPlays: React.FC = () => {
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

  if (loading) return <div className="container"><p>Loading your plays...</p></div>;
  if (error) return <div className="container"><p className="error">{error}</p></div>;

  return (
    <div className="container">
      <h1>My Plays</h1>
      <div className="plays-list">
        {plays.length > 0 ? (
          plays.map(play => (
            <div key={play.id} className="play-item">
              <div className="play-info">
                <h2>{play.name}</h2>
                <p>{play.description}</p>
              </div>
              <div className="play-actions">
                <button className="btn btn-secondary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>You haven't created any plays yet.</p>
        )}
      </div>
    </div>
  );
};
