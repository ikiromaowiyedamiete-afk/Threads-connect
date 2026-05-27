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
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/tailors">Tailors</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;