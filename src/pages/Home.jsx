import { useState } from "react";
import { InputField } from "../components/InputField";
import NavBar from "../components/NavBar";
import { ShowData } from "../components/ShowData";
import bgImage from "../assets/background.jpg";

export function Home() {
  const [contacts, setContacts] = useState({
    data: [],
    currentData: {
      contactName: "",
      phoneNumber: "",
      contactEmail: "",
    },
  });

  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContacts((prevData) => ({
      ...prevData,
      currentData: {
        ...prevData.currentData,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEdit && editIndex !== null) {
      setContacts((prevData) => {
        const updatedData = [...prevData.data];
        updatedData[editIndex] = prevData.currentData; // Update data pada indeks tertentu
        return {
          ...prevData,
          data: updatedData,
          currentData: {
            contactName: "",
            phoneNumber: "",
            contactEmail: "",
          },
        };
      });
      setIsEdit(false);
      setEditIndex(null);
    } else {
      // Mode Tambah: Tambahkan data baru
      setContacts((prevData) => ({
        data: [...prevData.data, prevData.currentData],
        currentData: {
          contactName: "",
          phoneNumber: "",
          contactEmail: "",
        },
      }));
    }
  };

  const handleDelete = (index) => {
    setContacts((prevData) => ({
      ...prevData,
      data: prevData.data.filter((_, i) => i !== index), // Hapus data pada indeks tertentu
    }));
  };

  const handleEdit = (index) => {
    setIsEdit(true);
    setEditIndex(index); // Simpan indeks data yang sedang diedit
    setContacts((prevData) => ({
      ...prevData,
      currentData: { ...prevData.data[index] }, // Masukkan data ke form untuk diedit
    }));
  };

  return (
    <div>
      <NavBar />

      <div
        className="flex flex-col items-center min-h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Form Add/Edit Data */}
        <div className="w-11/12 lg:w-7/12 bg-gray-900 p-8 mt-8 lg:mt-12 rounded-lg border-2 border-sky-800 bg-opacity-80">
          <h1 className="text-3xl font-semibold text-white text-center mb-7 mt-3">
            {isEdit ? "EDIT CONTACT" : "ADD CONTACT"}
          </h1>
          <form onSubmit={handleSubmit}>
            <InputField
              name="contactName"
              type="text"
              placeholder="Add Contact Name"
              label="Contact Name"
              value={contacts.currentData.contactName}
              onChange={handleChange}
            />
            <InputField
              name="phoneNumber"
              type="text"
              placeholder="Add Phone Number"
              label="Phone Number"
              value={contacts.currentData.phoneNumber}
              onChange={handleChange}
            />
            <InputField
              name="contactEmail"
              type="email"
              placeholder="Add Contact Email"
              label="Contact Email"
              value={contacts.currentData.contactEmail}
              onChange={handleChange}
            />
            <div className="flex justify-center items-center">
              <button
                className="h-8 px-6 font-semibold text-white text-sm rounded-md bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
                type="submit"
              >
                {isEdit ? "Save Changes" : "Add"}
              </button>
            </div>
          </form>
        </div>

        {/* Tampilkan Data */}
        {contacts.data.length > 0 && (
          <div className="w-11/12 lg:w-6/12 pt-4 pb-6 pr-5 pl-12 bg-gray-900 mt-8 mb-10 lg:mt-10 rounded-lg border-2 border-sky-800 bg-opacity-80">
            {contacts.data.map((contact, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-row justify-between items-center">
                  <ShowData
                    contactName={contact.contactName}
                    phoneNumber={contact.phoneNumber}
                    contactEmail={contact.contactEmail}
                  />
                  <div className="flex -mt-10 lg:-mt-20 lg:mr-1 gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="size-5 lg:size-7"
                      onClick={() => handleEdit(index)}
                    >
                      <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                      <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="size-5 lg:size-7"
                      onClick={() => handleDelete(index)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
