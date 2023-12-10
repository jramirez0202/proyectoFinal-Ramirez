import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { SwitchLang } from '../SwitchLang/SwitchLang'
import CartWidget from '../CartWidget/CartWidget.jsx';
import logo from '../../assets/images/navbarLogo/profile.jpeg';
import {Link, NavLink, useNavigate} from "react-router-dom"


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 z-40">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row items-center md:justify-between">
        <Link to='/'>
        <div className="flex items-center">
            <img src={logo} className="h-8" alt="ServiceCraft Logo"/>
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">{t('navbar.links.appName')}</span>
        </div>
        </Link>
        <div className="flex ml-auto space-x-3 rtl:space-x-reverse">
          <button data-collapse-toggle="navbar-sticky" type="button" className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isDropdownOpen} onClick={toggleDropdown}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center md:space-x-8 flex-grow">
          {/* <NavLink to="/" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">{t('navbar.links.home')}</NavLink>
          <NavLink to="/about" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">{t('navbar.links.about')}</NavLink>
          <NavLink to="/services" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">{t('navbar.links.services')}</NavLink>
          <NavLink to="/contact" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">{t('navbar.links.contact')}</NavLink> */}
          <NavLink to="/category/ropa" className ={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{t('navbar.links.clothing')}</NavLink>
          <NavLink to="/category/electronica" className ={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{t('navbar.links.electronic')}</NavLink>
          <NavLink to="/category/deporte" className ={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{t('navbar.links.sport')}</NavLink>
        </div>



        <div className="flex ml-auto md:space-x-10">
            <CartWidget/>
            <SwitchLang/>
        </div>
        <div id="navbar-sticky" className={`${isDropdownOpen ? 'block' : 'hidden' } w-full md:hidden mt-16 bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}>
          <ul className="flex flex-col font-medium mt-4 rounded-lg">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">{t('navbar.links.home')}</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{t('navbar.links.about')}</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">{t('navbar.links.services')}</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{t('navbar.links.contact')}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
