import React from "react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const projects = [
    {
      name: "classicSnake",
      unfinished: false,
      description:
        "snake.69 is a Snake game built in C using the ncurses library for terminal graphics and input handling. Control the snake, eat food, and avoid collisions. A fun project to practice C programming, game logic, and explore ncurses for enhanced terminal-based user interfaces..",
      techStack: ["C", "Ncurses", "stdlib.h", "unistd.h", "POSIX System Calls"],
      github: "https://github.com/kushagramodanwal/classicsnake",
      website: "/",
    },
    {
      name: "UNI TASK HUB (In Development)",
      unfinished: true,
      description:
        "A task exchange platform for university students to post and swap tasks. Built using React, Clerk Authentication, Node.js, and MongoDB. Features include user authentication, task posting, browsing, and status updates. Designed with a responsive UI and a consistent navigation experience.",
      techStack: ["React", "Clerk Authentication", "Node.js", "MongoDB", "Responsive UI"],
      github: "",
      website: "",
    },
    {
      name: "SoloPlay",
      unfinished: false,
      description:
        "Developed a JavaScript Chrome extension that ensures only one YouTube video plays at a time across all browser tabs, preventing overlapping audio. Leveraged service workers for seamless background synchronization and handled YouTube’s dynamic single-page application navigation. Implemented automatic playback switching between tabs to improve user experience and optimize browser resource usage.",
      techStack: ["JavaScript", "Chrome Extension", "Service Workers"],
      github: "https://github.com/kushagramodanwal/soloplay",
      website: "",
    },
    {
      name: "Abhi kaam chal raha hai !!!",
      unfinished: true,
      description: "",
      techStack: [],
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen flex flex-col justify-center py-8 pt-14 sm:h-fit sm:py-16 bg-white dark:bg-black px-4"
    >
      <div className="w-full">
        <h2 className="text-6xl font-bold sm:text-4xl text-black dark:text-white">my projects</h2>

        <div className="grid grid-cols-2 mt-8 md:grid-cols-1 gap-14 sm:gap-8">
          <Fade triggerOnce cascade damping={0.4}>
            {projects.map((project) => (
              <div
                className="p-8 flex-col flex gap-4 border-2 border-black dark:border-white shadow rounded"
                key={project.name}
              >
                <div className="flex w-full gap-4 items-center">
                  <h3 className="text-3xl font-bold sm:text-2xl text-black dark:text-white">
                    {project.name}
                  </h3>

                  <a href={project.github} className="ml-auto" target="_blank" rel="noreferrer">
                    {project.github && (
                      <img
                        src="/github.svg"
                        width={30}
                        height={30}
                        alt="link to the github repo of project"
                        className="hover:scale-125 transition-all duration-150"
                      />
                    )}
                  </a>
                  <a href={project.website} target="_blank" rel="noreferrer">
                    {project.website && (
                      <img
                        src="/link.svg"
                        width={30}
                        height={30}
                        alt="link to the live project"
                        className="hover:scale-125 transition-all duration-150"
                      />
                    )}
                  </a>
                </div>

                <div>
                  <p className="text-black dark:text-white text-sm">{project.description}</p>
                </div>

                <div className="flex gap-x-4 flex-wrap mt-auto">
                  {project.techStack.map((skill) => (
                    <span key={skill} className="text-sm font-semibold text-black dark:text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Fade>
        </div>

        <a
          href="https://github.com/kushagramodanwal"
          className="flex justify-center w-full"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-black text-white py-2 px-8 rounded mt-8 dark:bg-white dark:text-black">
            More projects
          </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
