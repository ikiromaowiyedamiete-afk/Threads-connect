export default function DashboardCard({
  title,
  description,
  icon,
  onClick
}) {

  return (
    <div
      onClick={onClick}
      className="
        bg-white
        border
        rounded-xl
        p-6
        shadow-sm
        hover:shadow-lg
        hover:border-amber-700
        transition
        cursor-pointer
      "
    >

      {/* Icon */}
      {icon && (
        <div className="text-3xl mb-4 text-amber-700">
          {icon}
        </div>
      )}


      {/* Title */}
      <h3 className="text-xl font-semibold text-black">
        {title}
      </h3>


      {/* Description */}
      <p className="text-gray-600 mt-2">
        {description}
      </p>


    </div>
  );
}