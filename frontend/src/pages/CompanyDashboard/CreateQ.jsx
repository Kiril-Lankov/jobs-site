const apiUrl = "http://localhost:3000";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formInitialState = {
  question: "",
  countAnswers: "",
  answers: [],
};

const CreateQ = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [type, setType] = useState();

  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setType(value);
  };

  const handleInputChange = (e, index) => {
    const { id, value } = e.target;

    setAllQuestions((prev) =>
      prev.map((q, i) =>
        i === index
          ? { ...q, [id]: id === "answers" ? [...q.answers, value] : value }
          : q
      )
    );
  };

  const addQuestionForm = () => {
    setAllQuestions([...allQuestions, formInitialState]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userToken = JSON.parse(localStorage.getItem("token"));
    const userId = userToken._id;

    const dataToSend = {
      questionnaire: allQuestions,
      owner: userId,
      type: type,
    };
    const result = await createQuestionnaire(dataToSend);

    navigate("/");
  };

  const createQuestionnaire = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/questionnaire`, {
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
    <div className="min-h-screen flex flex-col items-center mt-[100px]">
      <label htmlFor="questionnaireType" className="block mb-2 font-bold">
        Questionnaire Type
      </label>
      <select
        name="questionnaireType"
        id="type"
        disabled={type ? true : false}
        onChange={(e) => handleSelectChange(e)}
        className="w-[300px] p-2 border border-gray-300 rounded mb-4"
        required
      >
        <option value="">Choose</option>
        <option value="sql">SQL</option>
        <option value="nosql">NoSQL</option>
        <option value="js">JavaScript</option>
        <option value="java">Java</option>
      </select>
      <button
        onClick={addQuestionForm}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Add a Question
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Create a Questionnaire
      </h2>
      {type &&
        allQuestions.map((question, index) => (
          <form
            key={index}
            className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto mb-4"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Create a Question {index + 1}
            </h2>

            <label htmlFor="question" className="block mb-2">
              Write question here
            </label>
            <input
              type="text"
              id="question"
              value={question.question || ""}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <label htmlFor="countAnswers" className="block mb-2">
              Number of Answers
            </label>
            <select
              id="countAnswers"
              value={question.countAnswers || ""}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            >
              <option value="">Select</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            {/* Answer inputs */}
            {question.countAnswers &&
              [...Array(Number(question.countAnswers))].map(
                (_, answerIndex) => (
                  <div key={answerIndex} className="mb-4">
                    <label
                      htmlFor={`answer${answerIndex}`}
                      className="block mb-2"
                    >
                      Answer {answerIndex + 1}
                    </label>
                    <input
                      type="text"
                      id="answers"
                      onBlur={(e) => handleInputChange(e, index)}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                )
              )}
          </form>
        ))}
      {type && allQuestions.length > 0 ? (
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-[300px] p-2 bg-blue-500 text-white rounded"
        >
          Save Questionnaire
        </button>
      ) : null}
    </div>
  );
};

export default CreateQ;
