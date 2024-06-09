
'use client'
import React from 'react'
import HomeSectionOne from '@/Components/HomeComp/HomeSectionOne'
import HomeSectionThree from '@/Components/HomeComp/HomeSectionThree'
import HomeSectionTwo from '@/Components/HomeComp/HomeSectionTwo'
import WorkSection from '@/Components/WorkComp/WorkSection'
import AboutSection from '@/Components/AboutComp/AboutSection'


const Page = () => {
  return (
    <div>
      <HomeSectionOne/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <WorkSection/>
      <AboutSection/>
    
    </div>
  )
}

export default Page

