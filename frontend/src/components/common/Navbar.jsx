function Navbar() {
  return (
    <nav className="bg-white px-6 py-4 shadow">

      {/* Brand row */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-700">
          ThreadsConnect
        </h1>

        <button className="bg-amber-700 text-white px-4 py-2 rounded-lg text-sm">
          Sign In
        </button>
      </div>

      {/* Links row (UNDER brand, SIDE BY SIDE) */}
      <ul className="flex gap-6 mt-3 text-sm md:text-base">
        <li className="cursor-pointer hover:text-amber-700">Home</li>
        <li className="cursor-pointer hover:text-amber-700">Tailors</li>
        <li className="cursor-pointer hover:text-amber-700">About</li>
      </ul>

    </nav>
  );
}

export default Navbar;