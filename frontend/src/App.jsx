import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ProtectedRoute from "./features/protectedRoutes";
import useCookies from "./hooks/useCookie";

// Lazy load components
const About = lazy(() => import("./pages/CompanyDashboard/CreateQ"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const EmployeeDashboard = lazy(() => import("./pages/EmployeeDashboard"));
const CompanyDashboard = lazy(() =>
  import("./pages/CompanyDashboard/CompanyDashboard")
);
const GeneralConditions = lazy(() => import("./pages/GeneralConditions"));
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Privacy = lazy(() => import("./pages/Privacy"));
const JobCategories = lazy(() => import("./pages/JobCategories"));
const Jobs = lazy(() => import("./pages/Jobs"));
const ActiveJobs = lazy(() => import("./pages/CompanyDashboard/ActiveJobs"));
const AllCompanyJobs = lazy(() =>
  import("./pages/CompanyDashboard/AllCompanyJobs")
);
const CompanyProfile = lazy(() =>
  import("./pages/CompanyDashboard/CompanyProfile")
);
const CvLibrary = lazy(() => import("./pages/CompanyDashboard/CvLibrary"));
const Questioniers = lazy(() =>
  import("./pages/CompanyDashboard/Questioniers")
);
const CreateQ = lazy(() => import("./pages/CompanyDashboard/CreateQ"));
const CreateJob = lazy(() => import("./pages/CompanyDashboard/CreateJob"));
const JobCreation = lazy(() => import("./pages/JobCreation"));
const NotAuthorized = lazy(() => import("./error/NotAuthorized"));
const Nav = lazy(() => import("./components/Nav"));
const Footer = lazy(() => import("./components/Footer"));
const CookieBanner = lazy(() => import("./components/CookieBanner"));

function App() {
  const { showBanner, acceptCookies, rejectCookies } = useCookies();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get("mode") || "login"; // Default to 'login'
  const userType = queryParams.get("userType") || "employee"; // Default to 'employee'

  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <ClipLoader color="#4A90E2" size={50} />
          </div>
        }
      >
        <Nav />

        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={<AuthPage mode={mode} userType={userType} />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conditions" element={<GeneralConditions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Protected routes for employees */}
          <Route
            path="/employee-dashboard"
            element={
              <ProtectedRoute allowedRoles={["employee"]}>
                <EmployeeDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/job-categories"
            element={
              <ProtectedRoute allowedRoles={["employee"]}>
                <JobCategories />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobs/:category/:tech"
            element={
              <ProtectedRoute allowedRoles={["employee"]}>
                <Jobs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/jobs/:id"
            element={
              <ProtectedRoute allowedRoles={["employee"]}>
                <JobCreation />
              </ProtectedRoute>
            }
          />

          {/* Protected routes for companies */}
          <Route
            path="/company-dashboard"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <CompanyDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/company-dashboard/active-jobs"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <ActiveJobs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/company-dashboard/all-jobs"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <AllCompanyJobs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/company-dashboard/company-profile"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <CompanyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/company-dashboard/cv-library"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <CvLibrary />
              </ProtectedRoute>
            }
          />
          <Route
            path="/company-dashboard/questionnaires"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <Questioniers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/company-dashboard/create-questionnaires"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <CreateQ />
              </ProtectedRoute>
            }
          />
          <Route
            path="/company-dashboard/create-job"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <CreateJob />
              </ProtectedRoute>
            }
          />

          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />

        {/* Cookie banner conditionally displayed */}
        <CookieBanner
          showBanner={showBanner}
          onAccept={acceptCookies}
          onReject={rejectCookies}
        />
      </Suspense>
    </>
  );
}

export default App;
