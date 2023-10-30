import React from "react";

const Navbar = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("myCV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "myCV.pdf";
        alink.click();
      });
    });
  };

  return (
    <nav>
      <div className="text-2xl container flex items-center justify-between mx-auto mb-16 px-8">
        <a href="https://givarihertz.com" className="flex items-center">
          <h1 className="font-bold">
            Givari <span className="text-orange-500 font-bold">Hertz</span>
          </h1>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={onButtonClick}
            className="text-2xl hover:bg-black hover:text-white focus:ring-4 focus:outline-none font-medium
          rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            myCV
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 mt-4 md:flex-row">
            <li>
              <a
                href="#about"
                className="block py-2 pl-3 pr-4 text-gray-700 hover:font-bold focus:ring-4
                focus:outline-none focus:ring-blue-300
                font-medium rounded-lg text-md px-5 text-center mr-3 md:mr-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#porto"
                className="block py-2 pl-3 pr-4 text-gray-700 hover:font-bold focus:ring-4
                focus:outline-none
                focus:ring-blue-300 font-medium rounded-lg text-md px-5 text-center mr-3 md:mr-0"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 text-gray-700 hover:font-bold focus:ring-4
                focus:outline-none
                focus:ring-blue-300 font-medium rounded-lg text-md px-5 text-center mr-3 md:mr-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
