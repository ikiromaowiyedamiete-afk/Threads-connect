import { useNavigate } from "react-router-dom";

export default function BackToHomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="
        bg-amber-700
        text-white
        px-4
        py-2
        rounded
        hover:bg-amber-800
        transition
        font-medium
        my-4
      "
    >
      ← Back to Home
    </button>
  );
}