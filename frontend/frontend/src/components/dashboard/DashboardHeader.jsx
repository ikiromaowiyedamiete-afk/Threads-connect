export default function DashboardHeader({ title }) {

  return (
    <header className="bg-amber-700 text-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-5">

        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="text-white/90 mt-1">
          Threads-connect Marketplace
        </p>

      </div>

    </header>
  );
}