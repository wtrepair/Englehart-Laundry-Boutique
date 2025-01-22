import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

export type MainContentType = {
  className?: string;
};

const MainContent: NextPage<MainContentType> = ({ className = "" }) => {
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
      <header className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-4 max-w-full text-left text-6xl text-black font-outfit">
        <div className="self-stretch bg-deepskyblue overflow-hidden flex flex-row items-center justify-between py-2.5 px-[60px] gap-5 mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
          <a className="[text-decoration:none] relative font-medium text-[inherit]">
            Englehart Laundry Boutique
          </a>
          <div className="w-[236px] relative font-medium font-montserrat whitespace-pre-wrap inline-block shrink-0">
            +1 (705) 492-8910
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[60px] box-border max-w-full text-xl text-gray-100 font-montserrat mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
          <Image
            className="h-16 w-[71px] relative object-cover"
            loading="lazy"
            width={71}
            height={64}
            alt=""
            src="/logo-1@2x.png"
          />
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 px-[366px] box-border max-w-full gap-5 mq750:pl-[91px] mq750:pr-[91px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[183px] mq1050:pr-[183px] mq1050:box-border">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[64px]">
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
          <button
            className="cursor-pointer [border:none] py-5 px-[41px] bg-deepskyblue rounded-xl overflow-hidden flex flex-row items-center justify-center hover:bg-skyblue"
            onClick={onOrderClick}
          >
            <a className="[text-decoration:none] flex-1 relative text-xl font-montserrat text-white text-center inline-block min-w-[112px]">
              Contact Us
            </a>
          </button>
        </div>
      </header>
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
