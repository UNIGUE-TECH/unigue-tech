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
    { title: "About", path: "/", hash: "#about" },
    { title: "Services", path: "/", hash: "#services" },
    { title: "Features", path: "/", hash: "#features" },
    { title: "Contact", path: "/", hash: "#contact" },
  ];

  const handleClick = () => {
    if (setToggle) {
      setToggle(false);
    }
  };

  if (direction === "row") {
    return (
      <div className="ml-10 flex items-baseline space-x-8">
        {links.slice(0, 4).map((link, index) => (
          <Link
            key={index}
            href={link.hash}
            className="text-sm font-medium text-black transition-colors hover:text-foreground dark:text-black dark:hover:text-white"
          >
            {link.title}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-900 w-62.5 h-max fixed top-16.25 right-4 z-50 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800">
      <div className="flex flex-col gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.hash}
            className="flex items-center w-full px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={handleClick}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
