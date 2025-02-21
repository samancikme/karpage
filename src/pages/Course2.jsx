import React from "react";
import course from "../images/course2.png"
import man from "../images/man.png"
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Course2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <section>

      <div className="bg-[#0f3061] h-30 md:h-56 relative text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
          <h2 className="text-xl md:text-3xl z-20 font-bold text-center">
            {t("courses.course2.name")}
          </h2>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="flex sm:flex-row flex-col gap-3">
          <div className="md:col-span-2 flex-3">
            <div>
              <div className="text-[20px] font-bold pb-3">
                3ds Max va AutoCAD
              </div>
              <div className="flex justify-start items-center">
                <img
                  src={course}
                  alt="Kurs rasmi"
                  className=" object-cover rounded mb-4" />
              </div>
            </div>


            <div>
              <h2 className="text-[24px] text-[#49575F] font-semibold mb-2">{t("courses.course2.des1")}</h2>
              <p className="text-[#737373] text-[14px] mb-4">{t("courses.course2.p1")}</p>
              <p className="text-[#737373] text-[14px] mb-20">{t("courses.course2.p2")}</p>
              <p className="text-[#737373] text-[14px] mb-2">{t("courses.course2.p3")}</p>
              <p className="text-[#737373] text-[14px] mb-2">{t("courses.course2.p4")} </p>
              <p className="text-[#737373] text-[14px] mb-2">{t("courses.course2.p5")}</p>
              <p className="text-[#737373] text-[14px] mb-10">{t("courses.course2.p6")}</p>
              <p className="text-[#737373] text-[14px] mb-10">{t("courses.course2.p7")}</p>


              <div className="flex flex-col">
                <span className="text-gray-700">{t("courses.course2.place")}</span>
                <br />
                <div className="">
                  <strong>{t("courses.course2.phone")}:</strong>
                  <a href="">  +998 93 173 84 27</a>
                  <br />
                </div>
                <div className="">
                  <strong>Telegram: </strong>
                  <a href="https://t.me/QMU_Qurilis_bot">  QMU_Qurilis_bot</a>
                </div>

              </div>
            </div>
          </div>

          <div className="space-y-6 flex-1">
            <div className="flex flex-col gap-8 shadow-xl rounded-lg py-5">
              <div className="bg-[#0f3061] text-white p-4 rounded text-[14px] font-medium text-center">
                {t("contact.more")}
              </div>
              <div className="flex flex-col gap-1 px-3">
                <div className="mb-2 flex justify-between">
                  <span className="font-semibold">{t("contact.time")}</span>
                  <span className="">36 {t("contact.hour")}</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span className="font-semibold">{t("contact.score")}</span>
                  <span className="">1</span>
                </div>
                <div className="mb-4 flex justify-between">
                  <span className="font-semibold">{t("contact.numbers")}</span>
                  <span className="">12</span>
                </div>
                <div className="flex justify-center items-center">
                  <NavLink to='/contact'> 
                    <button className="bg-[#0f3061] text-white py-2 px-4 rounded hover:bg-[#0f1b61] font-medium text-[12px] duration-400">
                      {t("contact.button")}
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course2;
