"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Links from "../ui/Links";
import GetInTouchButton from "../ui/GetInTouchButton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-t border-b border-[#DDDDDD] bg-[#FEFFF0]">
      <div className="mx-auto  px-4 sm:px-10 lg:px-14">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-1.5 md:gap-2 text-base md:text-lg lg:text-xl xl:text-[22px] font-bold leading-[100%] text-gray-900 uppercase tracking-normal"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Unigue Tech"
                width={36}
                height={36}
                className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full object-cover shrink-0"
              />
              UNIGUE TECH
            </Link>
          </div>
          <div className="hidden md:block">
            <Links direction="row" toggle={toggle} />
          </div>
          <div className="hidden md:block">
            <GetInTouchButton 
              backgroundColor="#02190C"
              hoverBackgroundColor="#023d1a"
              className="rounded-full"
            />
          </div>



          <div className="md:hidden flex justify-end items-center hover:bg-gray-200 px-3 py-2 rounded-full w-max">
            {toggle ? (
              <svg
                className="text-gray-900 text-2xl cursor-pointer"
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
                className="text-gray-900 text-2xl cursor-pointer"
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
