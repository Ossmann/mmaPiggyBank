'use client'

import { useEffect } from 'react';
import { storePageVisit } from '../data/data_submit';

const VisitorCount = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        console.log('i fire once');
        const pageUrl = window.location.pathname; // Get the current page URL
        await storePageVisit(pageUrl); // Call the storePageVisit function directly
      } catch (error) {
        console.error("Error tracking page visit:", error);
      }
    };

    trackVisit();
  }, []);

  return null; // Nothing is rendered to the UI
};

export default VisitorCount;
