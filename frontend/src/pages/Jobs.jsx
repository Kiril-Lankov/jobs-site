const apiUrl = import.meta.env.VITE_API_URL;

import moment from "moment";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [newFilteredJobs, setNewFilteredJobs] = useState(null);
  const [selectedWays, setSelectedWays] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [changeFilter, setChangeFilter] = useState(true);

  let { category, tech } = useParams();

  useEffect(() => {
    getAllJobs()
      .then((data) => setAllJobs(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getAllJobs()
      .then((data) =>
        setFilteredJobs(
          data
            .filter((job) => job.category[category] === true)
            .filter((job) => job.techStack[tech] === true)
        )
      )
      .catch((error) => console.log(error));
  }, [category, tech, changeFilter]);

  const getAllJobs = async () => {
    try {
      const response = await fetch(`${apiUrl}/jobs`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const handleWayChange = (e) => {
    const { id, checked } = e.target;
    setSelectedWays((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const handleLevelChange = (e) => {
    const { id, checked } = e.target;
    setSelectedLevels((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const applyFilters = () => {
    const filteredByWays = filteredJobs.filter(
      (job) =>
        selectedWays.length === 0 || selectedWays.some((way) => job.way[way])
    );

    const filteredByWaysAndLevels = filteredByWays.filter(
      (job) =>
        selectedLevels.length === 0 ||
        selectedLevels.some((level) => job.level[level])
    );

    setNewFilteredJobs(filteredByWaysAndLevels);
    setChangeFilter((state) => !state);
  };

  return (
    <section className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filter Section */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-bold text-[#00b4d8] mb-4">
            Персонализирай търсенето
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-blue-1000">
              Начин на работа
            </h3>
            <div className="space-y-2 mt-2">
              <div>
                <input
                  type="checkbox"
                  id="remote"
                  className="mr-2"
                  onChange={handleWayChange}
                />
                <label htmlFor="remote">Fully Remote</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="hybrid"
                  className="mr-2"
                  onChange={handleWayChange}
                />
                <label htmlFor="hybrid">Hybrid</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="onSite"
                  className="mr-2"
                  onChange={handleWayChange}
                />
                <label htmlFor="onSite">On-Site</label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-blue-1000">Ниво на опит</h3>
            <div className="space-y-2 mt-2">
              <div>
                <input
                  type="checkbox"
                  id="junior"
                  className="mr-2"
                  onChange={handleLevelChange}
                />
                <label htmlFor="junior">Junior</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="mid"
                  className="mr-2"
                  onChange={handleLevelChange}
                />
                <label htmlFor="mid">Regular / Mid</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="senior"
                  className="mr-2"
                  onChange={handleLevelChange}
                />
                <label htmlFor="senior">Senior</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="lead"
                  className="mr-2"
                  onChange={handleLevelChange}
                />
                <label htmlFor="lead">Lead / Manager</label>
              </div>
            </div>
          </div>
          <button
            onClick={applyFilters}
            className="w-full bg-blue-950 text-white py-2 rounded hover:bg-[#00b4d8]"
          >
            Приложи филтрите
          </button>
        </div>

        {/* Job Listings Section */}
        <div className="col-span-3 space-y-6">
          {newFilteredJobs
            ? newFilteredJobs.map((job) => (
                <Link
                  key={job._id}
                  to={`/jobs/${job._id}`}
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  <div className="bg-white p-6 shadow rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">
                        {job.title}
                      </h3>
                      <p className="text-gray-600">
                        Technologies:
                        {Object.entries(job.techStack).map(([key, value]) => {
                          if (!value) return;
                          return (
                            <span key={key} className="font-semibold ml-2">
                              {key}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                    <div className="text-gray-500">
                      {moment(job.date).format("LL")}
                    </div>
                  </div>
                </Link>
              ))
            : filteredJobs.map((job) => (
                <Link
                  key={job._id}
                  to={`/jobs/${job._id}`}
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  <div className="bg-white p-6 shadow rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">
                        {job.title}
                      </h3>
                      <p className="text-gray-600">
                        Technologies:
                        {Object.entries(job.techStack).map(([key, value]) => {
                          if (!value) return;
                          return (
                            <span key={key} className="font-semibold ml-2">
                              {key}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                    <div className="text-gray-500">
                      {moment(job.date).format("LL")}
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
