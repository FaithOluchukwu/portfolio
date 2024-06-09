'use client'

import { useEffect } from 'react';

const WorksPage = () => {

  useEffect(() => {
    // Code that accesses document or window objects
    if (typeof document !== 'undefined') {
      // Your document-related code here
    }
  }, []);

  // let element = null;
  // if (typeof document !== 'undefined') {
  //   // This code only runs in the browser
  //   element = document.getElementById('myElement');
  // }

  
  return (
    <div>
      WorksPage
    </div>
  )
}

export default WorksPage
