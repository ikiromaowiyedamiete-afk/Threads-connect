import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between">

        {/* Brand Section */}
        <div className="md:w-1/3">
          <h1 className="text-2xl font-bold mb-4">
            Threads Connect
          </h1>
          <p className="text-gray-400">
            Connecting customers with skilled tailors for custom fashion and designs.
          </p>
        </div>

        {/* Right Side (Quick Links + Contact side by side) */}
        <div className="md:w-2/3 flex flex-col sm:flex-row gap-10">

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Quick Links
            </h2>

            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Contact Info
            </h2>

            <div className="text-gray-400 space-y-2">
              <p>Lagos, Nigeria</p>
              <p>support@threadsconnect.com</p>
              <p>+234 xxx xxx xxxx</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Threads Connect. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;