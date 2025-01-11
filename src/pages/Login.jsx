import { useState } from "react";
import bgImage from "../assets/background.jpg";
import { useNavigate } from "react-router";

export function Login() {
  const [users, setUsers] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers({
      username: "",
      password: "",
    });
    setTimeout(() => {
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/home");
    }, 1000);
  };
  return (
    <div
      className="flex justify-center items-center flex-col min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-5/6 bg-gray-900 p-8 rounded-lg border-2 border-sky-800 bg-opacity-80 lg:w-2/6 lg:p-10"
      >
        <p className="flex justify-center font-bold italic text-white text-2xl lg:text-3xl mb-4">
          Welcome Back! 👋🏻
        </p>
        <div className="mb-3">
          <label
            htmlFor="username"
            className="text-sm font-medium text-slate-200 ml-1"
          >
            Username
          </label>
          <input
            type="username"
            id="username"
            name="username"
            className="mt-1 bg-gray-50 border-2 border-sky-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            placeholder="Enter Your Username"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-200 ml-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 bg-gray-50 border-2 border-sky-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
