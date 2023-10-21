import React from "react";
import { Link } from "react-router-dom";
import whiteLogo from "@assets/svg/white_logo.svg";
import appleStore from "@assets/svg/apple_store.svg";
import googlePlay from "@assets/svg/google_play.svg";
import socials from "@utils/data/socials";
import { useTranslation } from "react-i18next";
import { APPSTORE_URL, PLAYSTORE_URL } from "@utils/data/mobile_app_urls";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute bottom-0 left-0 right-0 px-5 xl:px-15 bg-transparent">
      <div
        className="flex flex-col lg:flex-row justify-start items-start border-t-0.5 border-opacity-30 p-5 lg:py-10 xl:p-15 lg:text-white text-gray-400 text-opacity-90">
        <Link to="/">
          <img className="h-8 md:h-14" alt="logo" src={whiteLogo}/>
        </Link>
        <div className="flex flex-1 lg:justify-end 3xl:justify-start 3xl:ml-120 flex-wrap sm:flex-nowrap text-xs md:text-sm lg:text-base">
          <div className='grid grid-cols-7 space-x-2'>
          <ul className="uppercase xl:px-15 py-5 lg:py-0 space-y-3 col-span-3">
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="/about-us">{t("aboutUs")}</Link>
            </li>
            <li>
              <Link to="/contact-us">{t("contact")}</Link>
            </li>
            <li>
              <Link to="/news?selectedTab=career">{t("career")}</Link>
            </li>
          </ul>
          <ul className="uppercase xl:px-15 py-5 lg:py-0 space-y-3 col-span-4">
            <li>
              <Link to="/our-services">{t("ourServices")}</Link>
            </li>
            <li>
              <Link to="/faq">{t("frequentlyAskedQuestions")}</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">{t("termsAndConditions")}</Link>
            </li>
          </ul>
          </div>
          <div className="md:pt-3 lg:pt-0 md:pl-8 3xl:ml-auto">
            <div className="pt-2 flex justify-center">
              <a
                href={APPSTORE_URL}
                className="xs:mr-1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={appleStore} alt="appstore" className="h-9"/>
              </a>
              <a
                href={PLAYSTORE_URL}
                className="xs:ml-1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={googlePlay} alt="playstore" className="h-9"/>
              </a>
            </div>
            <div className="flex mt-3 justify-center mx-auto">
              {socials.map(({ url, icon }, index) => (
                <a
                  href={url}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer p-2 mr-1 rounded-lg text-white hover:bg-dark-svg transition-bg duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row justify-between items-center text-gray-400 md:text-white uppercase text-xs p-5 xl:px-15 py-8 font-montserrat tracking-wide border-t-0.5 border-opacity-30 leading-7">
        <div className="flex flex-1 flex-col lg:flex-row justify-center">
          <a href="tel:+355697047231" className="flex flex-row lg:flex-col xl:flex-row items-center">
            <span className="mr-3">Tel:</span> +355 69 70 47 231
          </a>
          <a
            href="mailto:support@rpay.ai"
            className="flex flex-row lg:flex-col xl:flex-row items-center lg:mx-10"
          >
            <span className="mr-3">E-mail:</span> support@rpay.ai
          </a>
          <li className="flex flex-row lg:flex-col xl:flex-row flex-wrap items-center lg:mx-10">
            <span className="mr-3">Address:</span> Rr. Frank Bardhi, Tiranë,
            Albania, Kristal Center, Kati 2
          </li>
          <div>@ {new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
