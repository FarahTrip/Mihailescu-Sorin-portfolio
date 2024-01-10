import React from 'react'
import Image from 'next/image'

const AudioFeatures = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <p>
Initially, I conducted an analysis to identify essential features for developing a robust content-based recommendation system, drawing insights from Spotify's practices. Subsequently, I carefully selected these features that are really important. I also found the FMA dataset which had a couple of songs with the features that I need in an excel file.</p>
<div className='w-full flex justify-center gap-40'>
<Image className='flex w-80' width={1000} height={1000} src={"/images/trippin4.png"}></Image>
<Image className='flex w-80' width={1000} height={1000} src={"/images/trippin5.png"}></Image>

</div>
<p>
I meticulously prepared the data, extracting a set of audio features that serve as the foundation for predicting the necessary values.</p>
<Image className='flex ' width={1000} height={1000} src={"/images/trippin6.png"}></Image>
    </div>
  )
}

export default AudioFeatures