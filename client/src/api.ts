import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export async function fetchPlays() {
  try {
    const response = await axios.get(`${API_BASE_URL}/plays`);
    return response.data;
  } catch (error) {
    console.error('Error fetching plays:', error);
    throw error;
  }
}

export async function createPlay(play: any) {
  try {
    const response = await axios.post(`${API_BASE_URL}/plays`, play);
    return response.data;
  } catch (error) {
    console.error('Error creating play:', error);
    throw error;
  }
}
