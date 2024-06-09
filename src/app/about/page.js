'use client'

import React, { useEffect } from 'react';
import AboutSection from '@/Components/AboutComp/AboutSection'

const AboutPage = () => {
  useEffect(() => {
    // This code will only run on the client side
    const element = document.getElementById('my-element');
    // Your other client-side code
  }, []);
  return (
    <div>
      <AboutSection/>
    </div>
  )
}

export default AboutPage
