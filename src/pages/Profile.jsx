import { useState, useEffect } from "react";
import bgImage from "../assets/background.jpg";
import NavBar from "../components/NavBar";

export function Profile() {
  const [username, setUsername] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUsername(parsedUser.username);
    }
  }, []);

  // Simpan username yang diperbarui ke localStorage
  const handleSave = () => {
    if (!newUsername.trim()) {
      setError("Username cannot be empty.");
      return;
    }

    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      parsedUser.username = newUsername.trim();
      localStorage.setItem("users", JSON.stringify(parsedUser));
      setUsername(newUsername.trim()); // Perbarui state
      setIsEditing(false);
      setError("");
    }
  };

  return (
    <div>
      <NavBar />
      <div
        className="flex flex-col justify-center items-center min-h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-10/12 lg:w-7/12 bg-gray-900 p-8 mt-8 lg:mt-12 rounded-lg border-2 border-sky-800 bg-opacity-80">
          <h1 className="text-3xl text-white text-center mb-6">Profile</h1>

          {/* Tampilkan username atau form edit */}
          {!isEditing ? (
            <div className="text-center text-white">
              <p className="text-lg">Username: {username || "Guest"}</p>
              <button
                className="mt-4 px-4 py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded-md"
                onClick={() => {
                  setNewUsername(username); // Set nilai default pada form input
                  setIsEditing(true);
                }}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Enter new username"
                className="w-3/4 p-2 border-2 border-cyan-800 rounded-md mb-2"
              />
              {/* Tampilkan pesan error jika username kosong */}
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                  onClick={() => {
                    setIsEditing(false);
                    setError("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
