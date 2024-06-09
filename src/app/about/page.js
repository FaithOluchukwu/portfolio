'use client'

import React, { useEffect } from 'react';


const AboutPage = () => {
  useEffect(() => {
    // This code will only run on the client side
    const element = document.getElementById('my-element');
    // Your other client-side code
  }, []);
  return (
    <div>
      AboutPage
    </div>
  )
}

export default AboutPage
