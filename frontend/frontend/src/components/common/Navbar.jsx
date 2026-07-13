import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-white px-6 py-4 shadow">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-700">
          ThreadsConnect
        </h1>

        <button onClick={() => navigate("/login")} className="bg-amber-700 text-white px-4 py-2 rounded-lg text-sm">
          Sign In
        </button>
      </div>

      <ul className="flex gap-6 mt-3">
        <li>
          <Link to="/" className="hover:text-amber-700 transition-colors duration-300">Home</Link>
        </li>


        <li>
          <Link to="/about" className="hover:text-amber-700 transition-colors duration-300">About</Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-amber-700 transition-colors duration-300">Contact</Link>
        </li>

        <li>
          <Link to="/faq" className="hover:text-amber-700 transition-colors duration-300">FAQ</Link>
        </li>

        <li>
          <Link to="/terms" className="hover:text-amber-700 transition-colors duration-300">Terms & Services</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;