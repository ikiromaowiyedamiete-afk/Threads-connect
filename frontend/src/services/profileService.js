import BASE_URL from "./api";

export const getProfile = async () => {
  const token = localStorage.getItem("access");

  const response = await fetch(`${BASE_URL}/tailors/profile/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const updateProfile = async (profileData) => {
  const token = localStorage.getItem("access");

  const response = await fetch(`${BASE_URL}/tailors/profile/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });

  return response.json();
};