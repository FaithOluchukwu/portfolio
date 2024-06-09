'use client'
import WorkSection from '@/Components/WorkComp/WorkSection'
import { useEffect } from 'react';

const page = () => {

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
      <WorkSection/>
    </div>
  )
}

export default page
