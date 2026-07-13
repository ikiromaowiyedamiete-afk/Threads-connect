import { useState } from "react";
import { registerUser } from "../../services/authServices";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
    role: "customer",
  });

  const [message, setMessage] = useState("");

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

const handleRegister = async (e) => {
  e.preventDefault();

  console.log("Sending:", formData);

  try {
    const data = await registerUser(formData);

    console.log("Server Response:", data);

    if (data.access) {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      setMessage("Registration Successful!");

      // Optional: redirect after 1 second
      // setTimeout(() => navigate("/dashboard"), 1000);

      return;
    }

    setMessage(data.detail || "Registration Failed");
  } catch (err) {
    console.error(err);
    setMessage("Something went wrong.");
  }
};
  return (
    <form
      onSubmit={handleRegister}
      className="space-y-5"
    >
      <AuthInput
        placeholder="Username"
        value={formData.username}
        onChange={(e) =>
          handleChange("username", e.target.value)
        }
      />

      <AuthInput
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          handleChange("email", e.target.value)
        }
      />

      <AuthInput
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={(e) =>
          handleChange("phone_number", e.target.value)
        }
      />

      <PasswordInput
        value={formData.password}
        onChange={(e) =>
          handleChange("password", e.target.value)
        }
      />

      {/* Register As */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Register As
        </label>

        <select
          value={formData.role}
          onChange={(e) =>
            handleChange("role", e.target.value)
          }
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="customer">Customer</option>
          <option value="provider">Service Provider</option>
        </select>
      </div>

      <AuthButton text="Create Account" />

      {message && (
        <p className="text-center text-green-600">
          {message}
        </p>
      )}
    </form>
  );
}