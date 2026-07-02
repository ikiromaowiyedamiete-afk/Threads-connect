export default function AuthButton({
  text,
  type = "submit",
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        bg-amber-700
        text-white
        p-2
        rounded
        font-semibold
        hover:bg-amber-800
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      {text}
    </button>
  );
}