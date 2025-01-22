import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  const onPolitisContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='info']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <footer
  className={`self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-21xl text-gray-100 font-outfit ${className}`}
  data-scroll-to="footer"
>
  <div className="self-stretch flex flex-row items-start justify-between flex-wrap py-5 px-[70px] box-border gap-5 max-w-full md:px-[35px] sm:px-5">
    <Image
      className="w-[345px] max-h-full object-cover"
      loading="lazy"
      width={345}
      height={281}
      alt=""
      src="/whitebackground-logo-1@2x.png"
    />
    <div className="flex-1 flex flex-col items-start justify-start gap-5">
      <div className="flex flex-row items-start justify-between w-full gap-5 md:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-2.5">
          <h1 className="m-0 text-inherit font-semibold text-13xl sm:text-5xl">
            Contact Us
          </h1>
          <div className="text-6xl text-black sm:text-xl">
            <div className="font-medium">+1 (705) 492-8910</div>
            <div className="font-medium">
              <p className="m-0">41 Third Avenue</p>
              <p className="m-0">Englehart, ON</p>
              <p className="m-0">P0J 1H0</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2.5">
          <h1 className="m-0 text-inherit font-semibold text-13xl sm:text-5xl">
            Business Hours
          </h1>
          <div className="text-6xl text-black font-medium sm:text-xl">
            Monday-Sunday: 7pm-10pm
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-start justify-start pt-5">
      <div
        className="flex flex-row items-start justify-start cursor-pointer"
        onClick={onPolitisContainerClick}
      >
        <b className="leading-[154.9%] sm:text-lg sm:leading-[30px]">
          <p className="m-0">Home</p>
          <p className="m-0">About Us</p>
          <p className="m-0">Services</p>
          <p className="m-0">Contact</p>
        </b>
      </div>
    </div>
  </div>
  <div className="self-stretch bg-gainsboro-200 flex flex-col md:flex-row items-center justify-between py-2 px-5 gap-5 text-sm text-black">
    <div className="flex flex-row items-center gap-2">
      <a className="[text-decoration:none] font-medium" href="#">
        Terms and Conditions
      </a>
      <a className="[text-decoration:none] font-medium" href="#">
        Privacy Policy
      </a>
    </div>
    <div className="text-center font-medium">
      © 2024 Englehart Laundry Boutique All rights reserved
    </div>
  </div>
</footer>

  );
};

export default Footer;
