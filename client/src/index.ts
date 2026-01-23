import './styles.css';
import { fetchPlays } from './api';

const app = document.getElementById('app');
if (app) {
  app.innerHTML = '<h1>Football PLays Manager</h1><p>Loading plays...</p>';
}

// Fetch plays from API
fetchPlays().then(plays => {
  if (app) {
    app.innerHTML = `
      <h1>Hello Andrew!</h1>
      <p>Connected to API on localhost:5000</p>
      <div id="plays-container"></div>
    `;
  }
}).catch(error => {
  console.error('Error fetching plays:', error);
  if (app) {
    app.innerHTML = `
      <h1>Football Plays Manager</h1>
      <p style="color: red;">Failed to connect to API</p>
    `;
  }
});
