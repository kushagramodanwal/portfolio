import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center py-16 md:py-36 gap-8 bg-white dark:bg-black px-4">

      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-4">
        <Fade triggerOnce cascade damping={0.4} delay={500}>
          <h2 className="text-6xl font-bold leading-tight md:text-4xl text-black dark:text-white">
            a little bit <br /> about me
          </h2>

          <div className="flex flex-col gap-4 text-black dark:text-white text-lg">
            <p>
              I'm a full-stack developer passionate about building smooth,
              engaging websites. For me, coding is more than just work—it's a
              creative way to turn ideas into reality, from crafting the frontend
              to engineering the backend.
            </p>
            <p>
              When I'm away from the keyboard, I enjoy exploring new hobbies,
              learning fresh skills, and finding inspiration in everyday life.
            </p>
            <p>
              In quieter moments, you'll find me at the chessboard, deep in a game
              of chess. I love the strategic challenge and the endless
              possibilities of each move, finding it a great way to sharpen my
              mind and unwind.
            </p>

            {/* Social icons */}
            <div className="flex gap-6 mt-4">
              {[
                { href: "https://github.com/kushagramodanwal", src: "/github.svg", alt: "github" },
                { href: "https://www.linkedin.com/in/kushagra-modanwal-bb3504319/", src: "/linkedin.svg", alt: "linkedin" },
                { href: "https://x.com/kushaark", src: "/twitter.svg", alt: "twitter" },
                { href: "https://www.instagram.com/kushagramodanwal/", src: "/instagram.svg", alt: "instagram" },
                { href: "mailto:kushagramodanwal@gmail.com", src: "/mail.svg", alt: "email" }
              ].map((icon, idx) => (
                <a key={idx} href={icon.href}>
                  <img
                    className="hover:scale-125 transition-all duration-150 dark:invert"
                    src={icon.src}
                    width={30}
                    height={30}
                    alt={`${icon.alt} icon`}
                  />

                </a>
              ))}
            </div>
          </div>
        </Fade>
      </div>

      {/* Image Section */}
      <Fade triggerOnce cascade damping={0.8} delay={300}>
        <div className="flex-1 flex justify-center">
          <img
            src="/profile.png"
            className="w-72 h-72 rounded-lg object-cover transition-all duration-500"
            alt="Kushagra Modanwal"
          />
        </div>
      </Fade>
    </div>
  );
};

export default AboutMe;
