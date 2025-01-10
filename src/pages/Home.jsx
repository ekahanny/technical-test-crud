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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContacts((prevData) => {
      return {
        ...prevData,
        currentData: {
          ...prevData.currentData,
          [name]: value,
        },
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setContacts((prevData) => {
      console.log("previous contact: ", prevData);
      return {
        data: [...prevData.data, prevData.currentData],
        currentData: {
          contactName: "",
          phoneNumber: "",
          contactEmail: "",
        },
      };
    });
    console.log("contact : ", contacts);
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
        {/* Form Add Data */}
        <div className="w-11/12 lg:w-7/12 bg-gray-900 p-8 mt-8 lg:mt-12 rounded-lg border-2 border-sky-800 bg-opacity-80">
          <h1 className="text-3xl font-semibold text-white text-center mb-7 mt-3">
            ADD CONTACT
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
                Add
              </button>
            </div>
          </form>
        </div>
        {/* <hr className="border-t-4 border-cyan-900 w-full my-12" /> */}

        {/* Hasil Data */}
        {contacts.data.length > 0 && (
          <div className="w-11/12 lg:w-7/12 bg-gray-900 p-8 mt-8 lg:mt-12 rounded-lg border-2 border-sky-800 bg-opacity-80">
            {contacts.data.map((contact, index) => (
              <ShowData
                key={index}
                contactName={contact.contactName}
                phoneNumber={contact.phoneNumber}
                contactEmail={contact.contactEmail}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
