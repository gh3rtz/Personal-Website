import React, { useState } from "react";
import h1 from "../assets/h1.png";
import bugcrowd from "../assets/bugcrowd.jpg";
import "../styles/CTA.css"; // Import the CSS file for CTA component

const CTA = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      id="hobbies"
      className="mx-4 rounded-xl bg-gray-900 dark:text-white"
    >
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            else about me
          </h2>
          <p className="mb-4 text-slate-300">
            Aside from programming, I also participate in bug bounty programs
            during my free time. Bug bounty programs are initiatives that
            companies launch to incentivize hackers and security researchers to
            find vulnerabilities in their software, websites, or applications.
            It is a win-win situation where the companies get to identify and
            fix their security weaknesses while the participants earn rewards
            for their findings.
          </p>

          <p className="text-slate-300">
            Bug bounty programs hone my skills in identifying security flaws,
            expose me to various technologies, and give me a sense of
            fulfillment. It's a fun and challenging way to improve while helping
            ensure the security of the online community.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <img
            src={h1}
            alt="hackerone logo"
            className={`mt-4 w-full lg:mt-10 rounded-lg ${
              isHovered ? "pulse" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={bugcrowd}
            alt="bugcrowd logo"
            className={`mt-4 w-full lg:mt-10 rounded-lg ${
              isHovered ? "pulse" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
