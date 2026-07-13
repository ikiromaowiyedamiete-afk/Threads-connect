import { Link } from "react-router-dom";

export default function AuthFooter({
  text,
  linkText,
  link,
}) {
  return (
    <div className="text-center mt-6">
      <span className="text-gray-600">
        {text}
      </span>

      <Link
        to={link}
        className="ml-2 text-amber-700 font-semibold hover:underline"
      >
        {linkText}
      </Link>
    </div>
  );
}