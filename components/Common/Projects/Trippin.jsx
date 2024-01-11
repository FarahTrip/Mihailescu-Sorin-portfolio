'use client'
import React from 'react'
import Image from 'next/image'
import { CopyBlock,dracula } from "react-code-blocks"; 
import Carousel from '../Carousel';



const Trippin = () => {
  return (
    <div className='mt-4 gap-4 flex flex-col'>
              <Carousel data={['/images/trippin7.png', '/images/trippin.png', '/images/trippin8.png']}></Carousel>
        <p>
This illustrates the initial development phase, highlighting the incorporation of a global audio player. The implementation ensures users can enjoy music seamlessly throughout the entire application.</p>

        <Image width={1000} height={1000} className='w-full' src={'/images/trippin2.gif'}></Image>
        <p>I managed authentication for both front and backend systems, initiating role-based authorization for producers and artists.</p>
        <p> Additionally, I devised a system to validate song ownership by leveraging ACRCloud, determining whether the song is already online or not.</p>
        <Image width={1000} height={1000} className='w-full' src={'/images/trippin3.png'}></Image>
    </div>
  )
}

export default Trippin