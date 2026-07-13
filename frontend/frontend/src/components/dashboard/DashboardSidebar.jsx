export default function DashboardSidebar({ menuItems }) {

  return (
    <aside className="w-full md:w-64 bg-white border-r min-h-screen p-5">

      {/* Logo */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black">
          Threads<span className="text-amber-700">-connect</span>
        </h2>
      </div>


      {/* Navigation */}
      <nav className="space-y-3">

        {menuItems.map((item, index) => (

          <button
            key={index}
            className="
              w-full
              text-left
              px-4
              py-3
              rounded-lg
              text-gray-700
              hover:bg-amber-700
              hover:text-white
              transition
            "
          >
            {item}
          </button>

        ))}

      </nav>


    </aside>
  );
}