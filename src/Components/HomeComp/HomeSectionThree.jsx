
'use client'
import React from 'react'
import { IoBookSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import './HomeSectionThree.css'


const HomeSectionThree = () => {
    let element = null;
    if (typeof document !== 'undefined') {
      // This code only runs in the browser
      element = document.getElementById('myElement');
    }
  return (
  <div>
        <div className='skillSection'>
                    <div>
                            <button> Skills  <span><IoBookSharp /></span> </button>
                        </div>
             <div className='skillSetDiv'>

                            <div className='skillSet'>
                            <h2>Front-end Development</h2>
                            <p><span><FaArrowRight /></span>HTML</p>
                            <p><span><FaArrowRight /></span>CSS</p>
                            <p><span><FaArrowRight /></span>JavaScript</p>
                            <p><span><FaArrowRight /></span>React JS</p>
                            <p><span><FaArrowRight /></span>Next JS</p>
                            <p><span><FaArrowRight /></span>TailwindCSS</p>
                            </div>

                            <div className='skillSet'>
                            <h2>Mobile Development</h2>
                            <p><span><FaArrowRight/></span>Figma</p>
                            </div>

                </div>
                </div>


                <div className='contactSection'>
                    <div className='contactDiv'>

                        <div className='conDiv'>
                             <button><span><MdContactPhone/></span> Contact</button>
                         </div>
                        <h3>Got an interesting project?, let s work together!</h3>
                        <div className='emailDiv'> 
                            <p>faitholuchic@gmail.com</p>
                        </div>
                        <div className='phoneDiv'>
                            <p>+2348102533300</p>
                        </div>

                        <div className='whatsappDiv'>
                            <p>WhatsApp Me</p>
                        </div>
                    </div>


                </div>
    </div>
  )
}

export default HomeSectionThree
