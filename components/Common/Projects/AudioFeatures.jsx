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
<p>Here you can find the google collabs file that was created to build the  : <a className='text-blue-600' target='_blank'  href="https://colab.research.google.com/drive/1-oy-Kg1udKYedSCeOiHXKb3AU1YN6cuu">feature extraction process</a></p>
<Image className='flex ' width={1000} height={1000} src={"/images/trippin6.png"}></Image>
<p>After I got all the features that I needed I started training the model and experimenting with differents keras models. I come to the conclusion that a neural network will be the best fit for this purpose due to the complexity of the algorithm.</p>
<p>See training code <a target='_blank' className='text-blue-600' href='https://colab.research.google.com/drive/1wK-F-8--5SciCLPIwkP8NeLFqq5yGTle'>here</a></p>

    </div>
  )
}

export default AudioFeatures