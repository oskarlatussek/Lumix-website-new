import Link from 'next/link'
import { FiCheck, FiPhone } from 'react-icons/fi'
import { PiHandHeartBold } from 'react-icons/pi'
import {
  HiOutlineCalculator,
  HiOutlineHome,
  HiOutlineClipboard,
} from 'react-icons/hi'
import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

interface SubpageLandingpageProps {
  title?: string
  yellowTitle?: string
  pretext?: string
  bullet1?: string
  bullet2?: string
  bullet3?: string
  bullet4?: string
  bullet5?: string
  bullet6?: string
  bullet7?: string
  bullet8?: string
  logo1?: string
  logo2?: string
  logo3?: string
  logo4?: string
  logo5?: string
  logo6?: string
  text?: string
  video?: string
  image?: string
  link?: string
  linkText?: string
  left?: boolean
  icons?: boolean
  icons2?: boolean
}

const SubpageLandingpages = ({
  icons,
  icons2,
  title,
  yellowTitle,
  pretext,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  bullet5,
  bullet6,
  bullet7,
  bullet8,
  text,
  video,
  image,
  linkText,
  link,
  left,
}: SubpageLandingpageProps) => {
  const [isClient, setIsClient] = useState(false)
  const foregroundRef = useRef(null)
  const backgroundRef = useRef(null)
  const router = useRouter() 

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {

    // Function to update the height of the background div
    function updateHeight() {
      const foregroundDiv = foregroundRef.current
      const backgroundDiv = backgroundRef.current


      // Ensure that the DOM elements are fully loaded
      if (foregroundDiv && backgroundDiv) {
        const foregroundHeight = foregroundDiv.clientHeight
        backgroundDiv.style.height = `${foregroundHeight}px`
      }
    }
    setTimeout(() => {
      updateHeight()
    }, 500)
    // Call the function when the window is fully loaded and whenever the window is resized
    window.addEventListener('load', updateHeight)
    window.addEventListener('resize', updateHeight)

    // Call the function once to handle the initial dimensions
    document.addEventListener('DOMContentLoaded', () => {
      updateHeight()
    })

    // Clean up the event listeners
    return () => {
      window.removeEventListener('load', updateHeight)
      window.removeEventListener('resize', updateHeight)
    }
  }, [router])

  return (
    <>
      <div className=" w-full p-2 sm:p-5">
        {isClient && (
          <div
            ref={backgroundRef}
            className=" w-full sticky top-2 sm:top-5 flex items-center min-h-screen"
          >
            {video && (
              <video
                className="object-cover h-full w-full rounded-xl background-video"
                playsInline
                autoPlay
                loop
                muted
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {image && (
              <img
                src={image}
                className="object-cover h-full w-full rounded-xl"
              />
            )}
          </div>
        )}{' '}
        {isClient && (
          <div
            ref={foregroundRef}
            className={` w-full sticky min-h-screen top-0 sm:top-10 flex items-center ${
              left ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className="hyphenate w-full sectionHeight h-full min-h-screen lg:w-1/2 bg-white/30 rounded-xl backdrop-blur-lg flex flex-col space-y-5 items-center justify-center text-center p-5">
              <p className=" leading-tight font-semibold text-[#1E4E5F] text-4xl sm:text-5xl xl:text-6xl">
                <span className=" leading-tight">
                  <span className=" text-yellow-400 drop-shadow-none font-bold">
                    {yellowTitle}
                  </span>
                  {title}
                </span>
              </p>
              <div className="flex flex-col">
                <p className="font-medium text-sm sm:text-base lg:text-lg text-left sm:text-center max-w-2xl text-zinc-800">
                  {pretext}
                </p>
                {bullet1 && (
                  <div className="flex items-center space-x-3 text-lg py-1">
                    <FiCheck className="text-yellow-400 text-3xl" />
                    <span className="font-medium text-sm sm:text-base lg:text-lg text-left sm:text-center max-w-2xl text-zinc-800">
                      {bullet1}
                    </span>
                  </div>
                )}
                {bullet2 && (
                  <div className="flex items-center space-x-3 text-lg py-1">
                    <FiCheck className="text-yellow-400 text-3xl" />
                    <span className="font-medium text-sm sm:text-base lg:text-lg text-left sm:text-center max-w-2xl text-zinc-800">
                      {bullet2}
                    </span>
                  </div>
                )}
                {bullet3 && (
                  <div className="flex items-center space-x-3 text-lg py-1">
                    <FiCheck className="text-yellow-400 text-3xl" />
                    <span className="font-medium text-sm sm:text-base lg:text-lg text-left sm:text-center max-w-2xl text-zinc-800">
                      {bullet3}
                    </span>
                  </div>
                )}
                {bullet4 && (
                  <div className="flex items-center space-x-3 text-lg py-1">
                    <FiCheck className="text-yellow-400 text-3xl" />
                    <span className="font-medium text-sm sm:text-base lg:text-lg text-left sm:text-center max-w-2xl text-zinc-800">
                      {bullet4}
                    </span>
                  </div>
                )}
                {bullet5 && (
                  <div className="flex items-center space-x-3 text-lg py-1">
                    <FiCheck className="text-yellow-400 text-3xl" />
                    <span className="font-medium text-sm sm:text-base lg:text-lg text-left sm:text-center max-w-2xl text-zinc-800">
                      {bullet5}
                    </span>
                  </div>
                )}
                {bullet6 && (
                  <div className="flex items-center space-x-3 text-lg py-1">
                    <FiCheck className="text-yellow-400 text-3xl" />
                    <span className="font-medium text-sm sm:text-base lg:text-lg text-left sm:text-center max-w-2xl text-zinc-800">
                      {bullet6}
                    </span>
                  </div>
                )}
                {bullet7 && (
                  <div className="flex items-center space-x-3 text-lg py-1">
                    <FiCheck className="text-yellow-400 text-3xl" />
                    <span className="font-medium text-sm sm:text-base lg:text-lg text-left sm:text-center max-w-2xl text-zinc-800">
                      {bullet7}
                    </span>
                  </div>
                )}
                {bullet8 && (
                  <div className="flex items-center space-x-3 text-lg py-1">
                    <FiCheck className="text-yellow-400 text-3xl" />
                    <span className="font-medium text-sm sm:text-base lg:text-lg text-left sm:text-center max-w-2xl text-zinc-800">
                      {bullet8}
                    </span>
                  </div>
                )}
              </div>
              <p className="font-medium text-sm sm:text-base lg:text-lg text-center sm:text-center max-w-2xl text-zinc-800">
                {text}
              </p>
              {icons && (
                <div className="font-bold flex w-full justify-around items-center gap-x-8 py-3 flex-col sm:flex-row">
                  <div className="flex flex-col items-center  py-3">
                    <PiHandHeartBold className="text-yellow-400 text-5xl" />
                    <span className="text-lg ml-0">Zufriedenheitsgarantie</span>
                  </div>
                  <div className="flex flex-col items-center  py-3">
                    <HiOutlineCalculator className="text-yellow-400 text-5xl" />
                    <span className="text-lg ml-0">Förderung sichern</span>
                  </div>
                </div>
              )}
              {icons2 && (
                <div className="font-bold flex w-full justify-around items-center gap-x-8 flex-col sm:flex-row py-3">
                  <div className="flex flex-col items-center  py-3">
                    <HiOutlineHome className="text-yellow-400 text-5xl" />
                    <span className="text-lg ml-0">
                      Regional und überregional für Sie im Einsatz
                    </span>
                  </div>
                  <div className="flex flex-col items-center  py-3">
                    <HiOutlineClipboard className="text-yellow-400 text-5xl" />
                    <span className="text-lg ml-0">
                      Komplett-Service von der Planung bis zur Wartung
                    </span>
                  </div>
                </div>
              )}

              {logo1 && (
                <div className="flex flex-wrap items-center justify-center pt-0 lg:pt-10">
                  <img src={logo1} className="w-16 xl:w-28 mx-5 my-2" />
                  {logo2 && (
                    <img src={logo2} className="w-16 xl:w-28 mx-5 my-2" />
                  )}
                  {logo3 && (
                    <img src={logo3} className="w-20 xl:w-32 mx-5 my-2" />
                  )}
                  {logo4 && (
                    <img src={logo4} className="w-20 xl:w-32 mx-5 my-2" />
                  )}
                  {logo5 && (
                    <img src={logo5} className="w-20 xl:w-32 mx-5 my-2" />
                  )}
                  {logo6 && (
                    <img src={logo6} className="w-20 xl:w-32 mx-5 my-2" />
                  )}
                </div>
              )}

              {link && (
                <div className="flex w-full xl:flex-row items-center flex-col justify-around">
                  <Link href={link} className="pt-4">
                    <a className="text-lg bg-yellow-400 rounded-full font-bold max-w-max px-5 py-3 cursor-pointer hover:scale-105 transition duration-300 ease-linear">
                      {linkText}
                    </a>
                  </Link>
                  {icons && (
                    <div className="flex items-center space-x-3 text-lg xl:mt-0 mt-10">
                      <FiPhone className="text-yellow-400 text-4xl " />
                      <a
                        href="tel:+49621150350"
                        className="text-yellow-400 font-bold hover:scale-105 transition duration-200 ease-linear"
                      >
                        <span className="text-lg">+49 621 150 350</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SubpageLandingpages
