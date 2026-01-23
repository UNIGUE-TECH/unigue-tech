const links = [
  'Home',
  'What We Do',
  'Industry',
  'Our Work',
  'About',
]

export default  function Footer() {
  return (
    <footer className="relative bg-footer text-white px-12 py-8 ">
      <div className="absolute inset-0" />
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 bg-black ">
        <div className="flex flex-col items-center md:flex-row justify-between gap-8 lg:gap-16 ">
          <aside className="w-full lg:w-1/2 px-0 sm:px-5">
            <div className="max-w-md mx-auto lg:mx-0">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
        UNIGUE <br /> TECHNOLOGY
      </h3>

      <p className="text-gray-400 mt-4 text-xl">
        Building Tomorrow, Today
      </p>

      <div className="mt-8">
        <ul className="flex flex-wrap gap-6 text-lg">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="hover:text-gray-300 transition underline"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
      </div>
    </div>
          </aside>
          <aside className="py-5">
            <div className="bg-[#2a2a2a] rounded-xl p-8 w-full max-w-md">
      <h4 className="text-xl font-medium mb-6 text-center">
        Reach out to us
      </h4>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#3a3a3a] text-md px-4 py-3 rounded-md outline-none"
        />

        <input
          type="email"
          placeholder="Email address"
          className="w-full bg-[#3a3a3a] text-md px-4 py-3 rounded-md outline-none"
        />

        <textarea
          placeholder="Subject description"
          rows={4}
          className="w-full bg-[#3a3a3a] text-md px-4 py-3 rounded-md outline-none resize-none"
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-md font-medium hover:bg-gray-200 transition"
        >
          Contact us
        </button>
      </form>
    </div>
          </aside>
        </div>
         <div className=" py-6 border-t border-white/10 text-center text-sm text-gray-400">
      © 2025 Unique. All rights reserved.
    </div>
      </div>
    </footer>
  );
}


