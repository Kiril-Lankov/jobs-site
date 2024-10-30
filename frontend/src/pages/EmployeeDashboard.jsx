import { useState } from "react";

const EmployeeDashboard = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  //TODO Datebase redisign required(add profile picture,optional second name,username etc.),
  //TODOendpoints for PUT PATCH requests to update users data

  //Temporarely load profile picture from local storage
  const previewProfilePicture = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = function () {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("File size exceeds limit");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, secondName, surname, email, profilePicture });
  };

  return (
    <div className="bg-gray-100 text-[#08075F]">
      <main className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>

        <div className="mb-8">
          <label htmlFor="profile-picture">
            <img
              id="profile-pic-preview"
              src={profilePicture || "https://placehold.co/150x150"} // Use local state
              alt="Profile Picture"
              className="rounded-full mx-auto mb-4 cursor-pointer hover:opacity-80"
            />
          </label>
          <input
            type="file"
            id="profile-picture"
            className="hidden"
            accept="image/*"
            onChange={previewProfilePicture}
          />
        </div>

        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-lg font-medium mb-2">First Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter your first name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="second-name" className="block text-left text-lg font-medium mb-2">Second Name (Optional)</label>
            <input
              type="text"
              id="second-name"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter your second name"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="surname" className="block text-left text-lg font-medium mb-2">Surname</label>
            <input
              type="text"
              id="surname"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter your surname"
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-lg font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full p-3 bg-[#004AAD] text-white rounded hover:bg-blue-700">Save Profile</button>
        </form>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
