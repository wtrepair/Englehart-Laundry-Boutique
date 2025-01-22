import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Image from "next/image";

export type MainContentType = {
  className?: string;
};

const MainContent: NextPage<MainContentType> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='info']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='photos']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOrderClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full ${className}`}
    >
      {/* Header Section */}
      <header className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-4 max-w-full text-left text-6xl text-black font-outfit">
        {/* Top Bar */}
        <div className="self-stretch bg-deepskyblue overflow-hidden flex flex-row items-center justify-between py-2.5 px-[60px] gap-5 mq750:pl-[30px] mq750:pr-[30px]">
          <a className="[text-decoration:none] relative font-medium text-[inherit]">
            Englehart Laundry Boutique
          </a>
          <div className="w-[236px] relative font-medium font-montserrat whitespace-pre-wrap inline-block shrink-0">
            +1 (705) 492-8910
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[60px] box-border max-w-full text-xl text-gray-100 font-montserrat mq750:pl-[30px] mq750:pr-[30px]">
          {/* Logo */}
          <Image
            className="h-16 w-[71px] relative object-cover"
            loading="lazy"
            width={71}
            height={64}
            alt=""
            src="/logo-1@2x.png"
          />

          {/* Navigation Links for Small and Medium Screens */}
          <div className="lg:hidden flex items-center justify-center gap-8">
            <a className="[text-decoration:none] relative font-medium text-[inherit]">
              Home
            </a>
            <a
              className="[text-decoration:none] relative text-[inherit] cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              About Us
            </a>
            <a
              className="[text-decoration:none] relative text-[inherit] cursor-pointer"
              onClick={onServicesTextClick}
            >
              Services
            </a>
          </div>

          {/* Dropdown Menu Toggle for Large Screens */}
          <button
            className="hidden lg:flex cursor-pointer text-gray-100"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Contact Us Button for Small and Medium Screens */}
          <button
            className="lg:hidden cursor-pointer [border:none] py-5 px-[41px] bg-deepskyblue rounded-xl overflow-hidden hover:bg-skyblue"
            onClick={onOrderClick}
          >
            <a className="[text-decoration:none] flex-1 relative text-xl font-montserrat text-white text-center inline-block">
              Contact Us
            </a>
          </button>
        </div>

        {/* Dropdown Menu for Large Screens */}
        {isMenuOpen && (
          <div className="hidden lg:flex flex-col items-center justify-start gap-4 w-full bg-deepskyblue py-4">
            <a className="[text-decoration:none] font-medium text-[inherit]">
              Home
            </a>
            <a
              className="[text-decoration:none] font-medium text-[inherit] cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              About Us
            </a>
            <a
              className="[text-decoration:none] font-medium text-[inherit] cursor-pointer"
              onClick={onServicesTextClick}
            >
              Services
            </a>
            <button
              className="cursor-pointer [border:none] py-2 px-4 bg-white rounded-md text-deepskyblue font-medium hover:bg-gainsboro-100"
              onClick={onOrderClick}
            >
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* Main Content Section */}
      <div className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch h-[845px] overflow-hidden shrink-0 flex flex-col items-end justify-start relative bg-[url('/hero-image-container@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <Image
            className="w-[401px] h-[323px] absolute !m-[0] top-[0px] right-[0px] object-cover"
            loading="lazy"
            width={401}
            height={323}
            alt=""
            src="/logo-white-andtranspanret-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
