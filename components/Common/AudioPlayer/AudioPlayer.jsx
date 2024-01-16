import React, { useState, useRef, useEffect } from "react";
import { AudioVisualizer } from "react-audio-visualize";

const AudioPlayer = ({ handleClickSampleAudio }) => {
  const [blob, setBlob] = useState();
  const [audioSrc, setAudioSrc] = useState();
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);
  const audioRef = useRef();
  const visualizerRef = useRef();

  useEffect(() => {
    fetch("/sampleaudio.mp3")
      .then((response) => response.blob())
      .then((blob) => {
        setBlob(blob);
        setAudioSrc(URL.createObjectURL(blob));
      });
  }, []);

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left; //x position within the element.
    const width = rect.right - rect.left;
    const percentage = x / width;
    const newTime = audioRef.current.duration * percentage;
    audioRef.current.currentTime = newTime;
  };

  const handlePlay = () => {
    audioRef.current.play();
    setisPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setisPlaying(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <button
          onClick={handleClickSampleAudio}
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Use this sample
        </button>
        {audioSrc && <audio ref={audioRef} src={audioSrc}></audio>}
        {blob && (
          <div className="w-fit" onClick={handleClick}>
            <AudioVisualizer
              onClick={handleClick}
              ref={visualizerRef}
              blob={blob}
              currentTime={currentTime}
              width={200}
              height={60}
              barWidth={2}
              gap={3}
              barColor={"#cdcdcd"}
              barPlayerColor={"#ff0000"}
              barPlayedColor={"#7b00ff"}
            />
          </div>
        )}
        {!isPlaying ? (
          <button onClick={handlePlay}>Play</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
