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

    const data = await registerUser(formData);

    if (data.email) {
      setMessage("Registration Successful!");
      return;
    }

    setMessage("Registration Failed");
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
          handleChange(
            "phone_number",
            e.target.value
          )
        }
      />

      <PasswordInput
        value={formData.password}
        onChange={(e) =>
          handleChange("password", e.target.value)
        }
      />

      <AuthButton text="Create Account" />

      {message && (
        <p className="text-center text-green-600">
          {message}
        </p>
      )}
    </form>
  );
}