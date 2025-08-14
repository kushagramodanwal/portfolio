import React from "react";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <section id="skills" className="h-screen flex items-center bg-white dark:bg-black px-4">
      <div className="w-full">
        <h2 className="text-6xl font-bold sm:text-4xl mb-6 text-black dark:text-white">
          skills I have
        </h2>

        {/* Skills Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
          <Fade triggerOnce cascade damping={0.4}>

            {/* Languages */}
            <div className="mt-6">
              <h3 className="text-3xl font-bold mb-2 sm:text-2xl sm:mb-1 text-black dark:text-white">
                Languages
              </h3>
              <ul className="flex gap-x-4 flex-wrap text-black dark:text-white">
                {["C++", "C", "JavaScript", "TypeScript"].map(lang => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Frontend */}
            <div className="mt-6">
              <h3 className="text-3xl font-bold mb-2 sm:text-2xl sm:mb-1 text-black dark:text-white">
                Frontend
              </h3>
              <ul className="flex gap-x-4 flex-wrap text-black dark:text-white">
                {[
                  "React",
                  "TailwindCSS",
                  "HTML",
                  "CSS"
                ].map(lang => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="mt-6">
              <h3 className="text-3xl font-bold mb-2 sm:text-2xl sm:mb-1 text-black dark:text-white">
                Backend
              </h3>
              <ul className="flex gap-x-4 flex-wrap text-black dark:text-white">
                {["Node.js", "Express.js", "JWT", "Clerk"].map(lang => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Databases */}
            <div className="mt-6">
              <h3 className="text-3xl font-bold mb-2 sm:text-2xl sm:mb-1 text-black dark:text-white">
                Databases
              </h3>
              <ul className="flex gap-x-4 flex-wrap text-black dark:text-white">
                {["MongoDB"].map(lang => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Dev Tools & Platforms */}
            <div className="mt-6">
              <h3 className="text-3xl font-bold mb-2 sm:text-2xl sm:mb-1 text-black dark:text-white">
                Dev tools and Platforms
              </h3>
              <ul className="flex gap-x-4 flex-wrap text-black dark:text-white">
                {["Git", "GitHub", "VS Code", "Postman"].map(lang => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>

          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Skills;
