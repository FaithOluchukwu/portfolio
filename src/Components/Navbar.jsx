'use client'
import React from 'react'
import './Navbar.css'
import Link from 'next/link'


const Navbar = () => {

  return (
    <div>
      <div className='myNavBar'>
        <div className='NavDiv'>
            <h1>Faith<span>.</span></h1>
            <ul>
                

                
                <Link href="/">
                <li>Home</li>
                </Link>

                <Link href= {'/about'}>
                <li>About</li>
                </Link>
                
                <Link href={'/works'}>
                <li>Works</li>
                  </Link>
               
                
            </ul>
      


        </div>
      </div>
    </div>
  )
}

export default Navbar
