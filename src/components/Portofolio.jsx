import React from "react";
import noorastore from "../assets/noorastore.png";
import gh3rtz from "../assets/gh3rtz.png";
import CI3 from "../assets/CI3.png"

const Portofolio = () => {
  return (
    <section id="porto" className="dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        <div className=" text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-12 pb-4 text-center dark:text-white">
            Projects are proud of
          </h2>
          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            <div className="mb-6 lg:mb-0 ">
              <div className="relative block bg-white rounded-lg shadow-lg shadow-gray-700">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img src={noorastore} alt="NooraStore" className="w-full" />
                    <a href="https://gh3rtz.store">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-bold text-lg mb-3">Noora Store</h5>
                  <p className="mb-4 pb-2">
                    Website penyedia layanan entertainment digital seperti Netflix, Spotify Premium, Youtube Premium dan lainnya. dibuat menggunakan HTML dan CSS.
                  </p>
                  <a
                    href="https://gh3rtz.store"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    VISIT
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg shadow-gray-700">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img src={gh3rtz} alt="gh3rtz" className="w-full" />
                    <a href="https://gh3rtz.com">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-bold text-lg mb-3">gh3rtz</h5>
                  <p className="mb-4 pb-2">
                    Platform yang menyediakan kebutuhan ethical hacker seperti google dorking dan subdomain finding, parameter finding dan xss injection attack. Dibuat menggunakan ReactJS dan TailwindCSS
                  </p>
                  <a
                    href="https://gh3rtz.com"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    VISIT
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-0">
              <div className="relative block bg-white rounded-lg shadow-lg shadow-gray-700">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img src={CI3} alt="vapeStore" className="w-full" />
                    <a href="https://vape.gh3rtz.store/">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6 mb-24">
                  <h5 className="font-bold text-lg mb-3">Vape Store</h5>
                  <p className="mb-4 pb-2">
                    Website jual beli vape, liquid dan kebutuhan sejenis lainnya. Sistem User dan Admin Dibuat menggunakan CodeIgniter3 dan Bootstrap
                  </p>
                  <a
                    href="https://vape.gh3rtz.store/"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5  bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    VISIT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
