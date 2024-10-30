import { useState } from "react";

const formInitialState = {
  email: "",
  password: "",
};

const errorInitialState = {
  email: "",
  password: "",
};

// eslint-disable-next-line react/prop-types
const EmployeeLogin = ({ onSubmit }) => {
  const [formData, setFormData] = useState(formInitialState);
  const [errors, setErrors] = useState(errorInitialState);
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = { ...errorInitialState };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      formIsValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      formIsValid = false;
    } else if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 6 characters long";
      formIsValid = false;
    }

    setErrors(newErrors);
    setIsValid(formIsValid);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(formData);
      setFormData(formInitialState);
      setErrors(errorInitialState);
    } else {
      validateForm();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Login as Employee</h2>

      <label htmlFor="email" className="block mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
        onKeyUp={() => validateForm()}
        className="w-full p-2 border border-gray-300 rounded mb-1"
        required
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <label htmlFor="password" className="block mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={formData.password}
        onChange={handleInputChange}
        onKeyUp={() => validateForm()}
        className="w-full p-2 border border-gray-300 rounded mb-1"
        required
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}

      <button
        type="submit"
        className={`w-full p-2 bg-[#004AAD] text-white rounded ${
          !isValid ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={!isValid}
      >
        Login
      </button>
    </form>
  );
};

export default EmployeeLogin;
