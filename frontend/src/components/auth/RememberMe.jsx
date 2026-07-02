export default function RememberMe() {
  return (
    <div className="flex justify-between items-center text-sm">
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        Remember me
      </label>

      <a
        href="#"
        className="text-amber-700 hover:underline"
      >
        Forgot Password?
      </a>
    </div>
  );
}