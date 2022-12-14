import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { loadingState } from '../state/loading'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useRecoilState(loadingState)
  return (
    <>
      <nav
        className={`bg-base text-icon shadow w-[90%] md:w-[85%] border-b border-b-line mx-auto ${
          loading && "hidden"
        } md:w-[95%]`}
      >
        <div className="container py-2 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link
                className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="/"
              >
                <Image
                  src="/logo-alt.png"
                  width="80"
                  height="80"
                  layout="fixed"
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  className={`w-6 h-6`}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 12H16V16H12V12ZM6 12H10V16H6V12ZM0 12H4V16H0V12ZM12 6H16V10H12V6ZM6 6H10V10H6V6ZM0 6H4V10H0V6ZM12 0H16V4H12V0ZM6 0H10V4H6V0ZM0 0H4V4H0V0Z"
                    fill="#156AFF"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* x-cloak :className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" */}

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute h-92 inset-x-0 z-20 w-full top-0 px-6 py-4 transition-all duration-300 ease-in-out bg-base md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              !isOpen && "hidden"
            }`}
          >
            <div className="flex flex-col justify-center items-center gap-x-16 md:justify-between md:items-center md:flex-row md:mx-6 md:gap-y-8 py-6 h-80 md:h-0 md:w-full uppercase text-sm text-link leading-[3.5rem]">
              <button
                className="text-link uppercase my-24 md:hidden"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <Link
                className="hover:text-icon leading-4 font-semibold text-sm"
                href="#projects"
              >
                Projects
              </Link>
              <Link
                className="hover:text-icon leading-4 font-semibold"
                href="#about"
              >
                About Me
              </Link>
              <Link
                className="hover:text-icon leading-4 font-semibold"
                href="#work"
              >
                Work Experience
              </Link>
              <Link
                className="hover:text-icon leading-4 font-semibold"
                href="#contact"
              >
                Contact Me
              </Link>
              <Link
                className="hover:text-icon leading-4 font-semibold"
                href="/blog"
              >
                My Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar