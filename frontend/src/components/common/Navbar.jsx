import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white px-6 py-4 shadow">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-700">
          ThreadsConnect
        </h1>

        <button className="bg-amber-700 text-white px-4 py-2 rounded-lg text-sm">
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
      </ul>

    </nav>
  );
}

export default Navbar;