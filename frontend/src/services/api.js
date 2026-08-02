const BASE_URL =
  import.meta.env.DEV
    ? "http://127.0.0.1:8000/api"
    : "https://threads-connect.onrender.com/api";

export default BASE_URL;