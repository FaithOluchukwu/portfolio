'use client'
import React from 'react'
import './HomeSectionOne.css'
import { PiHandWavingThin } from 'react-icons/pi';
import { IoLogoLinkedin } from 'react-icons/io5';
import { TfiTwitter } from 'react-icons/tfi';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import image1 from '../images/faithpicture.jpg'
import Link from 'next/link';

const HomeSectionOne = () => {
  return (
    <div>
      <div className='homeDiv'>
    <div className='homeSecDiv'>
      <div className='homeSecText'>
      <h5>Hello <span><PiHandWavingThin/></span> </h5>
                <h1>I'm a UI&UX Designer, <br/>Front-end developer,<br/> based in PH, Nigeria. NG</h1>
                <p> I am a front-end developer on a journey of continous learning <br/> and growth. 
                  With strong foundation in HTML, CSS and <br/> Javascript.
                </p> 
                <p>I specialize in creating engagging and responsive web experiences. 
                  <br/>I also expertise in TailwindCSS and React.js, allowing me to 
                  <br/> build dynamic and user friendly interfaces.</p>
        <div className='cvDiv'>
        <Link href="https://docs.google.com/document/d/1M4AH47r-P0qLL70w7CSa30569JAX81i_nqcXKiastqs/edit?usp=sharing">
        <button>View CV/Resume</button>
                </Link>
       
        <p><IoLogoLinkedin/></p>
        <p><TfiTwitter/></p>
        <p><FaSquareGithub/></p>
        <p>< FaWhatsapp/></p>
        </div>
       
      </div>
      
                
                <div className='imgDiv'>
                  <Image src={image1}  alt='' width={350} className='images'/>
                  </div>

              </div>
        
      </div>
    </div>
  )
}

export default HomeSectionOne
