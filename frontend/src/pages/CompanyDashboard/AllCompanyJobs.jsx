import moment from "moment";
import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const AllCompanyJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [myProfile, setMyProfile] = useState([]);
  const [myCompanyJobs, setMyCompanyJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [showMyCompanyJobs, setShowMyCompanyJobs] = useState(false);

  useEffect(() => {
    getAllJobs();
    getMyProfile();
  }, []);

  // Fetch all jobs
  const getAllJobs = async () => {
    try {
      const response = await fetch(`${apiUrl}/jobs`);
      const result = await response.json();
      setAllJobs(result);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const getMyProfile = async () => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    const userId = userToken._id;
    try {
      const response = await fetch(`${apiUrl}/api/auth/${userId}/jobs`);
      const result = await response.json();

      setMyProfile(result);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  useEffect(() => {
    if (myProfile && allJobs.length) {
      const filteredJobs = allJobs.filter((job) => job.owner == myProfile._id);
      setMyCompanyJobs(filteredJobs);
    }
  }, [myProfile, allJobs]);

  // Toggle between showing all jobs and only company jobs
  useEffect(() => {
    setDisplayJobs(showMyCompanyJobs ? myCompanyJobs : allJobs);
  }, [showMyCompanyJobs, allJobs, myCompanyJobs]);

  const handleToggleJobs = () => {
    setShowMyCompanyJobs((prevState) => !prevState);
  };

  return (
    <div className="container mx-auto py-8">
      <section className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-8">Информация за Компанията</h1>
        <h1 className="text-4xl font-bold mb-8">Всички обяви на компанията</h1>
        <button
          onClick={handleToggleJobs}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          {showMyCompanyJobs
            ? "Покажи всички обяви"
            : "Покажи обявите на моята компания"}
        </button>
      </section>

      {/* Job Listings Section */}
      <div className="col-span-3 space-y-6">
        {displayJobs.length > 0
          ? displayJobs.map((job) => (
              <div key={job._id} className="block px-4 py-2 hover:bg-gray-50">
                <div className="bg-white p-6 shadow rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">
                      {job.title}
                    </h3>
                    <p className="text-gray-600">
                      Technologies:
                      {Object.entries(job.techStack).map(([key, value]) => {
                        if (!value) return null;
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
              </div>
            ))
          : myCompanyJobs.map((job) => (
              <div key={job._id} className="block px-4 py-2 hover:bg-gray-50">
                <div className="bg-white p-6 shadow rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">
                      {job.title}
                    </h3>
                    <p className="text-gray-600">
                      Technologies:
                      {Object.entries(job.techStack).map(([key, value]) => {
                        if (!value) return null;
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
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllCompanyJobs;
