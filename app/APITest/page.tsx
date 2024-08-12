'use client'

import axios from 'axios';
import { useEffect } from 'react';

const API_URL = 'https://mmaapi.p.rapidapi.com/api/mma/unique-tournament/19906/';
const API_KEY = 'c1dad428bbmsh5e5394b0b725461p153502jsn65a9f852101b'; // Use your actual API key here

const fetchMmaEvents = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'X-Rapidapi-Key': API_KEY,
        'X-Rapidapi-Host': 'mmaapi.p.rapidapi.com',
      },
    });
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error fetching MMA events:', error);
  }
};

const APITest = () => {
  useEffect(() => {
    fetchMmaEvents();
  }, []);

  return (
    <div>
      <h1>MMA Events</h1>
      {/* Your UI elements */}
    </div>
  );
};

export default APITest;
