"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinksProps {
  direction?: "row" | "col";
  toggle?: boolean;
  setToggle?: (value: boolean) => void;
}

const Links = ({ direction = "row", toggle, setToggle }: LinksProps) => {
  const pathname = usePathname();

  const links = [
    { title: "Home", path: "/", hash: "#home" },
    { title: "About Us", path: "/", hash: "#about" },
    { title: "Industries", path: "/", hash: "#industries" },
    { title: "What We Do", path: "/", hash: "#services" },
    { title: "Our Work", path: "/", hash: "#features" },
  ];

  const handleClick = () => {
    if (setToggle) {
      setToggle(false);
    }
  };

  if (direction === "row") {
    return (
      <div className="ml-10 flex items-baseline space-x-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.hash}
            className="text-[16px] font-medium leading-[100%] text-gray-900 transition-colors hover:text-gray-600"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontWeight: 500 }}
          >
            {link.title}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#F5F5DC] w-[250px] h-max fixed top-[65px] right-4 z-50 rounded-2xl shadow-2xl border border-gray-900">
      <div className="flex flex-col gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.hash}
            className="flex items-center w-full px-6 py-3 text-[16px] font-medium leading-[100%] rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-200 text-gray-900"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontWeight: 500 }}
            onClick={handleClick}
          >
            {link.title}
          </Link>
        ))}
        <Link
          href="#contact"
          className="group flex items-center justify-center w-full px-6 py-3 text-sm font-medium rounded-lg bg-[#2D5016] text-white hover:bg-[#1f350f] transition-all duration-300 gap-2"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", "#contact");
            handleClick();
          }}
        >
          <span className="relative w-2 h-2 rounded-full bg-[#7BAE4E] flex items-center justify-center overflow-visible">
            <svg 
              className="absolute w-0 h-0 group-hover:w-1.5 group-hover:h-1.5 text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 translate-x-[-2px] group-hover:translate-x-0" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              style={{ 
                transition: 'opacity 0.3s ease-out, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Links;
