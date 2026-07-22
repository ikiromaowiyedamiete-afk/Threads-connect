import BASE_URL from "./api";

export const loginUser = async (email, password) => {
  const url = `${BASE_URL}/accounts/login/`;

  console.log("LOGIN REQUEST URL:", url);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log("STATUS CODE:", response.status);

    const data = await response.json();

    console.log("BACKEND DATA:", data);

    return data;

  } catch (error) {
    console.error("FETCH ERROR:", error);
    throw error;
  }
};


export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/accounts/register/`, {
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
  localStorage.removeItem("user");
};