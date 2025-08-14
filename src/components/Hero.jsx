import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="h-screen bg-white dark:bg-black">
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <Fade direction="up" triggerOnce cascade damping={0.4}>
          <h1 className="text-6xl sm:text-6xl md:text-8xl font-bold mb-4 text-center text-black dark:text-white">
            Kushagra Modanwal
          </h1>
          <p className="text-center text-black dark:text-white w-1/2 mx-auto md:w-full">
            A full stack developer,
            who loves all things web 
            and plays chess.
          </p>
          <div className="flex gap-2 ">
            <a href="mailto:kushagramodanwal@gmail.com">
              <button className="bg-black text-white py-2 px-8 rounded dark:bg-white dark:text-black">
                Get in touch
              </button>
            </a>
            <a href="/KushagraResume.pdf" target="_blank" rel="noreferrer">
              <button className="bg-black text-white py-2 px-12 rounded dark:bg-white dark:text-black">
                Resume
              </button>
            </a>
          </div>
        </Fade>

        <img
          src="/arrow-down.svg"
          width={50}
          height={50}
          alt="arrow"
          className="relative animate-bounce -bottom-48 sm:-bottom-36 dark:invert"
        />
      </div>
    </div>
  );
};

export default Hero;
