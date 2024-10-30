import { useState } from "react";

const formInitialState = {
  companyName: "",
  vat: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAccepted: false,
};

const errorInitialState = {
  companyName: "",
  vat: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAccepted: "",
};

// eslint-disable-next-line react/prop-types
const CompanyRegister = ({ onSubmit }) => {
  const [formData, setFormData] = useState(formInitialState);
  const [errors, setErrors] = useState(errorInitialState);
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = { ...errorInitialState };

    // Name validation
    if (!formData.companyName) {
      newErrors.companyName = "Name is required";
      formIsValid = false;
    }

    // VAT validation
    if (!formData.vat) {
      newErrors.vat = "Name is required";
      formIsValid = false;
    }

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

    // rePassword validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = "Password and confirm password is not the same!";
      formIsValid = false;
    }

    setErrors(newErrors);
    setIsValid(formIsValid);
  };

  const handleInputChange = (e) => {
    const { id, value, checked } = e.target;
    setFormData({
      ...formData,
      [id]: id === "termsAccepted" ? checked : value,
    });
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
      <h2 className="text-2xl font-bold mb-4 text-center">
        Register as Company
      </h2>

      <label htmlFor="companyName" className="block mb-2">
        Company Name
      </label>
      <input
        type="text"
        id="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        onKeyUp={() => validateForm()}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        required
      />
      {errors.companyName && (
        <p className="text-red-500 text-sm">{errors.companyName}</p>
      )}
      <label htmlFor="vat" className="block mb-2">
        VAT Number
      </label>
      <input
        type="text"
        id="vat"
        value={formData.vat}
        onChange={handleInputChange}
        onKeyUp={() => validateForm()}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        required
      />
      {errors.vat && <p className="text-red-500 text-sm">{errors.vat}</p>}
      <label htmlFor="email" className="block mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
        onKeyUp={() => validateForm()}
        className="w-full p-2 border border-gray-300 rounded mb-4"
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
        className="w-full p-2 border border-gray-300 rounded mb-4"
        required
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}
      <label htmlFor="confirmPassword" className="block mb-2">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        onKeyUp={() => validateForm()}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        required
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
      )}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="termsAccepted"
          value={formData.termsAccepted}
          onChange={handleInputChange}
          className="mr-2"
        />
        <label htmlFor="termsAccepted" className="text-gray-600">
          I agree to the General Conditions and Privacy Notice.
        </label>
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-[#004AAD] text-white rounded"
      >
        Register
      </button>
    </form>
  );
};

export default CompanyRegister;