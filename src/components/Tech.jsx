/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Marquee from "react-fast-marquee";
import nextLogo from "../assets/icons8-nextjs.svg";
import jsLogo from "../assets/icons8-javascript.svg";
import cssLogo from "../assets/icons8-css.svg";
import reactLogo from "../assets/icons8-react-js.svg";
import tailwindLogo from "../assets/icons8-nextjs.svg";
import bootstrapLogo from "../assets/icons8-bootstrap.svg";
import gitLogo from "../assets/icons8-git.svg";
import phpLogo from "../assets/icons8-php.svg";

const Tech = () => {
  return (
    <section id="tech" className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl">
        <h2 className="mb-6 lg:mb-2 text-3xl font-bold text-center text-gray-900 md:text-3xl">
          Tech Stack
        </h2>

        <Marquee>
          <div className="grid grid-cols-2 gap-2 text-gray-500 sm:gap-8 md:grid-cols-8 lg:items-center dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
              {/* Replace this comment with your SVG or logo */}
              <img
                src={nextLogo}
                alt="Logo 1"
                className="w-44 h-44 text-gray-500 hover:text-gray-500"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              {/* Replace this comment with your SVG or logo */}
              <img
                src={cssLogo}
                alt="Logo 1"
                className="w-44 h-44 text-gray-500"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              {/* Replace this comment with your SVG or logo */}
              <img
                src={reactLogo}
                alt="Logo 1"
                className="w-44 h-44 text-gray-500"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              {/* Replace this comment with your SVG or logo */}
              <img
                src={bootstrapLogo}
                alt="Logo 1"
                className="w-44 h-44 text-gray-500"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              {/* Replace this comment with your SVG or logo */}
              <img
                src={tailwindLogo}
                alt="Logo 1"
                className="w-44 h-44 text-gray-500"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              {/* Replace this comment with your SVG or logo */}
              <img
                src={jsLogo}
                alt="Logo 1"
                className="w-44 h-44 text-gray-500"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              {/* Replace this comment with your SVG or logo */}
              <img
                src={phpLogo}
                alt="Logo 1"
                className="w-44 h-44 text-gray-500"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              {/* Replace this comment with your SVG or logo */}
              <img
                src={gitLogo}
                alt="Logo 1"
                className="w-44 h-44 text-gray-500"
              />
            </a>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Tech;
