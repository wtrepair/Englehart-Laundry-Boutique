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
      <div className="self-stretch flex flex-row items-start justify-between flex-wrap content-start py-0 pl-[70px] pr-[71px] box-border gap-5 max-w-full mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
        <Image
          className="w-[345px] relative max-h-full object-cover max-w-full"
          loading="lazy"
          width={345}
          height={281}
          alt=""
          src="/whitebackground-logo-1@2x.png"
        />
        <div className="w-[637px] flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[15px] mq750:flex-1">
              <h1 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-5xl mq1050:text-13xl">
                Contact Us
              </h1>
              <div className="flex flex-col items-start justify-start gap-2.5 text-6xl text-black">
                <div className="relative font-medium whitespace-pre-wrap mq450:text-xl">
                  +1 (705) 492-8910
                </div>
                <div className="relative font-medium mq450:text-xl">
                  <p className="m-0">41 Third Avenue</p>
                  <p className="m-0">Englehart, ON</p>
                  <p className="m-0">P0J 1H0</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[15px]">
              <h1 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-5xl mq1050:text-13xl">
                Business Hours
              </h1>
              <div className="relative text-6xl font-medium text-black mq450:text-xl">
                Monday-Sunday: 7pm-10pm
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[66.5px] px-0 pb-0 text-5xl font-montserrat">
          <div
            className="overflow-hidden flex flex-row items-start justify-start cursor-pointer"
            onClick={onPolitisContainerClick}
          >
            <b className="relative leading-[154.9%] mq450:text-lgi mq450:leading-[30px]">
              <p className="m-0">Home</p>
              <p className="m-0">About Us</p>
              <p className="m-0">Services</p>
              <p className="m-0">Contact</p>
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gainsboro-200 overflow-hidden flex flex-row items-start justify-start py-[7px] px-0 box-border gap-[484px] max-w-full text-sm text-black mq750:gap-[121px] mq1050:gap-[242px] mq1050:flex-wrap">
        <div className="overflow-hidden flex flex-col items-start justify-start gap-2.5">
          <a className="[text-decoration:none] relative font-medium text-[inherit]">
            Terms and conditions
          </a>
          <div className="self-stretch flex flex-row items-start justify-end">
            <a className="[text-decoration:none] relative font-medium text-[inherit]">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border max-w-full">
          <div className="relative font-medium whitespace-pre-wrap">{`© 2024 Englehart Laundry Boutique All rights reserved     `}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
