import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
      const { t, i18n } = useTranslation();
    
    return (
        <footer className="bg-[#0f3061] text-white py-10 font-lato">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">KarPage</h2>
                        <p className="mb-4">
                        {t("footer.first.des1")}
                        </p>
                        <p className="mb-2">
                            Email:{" "}
                            <a
                                href="mailto:example@mail.com"
                                className="hover:underline"
                            >
                                example@mail.com
                            </a>
                        </p>
                        <p className="mb-2">{t("footer.first.phone")} +998 00 123 45 67</p>
                        <p className="mb-2">{t("footer.first.place")}</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4">LINK</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:underline">
                                {t("footer.navs.main")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                {t("footer.navs.admin")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                {t("footer.navs.maeket")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                {t("footer.navs.tahlil")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                {t("footer.navs.news")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                {t("footer.navs.contact")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4">{t("footer.second.sourses")}</h2>
                        <p className="mb-4">
                        {t("footer.second.des")}
                        </p>
                        <div className="flex items-center space-x-4">
                            <a
                                href="#"
                                className="w-8 h-8 bg-white text-[#0f3061] flex items-center justify-center rounded-full hover:bg-gray-200"
                                title="Facebook"
                            >
                                F
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 bg-white text-[#0f3061] flex items-center justify-center rounded-full hover:bg-gray-200"
                                title="Instagram"
                            >
                                I
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 bg-white text-[#0f3061] flex items-center justify-center rounded-full hover:bg-gray-200"
                                title="Telegram"
                            >
                                T
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
