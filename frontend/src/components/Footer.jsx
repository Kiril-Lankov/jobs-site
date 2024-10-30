import { Link } from 'react-router-dom';
import imageTen from '../assets/pictures/10.png'


import { FaFacebook, FaInstagram, FaLinkedin  } from 'react-icons/fa';

const Footer = () => {
    return (
        // Footer 
        <footer className="bg-white text-[#004AAD] py-8 mt-12 border-t border-blau-200">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* <!-- Logo on the left --> */}
                <div className="mb-4 md:mb-0">
                    <Link to="/home">
                        <img src={imageTen} alt="Footer Logo" className="h-12 w-auto" />
                    </Link>
                </div>

                {/* <!-- Links column --> */}
                <div className="text-center mb-4 md:mb-0">
                    <ul className="space-x-6 text-[#004AAD] flex flex-row justify-center items-center">
                        <li className="ml-5"><Link to="/about" className="hover:underline">За Нас</Link></li>
                        <li className="ml-5"><Link to="/contact" className="hover:underline">Контакти</Link></li>
                        <li className="ml-5"><Link to="#" className="hover:underline">За Работодатели</Link></li>
                        <li className="ml-5"><Link to="/conditions" className="hover:underline">Общи Условия</Link></li>
                        <li className="ml-5"><Link to="/privacy" className="hover:underline">Уведомление за поверителност</Link></li>
                        <li className="ml-5"><Link to="/cookie-policy" className="hover:underline">Политика за използване на бисквитки</Link></li>
                    </ul>
                </div>

                {/* <!-- Social media icons column --> */}
                <div className="flex space-x-4">
                    <Link to="https://www.linkedin.com" target="_blank" className="text-[#004AAD]">
                    <FaLinkedin className='size-8' />
                    </Link>
                    <Link to="https://www.facebook.com" target="_blank" className="text-[#004AAD]">
                    <FaFacebook className='size-8'/>
                    </Link>
                    <Link to="https://www.instagram.com" target="_blank" className="text-[#004AAD]">
                    <FaInstagram className='size-8'/>
                    </Link>
                </div>
            </div>
            <p></p>
            <div className="text-center mt-4">
                <p>&copy; 2024 Job Listings. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
