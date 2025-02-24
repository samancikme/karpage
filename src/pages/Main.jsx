import React, { useState } from "react";
import home2 from "../images/home1.png"
import home1 from "../images/home2.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const CoursesSection = () => {

  const { t, i18n } = useTranslation()
  return (
    <section>
      <div className="bg-[#0f3061] h-30 md:h-56 relative text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
          <h2 className="text-xl md:text-3xl z-20 font-bold text-center">
            {t("main.title")}
          </h2>
        </div>
      </div>





      <div className="max-w-7xl mx-auto px-4 py-30">
        <div className="flex flex-row lg:gap-25 gap-6 max-[950px]:flex-col">


          <div className="bg-[#EAEDF5] rounded-md shadow p-4 flex min-[1300px]:flex-row max-[950px]:flex-row flex-col-reverse relative justify-start items-center flex-1 max-[630px]:flex-col-reverse">
            <div className="min-[1300px]:w-[65%] flex-1">
              <h3 className="text-xl font-semibold mb-2">
                {t("main.cards.card_1.title")}
              </h3>
              <p className="text-gray-700 mb-4">{t("main.cards.card_1.description")}
              </p>
              <NavLink to={'/courses1'}>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-[14px] font-medium active:scale-95 duration-300">
                  {t("main.cards.card_1.button")}
                </button>
              </NavLink>
            </div>
            <div className="min-[1300px]:relative min-[1300px]:right-[-50px] flex-1 w-[100%] justify-center items-center flex">
              <img
                src={home1}
                alt="Kurs rasmi"
                className="object-cover mb-4 w-[100%] rounded" />
            </div >
          </div>


          <div className="bg-[#EAEDF5] flex-1 rounded-md shadow p-4 flex min-[1300px]:flex-row max-[950px]:flex-row flex-col-reverse relative justify-start items-center max-[630px]:flex-col-reverse">
            <div className="min-[1300px]:w-[65%] flex-1">
              <h3 className="text-xl font-semibold mb-2">
                {t("main.cards.card_2.title")}
              </h3>
              <p className="text-gray-700 mb-4">{t("main.cards.card_2.description")}
              </p>
              <NavLink to={'/courses2'}>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-[14px] font-medium active:scale-95 duration-300">
                  {t("main.cards.card_2.button")}
                </button>
              </NavLink>
            </div>
            <div className="min-[1300px]:relative min-[1300px]:right-[-50px] w-[100%] flex-1">
              <img
                src={home2}
                alt="Kurs rasmi"
                className="object-cover mb-4 w-[100%] rounded" />
            </div >
          </div>


        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
