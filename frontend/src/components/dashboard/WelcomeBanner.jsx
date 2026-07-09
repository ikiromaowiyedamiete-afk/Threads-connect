export default function WelcomeBanner() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  return (
    <div
      className="
        bg-gray-100
        rounded-xl
        p-6
        border
        shadow-sm
      "
    >

      <h2 className="text-2xl font-bold text-black">
        Welcome back, {user?.username || "User"} 👋
      </h2>


      <p className="text-gray-600 mt-2">
        Find trusted services and manage your Threads-connect account.
      </p>


    </div>
  );
}