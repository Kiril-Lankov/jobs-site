import { Link } from "react-router-dom";

const EmployeeNav = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full">
        <ul className="flex flex-row justify-center items-center space-x-6">
          <li>
            <Link to="/home" className="hover:underline">
              Начало
            </Link>
          </li>
          <li>
            <Link to="/job-categories" className="hover:underline">
              Търсене на работа
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              За Нас
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Контакти
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:underline">
              Блог
            </Link>
          </li>
          <li>
            <Link to="/employee-dashboard">Профил</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EmployeeNav;
