import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { SwitchLang } from './SwitchLang.jsx'
import CartWidget from './CartWidget.jsx';
import logo from '../assets/images/navbarLogo/profile.jpeg'


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 z-50">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row items-center md:justify-between">
          <a href="#" className="flex items-center">
            <img src={logo} className="h-8" alt="ServiceCraft Logo"/>
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">{t('navbar.links.appName')}</span>
          </a>
        <div className="flex ml-auto space-x-3 rtl:space-x-reverse">
          <button data-collapse-toggle="navbar-sticky" type="button" className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isDropdownOpen} onClick={toggleDropdown}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center md:space-x-8 flex-grow">
          <a href="#" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">{t('navbar.links.home')}</a>
          <a href="#" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">{t('navbar.links.about')}</a>
          <a href="#" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">{t('navbar.links.services')}</a>
          <a href="#" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">{t('navbar.links.contact')}</a>
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
