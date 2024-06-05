'use client'
import React from 'react'
import './AboutSection.css'
import { IoIosPerson } from "react-icons/io";
import Image from 'next/image';
import image2 from '../images/faithpicture.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const AboutSection = () => {

  AOS.init();

  return (
    <div>
          <div className='aboutSection'>

            <div className='aboutSectionDiv'>

            <div className='imgDiv'>
                  <Image src={image2}  alt='' width={350} className='image2'/>
                  </div>
           <div className='aboutSectionText'>
              <h1>About Me <span><IoIosPerson/></span></h1>
              <p>Hello, I'm Faith Chukwu O., a UI/UX designer and
                 Front-end developer. With a blend of creativity 
                 and technical expertise, I strive to create engaging and intuitive 
                digital experiences that delight users.</p>
                <p> I am on a journey of continous learning and growth. 
                  With strong foundation in UI&UX Design, HTML, CSS, Javascript and Next.js.
                </p> 
                <p>I specialize in creating engagging and responsive web experiences. 
                  I also expertise in TailwindCSS and Next.js, allowing me to 
                  <br/> build dynamic and user friendly interfaces.</p>
      </div>
              
                     
            </div>
          </div>
          <div className='aboutSectionText2' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <h1>My Skills</h1>
                <h2> Design</h2>
                <p> <span> Figma:</span> I use Figma to craft stunning and 
                  user-friendly interfaces, 
                  from wireframes to high-fidelity prototypes.</p>
                  <h2>Front-end Development:</h2>
                  <p> <span>Next.js:</span>  I leverage Next.js to build fast, interactive, and SEO-friendly web applications.
                     <span><br/> HTML & CSS:</span>  I have a strong foundation in HTML and CSS, ensuring that my designs are not only visually appealing but also structurally sound.
                      <span><br/>TailwindCSS:</span> I utilize TailwindCSS to efficiently style web applications, maintaining a clean and consistent design system.
                      <span><br/>JavaScript:</span> I am proficient in JavaScript, enabling me to add dynamic and interactive elements to websites and applications.</p>
                  <h1>My Approach</h1>
                  <p>I believe in a user-centered design approach, 
                    where empathy for the user is at the 
                    core of every design decision. By understanding 
                    the needs and behaviors of users, I create solutions
                     that not only meet but exceed their expectations.</p>

                     <h1> Let's Connect</h1>
                       <div className='contactSection' >
                    <div className='contactDiv' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <p>Got an interesting project?, let's work together! I am always eager to collaborate on exciting projects and contribute my skills to create impactful digital experiences. </p>
                        <div className='emailDiv'> 
                            <p>faitholuchic@gmail.com</p>
                        </div>
                        <div className='phoneDiv'>
                            <p>+2348102533300</p>
                        </div>

                        <div className='whatsappDiv'>
                            <p>Chat Me</p>
                        </div>
                    </div>


                </div>
          </div>
    </div>
  )
}

export default AboutSection
