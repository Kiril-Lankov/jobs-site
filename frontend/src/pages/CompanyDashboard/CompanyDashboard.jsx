import { Link} from 'react-router-dom'

const CompanyDashboard = () => {
  return (
    <div className="bg-white text-[#08075F]">
      <div className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-8">Табло на Компанията</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <Link to="/company-dashboard/active-jobs" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg block">
            <h2 className="text-xl font-bold">Активни обяви</h2>
            <p>Преглеждайте и управлявайте вашите активни обяви за работа.</p>
          </Link>

          <Link to="/company-dashboard/cv-library" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg block">
            <h2 className="text-xl font-bold">CV Библиотека</h2>
            <p>Достъп до списъка с кандидати и автобиографии.</p>
          </Link>

          <Link to="/company-dashboard/questionnaires" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg block">
            <h2 className="text-xl font-bold">Моите Въпросници</h2>
            <p>Създавайте и управлявайте вашите въпросници.</p>
          </Link>

          <Link to="/company-dashboard/all-jobs" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg block">
            <h2 className="text-xl font-bold">Моите Обяви</h2>
            <p>Създавайте и управлявайте въпросници за работа.</p>
          </Link>
          
          <Link to="/company-dashboard/company-profile" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg block">
            <h2 className="text-xl font-bold">Профил</h2>
            <p>Редактирайте подробностите и информацията за вашата компания.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
