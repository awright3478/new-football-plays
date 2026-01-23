import React, { useState } from 'react';
import { createPlay } from '../api';
import './EditPlays.css';

export const EditPlays: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createPlay(formData);
      setMessage('Play created successfully!');
      setFormData({ name: '', description: '' });
    } catch (err) {
      setMessage('Failed to create play');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Edit Plays</h1>
      <form className="play-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Play Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter play name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter play description"
            rows={5}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Creating...' : 'Create Play'}
        </button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};
