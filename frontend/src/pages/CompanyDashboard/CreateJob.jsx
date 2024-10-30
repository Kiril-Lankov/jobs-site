const apiUrl = import.meta.env.VITE_API_URL;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const formInitialState = {
  title: "",
  techStack: {
    sql: false,
    nosql: false,
    javascript: false,
    java: false,
    python: false,
    c: false,
    htmlcss: false,
    angular: false,
    react: false,
    laravel: false,
  },
  level: {
    junior: false,
    mid: false,
    senior: false,
    lead: false,
  },
  way: {
    remote: false,
    hybrid: false,
    onSite: false,
  },
  position: "",
  text: "",
  role: [],
  category: {
    frontend: false,
    backend: false,
  },

  owner: "",
};

const CreateJob = () => {
  const [formData, setFormData] = useState(formInitialState);
  const [countInput, setCountInput] = useState(0);
  const [allQuestionnaire, setAllQuestionnaire] = useState([]);
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState([]);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getAllQuestionnaire()
      .then((data) => setAllQuestionnaire(data))
      .catch((error) => console.log(error));
  }, []);

  const getAllQuestionnaire = async () => {
    try {
      const response = await fetch(`${apiUrl}/questionnaire`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const handleCountInput = (e) => {
    e.preventDefault();
    setCountInput((oldState) => oldState + 1);
  };

  const handleSelectTypeQuestionnaire = (e) => {
    e.preventDefault();
    const { value, id } = e.target;
    setSelectedQuestionnaire(allQuestionnaire.find((q) => q.type === value));
  };

  // Handle category
  const handleCategoryChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      category: {
        ...prevData.category,
        [id]: checked,
      },
    }));
  };

  // Handle tech stack
  const handleTechStackChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      techStack: {
        ...prevData.techStack,
        [id]: checked,
      },
    }));
  };

  const handleLevelChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      level: {
        ...prevData.level,
        [id]: checked,
      },
    }));
  };

  const handleWayChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      way: {
        ...prevData.way,
        [id]: checked,
      },
    }));
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle role input change
  const handleRoleInputChange = (e, index) => {
    const { value } = e.target;
    const updatedRoles = [...formData.role];
    updatedRoles[index] = value;
    setFormData({ ...formData, role: updatedRoles });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) {
      newErrors.title = "Job title is required.";
    }
    if (!formData.position) {
      newErrors.position = "Position is required.";
    }
    if (!formData.text) {
      newErrors.text = "Job information is required.";
    }

    // Check if at least one level is selected
    const isLevelSelected = Object.values(formData.level).some((val) => val);
    if (!isLevelSelected) {
      newErrors.level = "At least one job level must be selected.";
    }

    // Check if at least one way of work is selected
    const isWaySelected = Object.values(formData.way).some((val) => val);
    if (!isWaySelected) {
      newErrors.way = "At least one work arrangement must be selected.";
    }

    // Check if at least one category is selected
    const isCategorySelected = Object.values(formData.category).some(
      (val) => val
    );
    if (!isCategorySelected) {
      newErrors.category = "At least one category must be selected.";
    }
    // Check if at least one tech stack is selected
    const isTechStackSelected = Object.values(formData.techStack).some(
      (val) => val
    );
    if (!isTechStackSelected) {
      newErrors.techStack = "At least one tech stack must be selected.";
    }

    // Check if at least one role is selected
    if (formData.role.length === 0 || formData.role.some((role) => !role)) {
      newErrors.role = "At least one job role must be provided.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const userToken = JSON.parse(localStorage.getItem("token"));
    const userId = userToken._id;

    const dataToSend = {
      ...formData,
      allQuestionnaire: selectedQuestionnaire,
      owner: userId,
    };

    const result = await createJob(dataToSend);

    navigate("/");
  };

  const createJob = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create a Job</h2>

        <label htmlFor="title" className="block mb-2">
          Job title
        </label>
        <input
          type="text"
          id="title"
          onKeyUp={() => validateForm()}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        {errors.title && (
          <p className="mb-4 text-red-500 text-sm">{errors.title}</p>
        )}

        <label htmlFor="position" className="block mb-2">
          Position
        </label>
        <input
          type="text"
          id="position"
          onKeyUp={() => validateForm()}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        {errors.position && (
          <p className="text-red-500 text-sm">{errors.position}</p>
        )}

        <label htmlFor="level" className="block font-semibold mb-2">
          Level
        </label>
        <label htmlFor="junior" className="flex items-center mb-2">
          <input
            type="checkbox"
            id="junior"
            checked={formData.level.junior}
            onSelect={() => validateForm()}
            onChange={handleLevelChange}
            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-0 focus:ring-blue-500"
          />
          Junior
        </label>
        <label htmlFor="mid" className="flex items-center mb-2">
          <input
            type="checkbox"
            id="mid"
            checked={formData.level.min}
            onSelect={() => validateForm()}
            onChange={handleLevelChange}
            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-0 focus:ring-blue-500"
          />
          Regular/Mid
        </label>
        <label htmlFor="senior" className="flex items-center mb-2">
          <input
            type="checkbox"
            id="senior"
            checked={formData.level.senior}
            onSelect={() => validateForm()}
            onChange={handleLevelChange}
            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-0 focus:ring-blue-500"
          />
          Senior
        </label>
        <label htmlFor="lead" className="flex items-center mb-2">
          <input
            type="checkbox"
            id="lead"
            checked={formData.level.lead}
            onSelect={() => validateForm()}
            onChange={handleLevelChange}
            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-0 focus:ring-blue-500"
          />
          Lead
        </label>
        {errors.level && (
          <p className="mb-4 text-red-500 text-sm">{errors.level}</p>
        )}

        <label htmlFor="way" className="block font-semibold mb-2">
          Way of work
        </label>
        <label htmlFor="remote" className="flex items-center mb-2">
          <input
            type="checkbox"
            id="remote"
            checked={formData.level.remote}
            onSelect={() => validateForm()}
            onChange={handleWayChange}
            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-0 focus:ring-blue-500"
          />
          Fully Remote
        </label>
        <label htmlFor="hybrid" className="flex items-center mb-2">
          <input
            type="checkbox"
            id="hybrid"
            checked={formData.level.hybrid}
            onSelect={() => validateForm()}
            onChange={handleWayChange}
            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-0 focus:ring-blue-500"
          />
          Hybrid
        </label>
        <label htmlFor="onSite" className="flex items-center mb-2">
          <input
            type="checkbox"
            id="onSite"
            checked={formData.level.onSite}
            onSelect={() => validateForm()}
            onChange={handleWayChange}
            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-0 focus:ring-blue-500"
          />
          On-Site
        </label>
        {errors.way && (
          <p className="mb-4 text-red-500 text-sm">{errors.way}</p>
        )}

        <label htmlFor="category" className="block font-semibold mb-2">
          Category
        </label>
        <label htmlFor="frontend" className="flex items-center mb-2">
          <input
            type="checkbox"
            id="frontend"
            checked={formData.category.frontend}
            onSelect={() => validateForm()}
            onChange={handleCategoryChange}
            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-0 focus:ring-blue-500"
          />
          Frontend
        </label>
        <label htmlFor="backend" className="flex items-center mb-2">
          <input
            type="checkbox"
            id="backend"
            checked={formData.category.backend}
            onSelect={() => validateForm()}
            onChange={handleCategoryChange}
            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-0 focus:ring-blue-500"
          />
          Backend
        </label>
        {errors.category && (
          <p className="mb-4 text-red-500 text-sm">{errors.category}</p>
        )}

        <label htmlFor="stack" className="block font-semibold mb-2">
          Tech Stack
        </label>
        {Object.keys(formData.techStack).map((stack) => (
          <label key={stack} htmlFor={stack} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={stack}
              checked={formData.techStack[stack]}
              onSelect={() => validateForm()}
              onChange={handleTechStackChange}
              className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-offset-0 focus:ring-blue-500"
            />
            {stack.toUpperCase()}
          </label>
        ))}
        {errors.techStack && (
          <p className="mb-4 text-red-500 text-sm">{errors.techStack}</p>
        )}

        <label htmlFor="text" className="block mb-2 mt-6">
          Information about job
        </label>
        <textarea
          id="text"
          onKeyUp={() => validateForm()}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        {errors.text && (
          <p className="mb-4  text-red-500 text-sm">{errors.text}</p>
        )}

        <div className="flex items-center mb-4">
          <label htmlFor="role" className="text-gray-600">
            Job roles
          </label>
          <button
            onClick={handleCountInput}
            type="button"
            className="ml-4 p-2 bg-[#004AAD] text-white rounded"
          >
            Add Role
          </button>
        </div>

        {[...Array(countInput)].map((_, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              onChange={(e) => handleRoleInputChange(e, index)}
              onKeyUp={() => validateForm()}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder={`Role ${index + 1}`}
              value={formData.role[index] || ""}
            />
          </div>
        ))}
        {errors.role && (
          <p className="mb-4 text-red-500 text-sm">{errors.role}</p>
        )}

        <button
          type="submit"
          className="w-full p-2 bg-[#004AAD] text-white rounded"
        >
          Submit
        </button>
      </form>
      <form
        onSubmit={handleSelectTypeQuestionnaire}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Choose questionnaire
        </h2>
        <select
          name="questionnaireType"
          id="type"
          onChange={(e) => handleSelectTypeQuestionnaire(e)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        >
          <option value="">Choose</option>
          {allQuestionnaire.map((question, index) => (
            <option key={question._id} value={question.type}>
              {question.type}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default CreateJob;
