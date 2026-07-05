import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/authServices";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";
import AuthButton from "./AuthButton";

export default function LoginForm() {
  const navigate = useNavigate(); // ✅ FIX ADDED HERE

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    console.log("========== LOGIN START ==========");
    console.log("Login clicked");
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const data = await loginUser(email, password);

      console.log("Server response:", data);

      // ✅ SUCCESS CASE
      if (data.access) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);

        alert("Login Successful");

        navigate("/"); // 👈 AUTO REDIRECT TO HOME
        return;
      }

      // ❌ FAILURE CASE
      console.log("Login failed:", data);
      setError(data.detail || data.message || "Login failed");

    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong. Please try again.");
    }

    console.log("=========== LOGIN END ===========");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      <AuthInput
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <RememberMe />

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <AuthButton text="Login" />
    </form>
  );
}