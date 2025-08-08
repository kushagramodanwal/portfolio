import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
	return (
		<div className="flex py-36 h-fit items-center sm:flex-col-reverse sm:py-8 ">
			<div className=" basis-2/3 flex flex-col gap-4  md:p-0">
				<Fade triggerOnce cascade damping={0.4} delay={1000}>
					<h2 className="text-6xl font-bold leading md:text-4xl ">
						a little bit <br /> about me 
					</h2>
					<div className="flex flex-col gap-4 w-2/3 text-secondary md:w-2/3 md:text-sm sm:w-full dark:text-dark-secondary ">
						<p>
	I&apos;m a full-stack developer passionate about building smooth,
	engaging websites. For me, coding is more than just work—it&apos;s a
	creative way to turn ideas into reality, from crafting the frontend
	to engineering the backend.
</p>
<p>
	When I&apos;m away from the keyboard, I enjoy exploring new hobbies,
	learning fresh skills, and finding inspiration in everyday life.
</p>
<p>
	In quieter moments, you&apos;'ll find me at the chessboard, deep in a game of chess. I love the strategic challenge and the endless possibilities of each move, finding it a great way to sharpen my mind and unwind.
</p>

						<div>
							{/* social icons */}
							<div className="flex gap-8 mt-4 dark:dark-filter">
								<a href="https://github.com/kushagramodanwal">
									<Image
									className=" hover:scale-125 transition-all duration-150"
										src="/github.svg"
										width={30}
										height={30}
										alt="github icon"
									/>
								</a>
								<a href="https://www.linkedin.com/in/kushagra-modanwal-bb3504319/">
									<Image
									className=" hover:scale-125 transition-all duration-150"
										src="/linkedin.svg"
										width={30}
										height={30}
										alt="linkedin icon"
									/>
								</a>
								<a href="https://x.com/kushaark">
									<Image
									className=" hover:scale-125 transition-all duration-150"
										src="/twitter.svg"
										width={30}
										height={30}
										alt="twitter icon"
									/>
								</a>
								<a href="https://www.instagram.com/kushagramodanwal/">
									<Image
									className=" hover:scale-125 transition-all duration-150"
										src="/instagram.svg"
										width={30}
										height={30}
										alt="instagram icon"
									/>
								</a>
								<a href="mailto:kushagramodanwal@gmail.com">
									<Image
									className=" hover:scale-125 transition-all duration-150"
										src="/mail.svg"
										width={30}
										height={30}
										alt="email icon"
									/>
								</a>
							</div>
						</div>
					</div>
				</Fade>
			</div>
			<Fade triggerOnce cascade damping={0.8} delay={500}>
				<div className="p-16 basis-1/3 grid grid-cols-1 grid-rows-1 md:p-0 sm:mb-16">
					<Image
						src="/image.png"
						className=" aspect-square rounded-lg col-start-1 row-start-1 object-cover rotate-12 sm:w-2/3 sm:mx-auto dark:sepia backdrop-grayscale"
						width={400}
						height={400}
						alt="image boy"
					/>

					<Image
						src="/profile.png"
						className=" aspect-square rounded-lg object-cover col-start-1 row-start-1 z-10 sm:w-2/3 sm:mx-auto dark:sepia dark:hover:sepia-0 transition-all duration-500"
						width={400}
						height={400}
						alt="Image of the author"
					/>
				</div>
			</Fade>
		</div>
	);
};

export default AboutMe;
