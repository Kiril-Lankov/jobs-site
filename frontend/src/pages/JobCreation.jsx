import moment from "moment";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const JobCreation = () => {
  const [job, setJob] = useState(null);
  const [isClickedButton, setIsClickedButton] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleOnClick = () => {
    setIsClickedButton(false);
  };

  const handleOnClickFinishQuestion = async () => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    const userId = userToken._id;
    const email = userToken.email;

    const data = { userId, email, selectedAnswers };

    console.log(data);

    try {
      const response = await fetch(`${apiUrl}/jobs/${id}/candidate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("HTTP error", response.status);
        const errorText = await response.text();
        console.error("Error response:", errorText);
        return;
      }

      const result = await response.json();
      navigate("/");
    } catch (error) {
      console.log("ERROR:", error);
    }

    setIsClickedButton(true);
  };

  useEffect(() => {
    const getOneJob = async () => {
      try {
        const response = await fetch(`${apiUrl}/jobs/${id}`);
        const result = await response.json();

        setJob(result);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };
    getOneJob();
  }, [id]);

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const isFormComplete = () => {
    return (
      job &&
      job.allQuestionnaire.every((x) =>
        x.questionnaire.every((q) => selectedAnswers[q.question])
      )
    );
  };

  if (!job) return <p>Loading job details...</p>;

  return (
    <div className="container mx-auto">
      <nav className="py-4 px-6 text-gray-600">
        <Link to="/jobs" className="hover:underline text-blue-600">
          {job.position}
        </Link>{" "}
        / Обяви за работа
      </nav>
      {isClickedButton ? (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
          <section className="md:col-span-2 bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-600">{job.title}</h2>
              <button
                onClick={handleOnClick}
                className="bg-blue-600 text-white py-2 px-4 rounded"
              >
                Кандидатствай
              </button>
            </div>
            <p className="text-gray-500 mb-4">
              {job.date ? moment(job.date).format("LL") : "Date not available"}
            </p>

            <h3 className="text-lg font-bold text-gray-700 mb-2">
              ИЗИСКВАНИ ТЕХНОЛОГИИ
            </h3>
            <div className="flex space-x-2 mb-4">
              {job.techStack &&
                Object.entries(job.techStack).map(([key, value]) =>
                  value ? (
                    <span key={key} className="font-semibold ml-2">
                      {key.toUpperCase()}
                    </span>
                  ) : null
                )}
            </div>

            <p className="text-lg font-bold mb-2">
              We are looking for {job.title}
            </p>
            <p className="text-gray-700 mb-4">{job.text}</p>

            <h4 className="text-md font-bold text-gray-700">Your Role</h4>
            <ul className="list-disc pl-5 text-gray-700">
              {job.role && job.role.map((role) => <li key={role}>{role}</li>)}
            </ul>
            <button
              onClick={handleOnClick}
              className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
            >
              Кандидатствай
            </button>
          </section>

          <aside className="bg-white shadow rounded-lg p-6">
            <img
              src="company-logo.png"
              alt="Company Logo"
              className="h-20 w-20 mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              WEB-IT SOLUTIONS
            </h3>
            <p className="text-gray-700 mb-4">
              е иновативна компания работеща в сферата на финансовите услуги.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded mb-4 w-full">
              Повече информация за компанията
            </button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded w-full">
              Всички обяви на компанията
            </button>
          </aside>
        </section>
      ) : (
        <section className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 my-8">
          <h2 className="font-extrabold text-center">QUESTIONNAIRE</h2>
          {job.allQuestionnaire.map((x) =>
            x.questionnaire.map((q, index) => (
              <div key={index} className="mb-6">
                <h2 className="font-semibold text-lg">{q.question}</h2>
                <div className="flex flex-wrap gap-4">
                  {q.answers.map((a) => (
                    <label key={a} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={q.question}
                        value={a}
                        checked={selectedAnswers[q.question] === a}
                        onChange={() => handleAnswerChange(q.question, a)}
                        className="hidden peer"
                      />
                      <span className="flex items-center cursor-pointer p-2 rounded border border-gray-300 peer-checked:bg-blue-600 peer-checked:text-white">
                        {a}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))
          )}
          <button
            onClick={handleOnClickFinishQuestion}
            disabled={!isFormComplete()}
            className={`w-full mt-4 p-2 rounded ${
              isFormComplete()
                ? "bg-blue-600 text-white"
                : "bg-gray-400 text-gray-300 cursor-not-allowed"
            }`}
          >
            Приключи кандидатсване
          </button>
        </section>
      )}
    </div>
  );
};

export default JobCreation;
