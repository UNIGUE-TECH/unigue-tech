const links = [
  'Home',
  'What We Do',
  'Industry',
  'Our Work',
  'About',
]

export default  function Footer() {
  return (
    <footer className="relative bg-footer text-white p-10">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-8 bg-black ">
        <div className="flex flex-col items-center md:flex-row justify-between gap-16 ">
          <aside className="px-5">
            <div className="max-w-md">
      <h3 className="text-3xl font-semibold leading-tight">
        unigue <br /> TECHNOLOGY
      </h3>

      <p className="text-gray-400 mt-4">
        Building Tomorrow, Today
      </p>

      <div className="mt-8">
        <ul className="flex flex-wrap gap-6 text-sm">
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
            <div className="bg-[#2a2a2a] rounded-xl p-8 w-full max-w-sm">
      <h4 className="text-lg font-medium mb-6 text-center">
        Reach out to us
      </h4>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#3a3a3a] text-sm px-4 py-3 rounded-md outline-none"
        />

        <input
          type="email"
          placeholder="Email address"
          className="w-full bg-[#3a3a3a] text-sm px-4 py-3 rounded-md outline-none"
        />

        <textarea
          placeholder="Subject description"
          rows={4}
          className="w-full bg-[#3a3a3a] text-sm px-4 py-3 rounded-md outline-none resize-none"
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
      © 2025 unigue. All rights reserved.
    </div>
      </div>
    </footer>
  );
}


