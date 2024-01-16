import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import Typewriter from "typewriter-effect";
import AttachedFile from "./AudioPlayer/AttachedFile";
import { keyFromNumbersToString } from "../../utils/audioCalculations";
const byteSize = require("byte-size");

const AudioFeatTest = () => {
  const [isLoading, setisLoading] = useState(false);
  const [analyzedResponse, setanalyzedResponse] = useState();
  const [file, setfile] = useState();
  const [error, seterror] = useState();

  const handleBack = () => {
    setanalyzedResponse(null);
  };

  const uploadMp3 = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".mp3";

    setfile(input);

    input.onchange = () => {
      const file = input.files[0];
      setisLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      axios
        .post("https://recsys.fly.dev/analyze", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setanalyzedResponse(response.data);
          seterror(false);
          console.log(response.data);
        })
        .catch((error) => {
          setanalyzedResponse(null);
          setisLoading(false);
          seterror(true);
          console.error(error);
        });
    };

    input.click();
  };

  const useSampleAudio = async () => {
    setisLoading(true);
    fetch("/sampleaudio.mp3")
      .then((response) => response.blob())
      .then((blob) => {
        const formData = new FormData();
        formData.append("file", blob, "sampleaudio.mp3");

        axios
          .post("https://recsys.fly.dev/analyze", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            setanalyzedResponse(response.data);
            seterror(false);
            console.log(response.data);
          })
          .catch((error) => {
            setanalyzedResponse(null);
            setisLoading(false);
            seterror(true);
            console.error(error);
          });
      });
  };

  useEffect(() => {
    setisLoading(false);
  }, [analyzedResponse]);

  return (
    <div className="w-full flex bg-[#1E1E1E] justify-center items-center rounded-lg border-[1px] border-[#7b00ff]">
      <div className="flex flex-col justify-center items-center gap-4 m-4 relative">
        {analyzedResponse && (
          <button
            type="button"
            class="text-gray-900 bg-white border absolute left-0 top-0 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={handleBack}
          >
            Back
          </button>
        )}
        <h2 className="text-2xl">Test the AI </h2>
        {!isLoading && analyzedResponse && (
          <AttachedFile
            name={file?.files[0].name || "The sample audio provided - E minor"}
            mb={byteSize(file?.files[0].size, { long: "megabyte" }).value || 8}
          ></AttachedFile>
        )}

        {!analyzedResponse ? (
          <div className="flex items-center gap-4">
            {!isLoading ? (
              <>
                {" "}
                <button
                  onClick={uploadMp3}
                  class="relative w-fit inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Upload mp3
                  </span>
                </button>
                <p>or</p>
                <AudioPlayer
                  handleClickSampleAudio={useSampleAudio}
                ></AudioPlayer>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center gap-4">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                <Typewriter
                  options={{
                    strings: [
                      "Take a little break, the AI is analyzing the audio.",
                      "Bip bop boop, our AI is thinking!",
                      "Just a couple of more seconds to look at your song",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="w-full flex text-sm gap-12 my-8">
            <input type="file" id="inputFile" className="hidden" />
            <div className="flex w-1/2 flex-col gap-8">
              <div className="flex justify-between items-center w-full gap-6">
                <p className="flex">Danceability</p>
                <ProgressBar
                  className=""
                  completed={(analyzedResponse?.energy ?? 0) * 100}
                  bgColor="#7b00ff"
                  height="6px"
                  width="100px"
                  isLabelVisible={false}
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="flex">Key</p>
                <div className=" flex trippin-gradient2 p-[1px] rounded-md">
                  <div className="flex bg-trippin-gray px-2 rounded-md">
                    {keyFromNumbersToString({
                      key: analyzedResponse?.key,
                      mode: analyzedResponse?.mode,
                    })}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-between items-center w-full gap-6">
                  <p className="flex">Energy</p>
                  <ProgressBar
                    className=""
                    completed={(analyzedResponse?.energy ?? 0) * 100}
                    bgColor="#7b00ff"
                    height="6px"
                    width="100px"
                    isLabelVisible={false}
                  />
                </div>
              </div>
            </div>
            <div className="flex  gap-8 flex-col">
              <div className="flex justify-between items-center w-full  gap-6">
                <p className="flex">Liveness</p>
                <ProgressBar
                  className=""
                  completed={(analyzedResponse?.danceability ?? 0) * 100}
                  bgColor="#7b00ff"
                  height="6px"
                  width="100px"
                  isLabelVisible={false}
                />
              </div>{" "}
              <div className="flex justify-between items-center w-full gap-6">
                <p className="flex">Acousticness</p>
                <ProgressBar
                  className=""
                  completed={(analyzedResponse?.energy ?? 0) * 100}
                  bgColor="#7b00ff"
                  height="6px"
                  width="100px"
                  isLabelVisible={false}
                />
              </div>{" "}
              <div className="flex justify-between items-center w-full gap-6">
                <p className="flex">Valence</p>
                <ProgressBar
                  className=""
                  completed={(analyzedResponse?.valence ?? 0) * 100}
                  bgColor="#7b00ff"
                  height="6px"
                  width="100px"
                  isLabelVisible={false}
                />
              </div>
            </div>
            <div className="flex  gap-8 flex-col">
              <div className="flex justify-between items-center w-full gap-6">
                <p className="flex">Instrumentalness</p>
                <ProgressBar
                  className=""
                  completed={(analyzedResponse?.danceability ?? 0) * 100}
                  bgColor="#7b00ff"
                  height="6px"
                  width="100px"
                  isLabelVisible={false}
                />
              </div>{" "}
              <div className="flex justify-between items-center w-full gap-6">
                <p className="flex">Speechiness</p>
                <ProgressBar
                  className=""
                  completed={(analyzedResponse?.energy ?? 0) * 100}
                  bgColor="#7b00ff"
                  height="6px"
                  width="100px"
                  isLabelVisible={false}
                />
              </div>{" "}
              <div className="flex justify-between items-center w-full gap-6">
                <p className="flex">Duration in ms</p>
                <p>{Math.trunc(analyzedResponse?.duration_ms)}</p>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div
            class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>

            <div>
              <span class="font-medium"> Hey!</span> The AI is probably
              sleeping, try again to wake him up.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioFeatTest;
