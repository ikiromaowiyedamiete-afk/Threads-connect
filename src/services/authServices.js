import BASE_URL from "./api";

export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/accounts/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response.json();
};

export const registerUser = async (userData) => {
  const response = await fetch("http://127.0.0.1:8000/api/accounts/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response.json();
};

export const logoutUser = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};