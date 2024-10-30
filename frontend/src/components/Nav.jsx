import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

import Modal from './Modal';
import LogoutButton from '../elements/LogoutButton';
import CompanyNav from '../elements/CompanyNav';
import EmployeeNav from '../elements/EmployeeNav';
import imageTen from '../assets/pictures/10.png';
import logo from '../assets/pictures/2.png';

const Nav = () => {
    const [isModalToggled, setIsModalToggled] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [userRole, setUserRole] = useState('');
    const { userInfo, userType } = useAuth();

    const location = useLocation();

    // Open the modal with the specified title and user role
    const openModal = (title, role) => {
        setModalTitle(title);
        setUserRole(role);
        setIsModalToggled(true);
    };

    return (
        <>
            <header className="bg-white text-[#004AAD] py-4 border-b border-blue-200">
                <nav className="container mx-auto ">
                    <div className="flex flex-row justify-between items-center w-full">
                        {location.pathname == '/' ?
                            <a href="/">
                                <img src={logo} alt="Job Portal Logo" className="h-[65px] w-auto" />
                            </a>
                            :
                            <a href="/">
                                <img src={imageTen} alt="Job Portal Logo" className="h-[65px] w-auto" />
                            </a>}

                        <nav>
                            {userType === 'employee' ? (
                                <EmployeeNav />
                            ) : userType === 'company' ? (
                                <CompanyNav />
                            ) : (
                                <ul className="flex flex-row justify-center items-center space-x-6">
                                    {location.pathname !== '/' ?
                                        <li>
                                            <Link to="/" className="hover:underline">
                                                Начало
                                            </Link>
                                        </li> :
                                        null}
                                    <li>
                                        <button onClick={() => openModal('Employee Login', 'employee')} className="hover:underline">
                                            Намери Работа
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => openModal('Company Login', 'company')} className="hover:underline">
                                            Създай обява
                                        </button>
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
                                </ul>
                            )}
                        </nav>

                        {userInfo ? (
                            <LogoutButton />
                        ) : (
                            <Link to="/login" className="text-[#004AAD] ml-5 flex items-center">
                                Login
                            </Link>
                        )}
                    </div>
                </nav>
            </header>

            {/* Modal Component */}
            <Modal
                isToggled={isModalToggled}
                setIsModalToggled={setIsModalToggled}
                title={modalTitle}
                userRole={userRole}
            />
        </>
    );
};

export default Nav;
