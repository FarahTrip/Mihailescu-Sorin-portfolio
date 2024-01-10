import React from 'react'
import Image from 'next/image'
import { CopyBlock,dracula } from "react-code-blocks"; 
import trippin3 from "/public/images/trippin3.png"
import trippin2 from "/public/images/trippin2.gif"


const Trippin = () => {
  return (
    <div className='mt-4 gap-4 flex flex-col'>
        <p>
This illustrates the initial development phase, highlighting the incorporation of a global audio player. The implementation ensures users can enjoy music seamlessly throughout the entire application.</p>
        <Image width={1000} height={100} className='w-full' src={trippin2}></Image>
        <p>I managed authentication for both front and backend systems, initiating role-based authorization for producers and artists.</p>
        <p> Additionally, I devised a system to validate song ownership by leveraging ACRCloud, determining whether the song is already online or not.</p>
        <Image width={1000} height={100} className='w-full' src={trippin3}></Image>
    </div>
  )
}

export default Trippin