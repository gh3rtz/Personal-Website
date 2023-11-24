import React from "react";
import profile from "../assets/profile.png";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="dark:bg-gray-900">
      {/* leftside */}
      <div className="flex flex-wrap">
        <div className="w-full self-center px-4 lg:w-1/2">
          <h1 className="text-2xl lg:text-4xl md:text-2xl sm:text-xl font-semibold mt-16 dark:text-white">
            Hi,{" "}
            <span className="font-extrabold lg:text-4xl uppercase dark:text-orange-500">
              Givari Hertz{" "}
            </span>
            <span className="text-2xl lg:text-4xl md:text-2xl sm:text-xl font-semibold">
              Here .
            </span>
          </h1>
          <h2 className="font-bold mt-4 text-bold text-4xl lg:text-6xl md:text-4xl dark:text-white">
            Cyber Security <span className="text-orange-500">and</span>
            <span className=""> Front-end Developer</span>
          </h2>
          <p className="mt-8 mb-10 leading-relaxed text-slate-600 dark:text-white dark:font-light">
            Since high school until now, I have shown a deep interest in the
            field of cybersecurity. I began my academic journey at Budi Luhur
            University in 2020, choosing a focus on Cybersecurity. During my
            time of study, I have actively pursued interests and gained
            experience in discovering security vulnerabilities on bug bounty
            platforms, both public and private.
          </p>

          <div className="flex items-center space-x-3">
            <h2 className="flex items-center hover:text-gray-700 text-lg font-medium py-3 dark:text-white">
              Connect with me
              <AiOutlineArrowsAlt />
            </h2>
            <a
              href="https://instagram.com/givarirmdn"
              className="hover:text-gray-500 dark:text-orange-700"
            >
              <AiFillInstagram size={25} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://twitter.com/gh3rtz"
              className="hover:text-gray-500 dark:text-orange-700"
            >
              <FaSquareXTwitter size={25} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://github.com/gh3erz"
              className="hover:text-gray-500 dark:text-orange-700"
            >
              <AiFillGithub size={25} />
              <span className="sr-only">Github</span>
            </a>
            <a
              href="https://linkedin.com/"
              className="hover:text-gray-500 dark:text-orange-700"
            >
              <FaLinkedinIn size={25} />
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
        </div>

        {/* right side */}
        <div className="w-full self-end px-4 lg:w-1/2">
          <div className="relative mt-10 lg:mt-9 lg:right-0">
            <img
              src={profile}
              alt="latar"
              className="max-w-full lg:w-[55%] mx-auto rounded-2xl"
            />
            <span className="absolute md:scale-125 bottom-0 -z-10 left-1/2 -translate-x-1/2">
              <svg
                width={400}
                height={400}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#212121"
                  d="M43.2,-72.2C51.1,-62.1,49.2,-41.9,54.2,-26.1C59.3,-10.4,71.3,0.8,71.2,11.1C71.1,21.4,58.7,30.8,48.9,42.7C39.1,54.6,31.8,69,20.5,74.4C9.2,79.9,-6.1,76.4,-16.9,68.4C-27.8,60.3,-34.1,47.7,-43.5,37.4C-52.9,27.1,-65.3,19.1,-72.8,6.8C-80.3,-5.6,-83,-22.4,-76.3,-33.9C-69.6,-45.4,-53.4,-51.7,-39.1,-58.9C-24.8,-66.1,-12.4,-74.2,2.6,-78.3C17.7,-82.3,35.3,-82.4,43.2,-72.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
