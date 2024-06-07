'use client'
import React from 'react'
import './WorkSection.css'
import Image from 'next/image';
import sample1 from '../images/Glowebsite.png'
import sample2 from '../images/Growstore.png'
import sample3 from '../images/Tailwindwebsite.png'
import sample4 from '../images/Netflix.png'
import sample5 from '../images/audio.png'
import { BsPersonWorkspace } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkSection = () => {

    AOS.init();
  return (
    <div>
      <div className='workSection'>

<div className='firstDiv'>
<div className='butDiv'>
        <button>MY <br/>WORKS <span> <BsPersonWorkspace /></span></button>
        </div>
            <h2>Works that I've done for the 
              <br/> past 3 months of continous learning..</h2>
</div>

        <div className='workSampleDiv'>
        <div className='projectDiv' data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000">
        <div className='image1Div '>
          <Image src={sample1}  alt='' width={400}/>
        </div>

          <p data-aos="fade-up"
 data-aos-duration="3000">
          I replicated the Glo website using only HTML and CSS, 
          showcasing my proficiency in front-end web development. 
          In addition to replicating the design, I added responsiveness and 
          dropdown menus using only HTML and CSS, demonstrating my ability to 
          create interactive and user-friendly 
          web interfaces without relying on JavaScript.
            </p>

      </div>

      <div className='projectDiv'>
        <div className='image1Div' data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000">
          <Image src={sample2}  alt='' width={400}/>
        </div>
          <p data-aos="fade-up"
 data-aos-duration="3000">
          I designed this website using Next.js, 
          a JavaScript library for building user interfaces. 
          This project involved creating components, managing state, 
          and implementing responsive 
          design principles to ensure compatibility across devices.
          This project enabled me to showcase my proficiency in React.js and 
          front-end development, highlighting my ability to create modern and responsive web applications.
            </p>

      </div>

      <div className='projectDiv'>
        <div className='image1Div'data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000">
          <Image src={sample3}  alt='' width={400}/>
        </div>

          <p data-aos="fade-up"
 data-aos-duration="3000">
          I designed and replicated this website using Tailwind CSS, 
          a utility-first CSS framework that helped streamline 
          the styling process and improve the overall efficiency of the project. 
          This website showcases my skills in front-end development and UI design.
            </p>
      </div>

      <div className='projectDiv'>
        <div className='image1Div'data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000">
          <Image src={sample4}  alt='' width={400}/>
        </div>

          <p data-aos="fade-up"
 data-aos-duration="3000">
          As part of my design portfolio, I conceptualized and 
          designed a Netflix app using Figma, a collaborative 
          interface design tool.
          This project involved creating wireframes, 
          designing user interfaces, and developing interactive
           prototypes to showcase the app's functionality
           This project allowed me to demonstrate my skills in 
           user interface design, prototyping, and collaboration, showcasing my ability to 
           create engaging and functional digital experiences.
            </p>

      </div>

      <div className='projectDiv'>
        <div className='image1Div'data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000">
          <Image src={sample5}  alt='' width={400}/>
        </div>

          <p data-aos="fade-up"
 data-aos-duration="3000">
          I designed this audio website using Figma. 
          This project involved creating wireframes,
          designing user interfaces, and prototyping interactions 
          for an online platform focused on audio content delivery.
          This project allowed me to showcase my skills in user 
          interface design, prototyping, and collaboration, demonstrating 
          my ability to create engaging and functional 
          digital experiences in the audio content domain.
            </p>

      </div>
        </div>

    </div>

    <div className='contactSection'>
                    <div className='contactDiv' data-aos="fade-up"
 data-aos-duration="3000">

                        <div className='conDiv' data-aos="fade-up"
 data-aos-duration="3000">
                             <button><span><MdContactPhone/></span> Contact</button>
                         </div>
                        <h3>Got an interesting project?, let's work together!</h3>
                        <div className='emailDiv' data-aos="fade-up"
 data-aos-duration="3000"> 
                            <p>faitholuchic@gmail.com</p>
                        </div>
                        <div className='phoneDiv' data-aos="fade-up"
 data-aos-duration="3000">
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

export default WorkSection
