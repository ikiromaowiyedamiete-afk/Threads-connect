export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-amber-700">
        Threads Connect
      </h1>

      <h2 className="text-2xl font-semibold mt-5">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {subtitle}
      </p>
    </div>
  );
}