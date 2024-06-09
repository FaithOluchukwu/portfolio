'use client'
import WorkSection from '@/Components/WorkComp/WorkSection'
import React from 'react'

const Workpage = () => {
  let element = null;
  if (typeof document !== 'undefined') {
    // This code only runs in the browser
    element = document.getElementById('myElement');
  }

  
  return (
    <div>
      <WorkSection/>
    </div>
  )
}

export default Workpage
