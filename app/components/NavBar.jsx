"use client";
import React from "react";
import Link from "next/link";
// import { useState } from "react";

const NavBar = () => {
  return (
    <div className="fixed w-full">
      <nav className=" bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-0 rtl:space-x-reverse"
          >
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1729333583354/1872f0be-bdab-4a61-ad75-00338eba70f1.png"
              class="h-16"
              alt="HR Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SwiftHR
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-900 cursor-pointer font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Contact Us
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <nav className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 bg-gray-900 border-gray-700">
              <Link
                href="#"
                className="block py-2 px-3 text-blue-500 md:p-0 hover:text-white cursor-pointer"
                aria-current="page"
              >
                Home
              </Link>

              <Link
                href="#about-us"
                spy={true}
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
              >
                About Us
              </Link>

              <Link
                href="#services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Our Services
              </Link>

              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Reviews
              </Link>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
