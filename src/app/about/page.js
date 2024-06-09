'use client'

import React, { useEffect } from 'react';
import AboutSection from '@/Components/AboutComp/AboutSection'

const Aboutpage = () => {
  let element = null;
  if (typeof document !== 'undefined') {
    // This code only runs in the browser
    element = document.getElementById('myElement');
  }

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

export default Aboutpage
