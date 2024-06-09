'use client'
import React from 'react';
import AboutSection from '@/Components/AboutComp/AboutSection'

const page = () => {
  // useEffect(() => {
  //   // This code will only run on the client side
  //   const element = document.getElementById('my-element');
  //   // Your other client-side code
  // }, []);

  return (
    <div>
      <AboutSection/>
    </div>
  )
}

export default page
