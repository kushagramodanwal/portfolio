import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center sm:justify-normal mt-20 bg-white dark:bg-black min-h-screen px-4">
      <div>
        <div className="mb-16">
          <h2 className="text-6xl sm:text-4xl font-bold text-black dark:text-white">
            My Work Experience
          </h2>
        </div>

        <p className="text-2xl text-black dark:text-white">
          Working.....
        </p>

        {/* Agar aage ka detailed experience add karna ho */}
        {/*
        <div className="flex flex-col gap-10 mt-8">
          <div>
            <div className="flex justify-between">
              <h3 className="text-3xl font-semibold text-black dark:text-white">Frontend Intern</h3>
              <p className="font-semibold text-black dark:text-white">March 2024 - Present</p>
            </div>
            <p className="text-black dark:text-white">Sumatak Technologies</p>
            <ul className="list-disc list-inside mt-3 text-black dark:text-white flex flex-col gap-3">
              <li>Engineered a Chrome extension with React, TypeScript, and Vite to evaluate website risk scores...</li>
              <li>Implemented various LLM-based chatbots using Chainlit and Langchain...</li>
              <li>Created a web application for document signing with certificates...</li>
            </ul>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Experience;
