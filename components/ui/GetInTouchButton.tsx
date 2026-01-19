"use client";

import Link from "next/link";

interface GetInTouchButtonProps {
  href?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  className?: string;
}

function GetInTouchButton({
  href = "#contact",
  backgroundColor = "#2D5016",
  hoverBackgroundColor,
  className = "",
}: GetInTouchButtonProps) {
  const defaultHoverBg = hoverBackgroundColor || backgroundColor.replace(/\d+$/, (match) => {
    const num = parseInt(match);
    return Math.max(0, num - 30).toString().padStart(match.length, '0');
  });

  const hoverBg = hoverBackgroundColor || defaultHoverBg;

  return (
    <Link
      href={href}
      className={`group h-max w-max px-4 py-2 rounded-lg text-white transition-all duration-300 flex items-center gap-2 ${className}`}
      style={{
        backgroundColor,
        fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
        ['--hover-bg' as string]: hoverBg,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
      }}
    >
      <span
        className="relative w-2 h-2 rounded-full bg-[#7BAE4E] flex items-center justify-center transition-all duration-300 group-hover:w-5 group-hover:h-5"
      >
        <svg
          className="w-3 h-3 text-white opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        Get in Touch
      </span>
    </Link>
  );
}

export default GetInTouchButton;
