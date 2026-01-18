function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-8 gap-8 sm:gap-0 border-b border-gray-200 dark:border-gray-800">
          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-foreground">Unigue Tech</h2>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              <p>info@uniguetech.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-20">
            <div>
              <ul className="list-none text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li>FAQs</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-foreground text-sm font-medium mb-2">
                Social
              </h2>
              <ul className="list-none text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h2 className="text-foreground text-sm font-medium mb-2">
              Get updates from us
            </h2>
            <div className="relative flex items-center">
              <input
                type="text"
                className="w-full max-w-[312px] h-12 py-2 pl-4 pr-20 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg"
                placeholder="Your email.."
              />
              <button className="absolute right-2 top-1 py-2 px-4 bg-foreground rounded-lg text-background text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-8">
          <span className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Unigue Tech. All rights reserved.
          </span>
          <div className="flex gap-8">
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Terms & Conditions
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
