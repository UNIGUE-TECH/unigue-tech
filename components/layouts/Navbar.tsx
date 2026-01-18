"use client";

import { useState } from "react";
import Link from "next/link";
import Links from "../ui/Links";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-black/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-foreground">
              Unigue Tech
            </Link>
          </div>
          <div className="hidden md:block">
            <Links direction="row" toggle={toggle} />
          </div>
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="h-max w-max px-4 py-2 bg-foreground rounded-lg text-background hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Contact us
            </Link>
          </div>
          <div className="md:hidden flex justify-end items-center hover:bg-gray-100 px-3 py-2 rounded-full w-max">
            {toggle ? (
              <svg
                className="text-gray-700 dark:text-gray-300 text-2xl cursor-pointer"
                width={24}
                height={24}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setToggle(false)}
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="text-gray-700 dark:text-gray-300 text-2xl cursor-pointer"
                width={24}
                height={24}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setToggle(true)}
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </div>
        </div>
      </div>
      {toggle && (
        <Links direction="col" toggle={toggle} setToggle={setToggle} />
      )}
    </nav>
  );
};

export default Navbar;
