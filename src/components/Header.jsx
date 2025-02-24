import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import logo from "../images/LOGO.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import "../languages/i18n"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  // Sayt yuklanganda oldingi tilni o‘rnatish
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "uz";
    i18n.changeLanguage(savedLang);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Tanlangan tilni saqlash
  };

  return (
    <header>
      <div className="bg-[#0f3061] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center justify-start gap-8">
            <div className="flex justify-start items-center gap-2">
              <FiMail className="text-[18px]" />
              <a href="#" className="text-sm cursor-default">karpage@gmail.com</a>
            </div>
            <div className="flex justify-start items-center gap-2">
              <BsFillTelephoneFill />
              <a href="#" className="text-sm">+998 93 173 84 27</a>
            </div>
          </div>

          <div className="md:flex justify-between items-center gap-3 hidden">
            <button
              onClick={() => changeLanguage("uz")}
              className="text-[14px] text-gray-400 hover:text-white active:scale-95 duration-300">
              UZ
            </button>
            |
            <button
              onClick={() => changeLanguage("en")}
              className="text-[14px] text-gray-400 hover:text-white active:scale-95 duration-300">
              EN
            </button>
            |
            <button
              onClick={() => changeLanguage("kr")}
              className="text-[14px] text-gray-400 hover:text-white active:scale-95 duration-300">
              KR
            </button>
            |
            <button
              onClick={() => changeLanguage("ru")}
              className="text-[14px] text-gray-400 hover:text-white active:scale-95 duration-300">
              RU
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white text-[#242C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <NavLink to={"/"}>
            <div className="flex items-center">
              <img src={logo} alt="KariPage" className="h-8 w-auto mr-2" />
            </div>
          </NavLink>

          <nav className="hidden md:flex space-x-4 text-[14px]">
            <a href="#" className="hover:underline duration-500 font-medium">
              {t("header.nav.main")}
            </a>
            <a href="#" className="hover:underline duration-500 font-medium">
              {t("header.nav.news")}
            </a>
            <a href="#" className="hover:underline duration-500 font-medium">
              {t("header.nav.courses")}
            </a>
            <a href="#" className="hover:underline duration-500 font-medium">
              {t("header.nav.media")}
            </a>
            <a href="#" className="hover:underline duration-500 font-medium">
              {t("header.nav.location")}
            </a>
          </nav>




          <NavLink to="/contact">
            <button className="hidden cursor-pointer active:scale-90 md:inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded duration-400 font-semibold text-[12px]">
              {t("header.button")}
            </button>
          </NavLink>




          <div className="md:hidden">
            <button
              type="button"
              className="text-black hover:underline duration-500 font-medium focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 011.06 1.06L13.06 10.585l4.715 4.714a.75.75 0 01-1.06 1.06L12 11.645l-4.715 4.714a.75.75 0 01-1.06-1.06l4.715-4.714-4.715-4.714a.75.75 0 010-1.06z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil menyu ochilganda ko‘rinadigan qism */}
        {isOpen && (
          <div className="md:hidden bg-[#0f3061] text-white px-4 py-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:underline duration-500 font-medium">
                {t("header.nav.main")}
              </a>
              <a href="#" className="hover:underline duration-500 font-medium">
                {t("header.nav.news")}
              </a>
              <a href="#" className="hover:underline duration-500 font-medium">
                {t("header.nav.courses")}
              </a>
              <a href="#" className="hover:underline duration-500 font-medium">
                {t("header.nav.media")}
              </a>
              <a href="#" className="hover:underline duration-500 font-medium">
                {t("header.nav.location")}
              </a>

              <div className="flex items-center gap-3 border-t border-white pt-3">
                <button
                  onClick={() => changeLanguage("uz")}
                  className="text-[14px] text-gray-200 hover:text-white active:scale-95 duration-300">
                  UZ
                </button>
                |
                <button
                  onClick={() => changeLanguage("en")}
                  className="text-[14px] text-gray-200 hover:text-white active:scale-95 duration-300">
                  EN
                </button>
                |
                <button
                  onClick={() => changeLanguage("kr")}
                  className="text-[14px] text-gray-200 hover:text-white active:scale-95 duration-300">
                  KR
                </button>
                |
                <button
                  onClick={() => changeLanguage("ru")}
                  className="text-[14px] text-gray-200 hover:text-white active:scale-95 duration-300">
                  RU
                </button>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded duration-300 mt-3">
              {t("header.button")}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
