export default function QuickActions({ actions }) {

  return (
    <div className="mt-6">

      <h2 className="text-xl font-bold text-black mb-4">
        Quick Actions
      </h2>


      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-4
      ">

        {actions.map((action, index) => (

          <button
            key={index}
            onClick={action.onClick}
            className="
              bg-amber-700
              text-white
              py-3
              px-5
              rounded-lg
              font-medium
              hover:bg-amber-800
              transition
            "
          >

            {action.label}

          </button>

        ))}


      </div>


    </div>
  );
}