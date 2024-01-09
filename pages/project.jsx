'use client'
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';
import Trippin from '../components/Common/Projects/Trippin';
import Link from 'next/link';
import AudioFeatures from '../components/Common/Projects/AudioFeatures'

const Project = () => {
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    // Fetch project details based on the project name
    if (name) {
      fetch(`/api/projects?name=${name}`)
        .then((response) => response.json())
        .then((data) => setProjectDetails(data))
        .catch((error) => console.error('Error fetching project details:', error));
    }
  }, []);

  return (
    <div>
      {projectDetails ? (
        <>
        <div className='text-white h-1/5 flex relative'>
 
            <div className='absolute z-40  left-[3.5%] bottom-[9%] flex-col flex bg-[#181818] p-4 rounded-2xl border-[1px] border-[#7b00ff]'>
                <h3 className='text-xl'>{'Project name : '  + ' ' + projectDetails.name}</h3>
            </div>                       
            <Image
  width={1000}
  height={1000}
  className='w-full backdrop-blur-xl blur-sm flex object-cover h-72 object-top brightness-75'
  src={projectDetails.image}
></Image>

        <Link href='/' className='absolute border-[1px] border-[#7b00ff] w-12 h-12 rounded-full flex bg-[#181818] left-[1%] top-[3%] items-center justify-center'><IoIosArrowBack /></Link>
        </div>
        <div className='px-10 text-xl text-white  py-10'>
            <p className=''>{projectDetails.description}</p>
              {
              (projectDetails.id === 1 && <Trippin></Trippin>)
              }
              {
              (projectDetails.id === 2 && <AudioFeatures></AudioFeatures>)
              }
        </div>
                </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Project;
