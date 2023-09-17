import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    // nav bar
    <div>
      <div className="header-2-2" style="font-family: 'Poppins', sans-serif">
        <header x-data="{ open: false }">
          <div className="mx-auto flex py-12 lg:px-24 md:px-16 sm:px-8 px-8 items-center justify-between lg:justify-start">
            <a href="#" onClick={() => setOpen(!open)}>
              <img
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-5.png"
                alt=""
              />
            </a>
            <div
              className="flex mr-0 lg:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onclick
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            {open && (
              <div
                className="bg-black fixed w-full hidden h-full top-0 left-0 z-30 bg-opacity-60"
                onClick={() => setOpen(false)}
              ></div>
            )}
            <nav
              className={`navigation lg:mr-auto hidden lg:flex flex-col text-base justify-center z-50 fixed top-8 left-3 right-3 p-8 rounded-md shadow-md bg-white lg:flex lg:flex-row lg:relative lg:top-0 lg:shadow-none lg:bg-transparent lg:p-0 lg:items-center items-start ${
                open ? "flex" : "hidden"
              }`}
            >
              <a href="#">
                <img
                  className="m-0 lg:hidden mb-3"
                  src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-5.png"
                  alt=""
                />
              </a>
              <a
                className="nav-text text-lg font-semibold leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative active"
                href="#"
              >
                Home
              </a>
              <a
                className="nav-text text-lg font-light leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative"
                href="#"
              >
                Feature
              </a>
              <a
                className="nav-text text-lg font-light leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative"
                href="#"
              >
                Pricing
              </a>
              <a
                className="nav-text text-lg font-light leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative"
                href="#"
              >
                About Us
              </a>
              <a
                className="nav-text text-lg font-light leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative"
                href="#"
              >
                Contact
              </a>
              <div className="flex items-center justify-end w-full lg:hidden mt-3">
                <button className="text-black font-light py-3 px-8 focus:outline-none">
                  Log In
                </button>
                <button className="btn-try text-white text-lg py-3 px-8 rounded-xl focus:outline-none hover:shadow-lg font-semibold">
                  Try Now
                </button>
              </div>

              <svg
                onclick={() => setOpen(!open)}
                className="w-6 h-6 absolute top-4 right-4 lg:hidden cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </nav>
            <div className="hidden lg:inline-flex">
              <button className="inline-flex text-black font-light text-lg leading-7 py-3 px-8 focus:outline-none">
                Log In
              </button>
              <button className="btn-try inline-flex text-white text-lg leading-7 py-3 px-8 rounded-xl focus:outline-none hover:shadow-lg font-semibold">
                Try Now
              </button>
            </div>
          </div>
        </header>

        {/* <!-- Hero --> */}
        <div>
          <div className="mx-auto flex pt-12 pb-16 lg:pb-20 lg:px-24 md:px-16 sm:px-8 px-8 lg:flex-row flex-col">
            {/* <!-- Left Column --> */}
            <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-3 md:mb-12 lg:mb-0 items-center text-center">
              <p className="small-text mb-8 leading-relaxed font-semibold text-sm">
                FREE 30 DAY TRIAL
              </p>
              <h1 className="title-font sm:text-5xl lg:text-6xl text-4xl mb-8 font-semibold sm:leading-tight">
                The best way
                <br className="lg:block hidden" />
                to organize your online learning
              </h1>
              <div className="inline-block items-center mx-auto lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0">
                <button className="btn-fill inline-flex font-semibold text-white text-base py-4 px-6 rounded-xl mb-4 lg:mb-0 md:mb-0 focus:outline-none hover:shadow-lg">
                  Try it free
                </button>
                <button className="btn-outline font-normal text-black text-base py-4 px-6 rounded-xl focus:outline-none bg-transparent rounded hover:border-transparent">
                  <div className="flex items-center">
                    <svg
                      className="mr-2.5"
                      width="13"
                      height="12"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9293 7.99988L6.66668 5.15788V10.8419L10.9293 7.99988ZM12.9173 8.27722L5.85134 12.9879C5.80115 13.0213 5.74283 13.0404 5.6826 13.0433C5.62238 13.0462 5.5625 13.0327 5.50934 13.0042C5.45619 12.9758 5.41175 12.9334 5.38075 12.8817C5.34976 12.83 5.33337 12.7708 5.33334 12.7105V3.28922C5.33337 3.22892 5.34976 3.16976 5.38075 3.11804C5.41175 3.06633 5.45619 3.02398 5.50934 2.99552C5.5625 2.96706 5.62238 2.95355 5.6826 2.95644C5.74283 2.95932 5.80115 2.97848 5.85134 3.01188L12.9173 7.72255C12.963 7.75299 13.0004 7.79423 13.0263 7.84261C13.0522 7.89099 13.0658 7.94501 13.0658 7.99988C13.0658 8.05475 13.0522 8.10878 13.0263 8.15716C13.0004 8.20553 12.963 8.24678 12.9173 8.27722Z"
                        fill="#555B61"
                      />
                    </svg>
                    Watch the video
                  </div>
                </button>
              </div>
            </div>
            {/* <!-- Right Column --> */}
            <div className="w-full lg:w-1/2 text-center justify-center flex pr-0">
              <img
                id="hero"
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
