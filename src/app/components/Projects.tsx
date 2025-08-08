import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
	const projects = [
		{
			name: "classicSnake",
			unfinished: false,
			description:
				"snake.69 is a Snake game built in C using the ncurses library for terminal graphics and input handling. Control the snake, eat food, and avoid collisions. A fun project to practice C programming, game logic, and explore ncurses for enhanced terminal-based user interfaces..",
			techStack: [
				"C",
				"Ncurses",
				"stdlib.h",
				"unistd.h",
				"POSIX System Calls"
			],

			github: "https://github.com/kushagramodanwal/classicsnake",
			website: "/",
		},
		
	{
		name: "Abhi kaam chal raha hai !!!",
		unfinished: true,
		description: "",
		techStack: [],
	},
	{
		name: "Abhi kaam chal raha hai !!!",
		unfinished: true,
		description: "",
		techStack: [],
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
			className="h-screen flex flex-col justify-center py-8 pt-14  sm:h-fit sm:py-16"
		>
			<div className="w-full">
				<h2 className="text-6xl font-bold sm:text-4xl">my projects </h2>
				<div className="grid grid-cols-2 mt-8 md:grid-cols-1 gap-14 sm:gap-8">
					<Fade triggerOnce cascade damping={0.4}>
						{projects.map(project => (
							<div
								className="p-8 flex-col flex gap-4 border-2 shadow rounded "
								key={project.name}
							>
								<div className="flex w-full  gap-4 items-center">
									<h3 className="text-3xl font-bold sm:text-2xl">
										{project.name}
									</h3>

									<a href={project.github} className="ml-auto">
										<Image
											src="/github.svg"
											width={30}
											height={30}
											alt="link to the github repo of project"
											className="dark:dark-filter hover:scale-125 transition-all duration-150"
										/>
									</a>
									<a href={project.website}>
										<Image
											src="/link.svg"
											width={30}
											height={30}
											alt="link to the github repo of project"
											className="dark:dark-filter hover:scale-125 transition-all duration-150"
										/>
									</a>
								</div>
								<div>
									<p className="text-sm text-gray-500">{project.description}</p>
								</div>
								<div className="flex gap-x-4 flex-wrap mt-auto">
									{project.techStack.map(skill => (
										<span key={skill} className="text-sm font-semibold">
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</Fade>
				</div>
			</div>
			<a
				href="https://github.com/kushagramodanwal"
				className="flex justify-center w-full"
			>
				<button className="bg-black py-2 px-8 rounded text-white mt-8 dark:dark-filter">
					More projects
				</button>
			</a>
		</section>
	);
};

export default Projects;
