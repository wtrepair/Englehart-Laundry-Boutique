import type { NextPage } from "next";
import { useCallback } from "react";
import MainContent from "../components/main-content";
import Info from "../components/info";
import Photos1 from "../components/photos1";
import BenefitsList from "../components/benefits-list";
import Desktop from "../components/desktop";
import Footer from "../components/footer";

const EnglehartBoutiqueLaundary: NextPage = () => {
  const onVisitUsTodayButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-2.5 leading-[normal] tracking-[normal]">
      <MainContent />
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start flex-wrap content-start py-2.5 px-[545px] box-border max-w-full mq750:pl-[272px] mq750:pr-[272px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <button
          className="cursor-pointer [border:none] py-[23px] pl-[27px] pr-[25px] bg-deepskyblue flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start box-border max-w-full hover:bg-skyblue"
          onClick={onVisitUsTodayButtonClick}
        >
          <b className="h-[42.7px] flex-1 relative text-9xl inline-block font-montserrat text-white text-center">
            Visit Us Today
          </b>
        </button>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start flex-wrap content-start py-5 px-0 box-border max-w-full text-center text-29xl text-deepskyblue font-montserrat">
        <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[150%] inline-block italic font-bold font-[inherit] [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] max-w-full mq450:text-10xl mq450:leading-[43px] mq1050:text-19xl mq1050:leading-[58px]">
          Where Your Laundry Time Becomes “Me Time”
        </h1>
      </section>
      <Info />
      <section className="self-stretch h-[173.3px] flex flex-col items-start justify-start py-10 px-0 box-border relative text-center text-29xl text-gray-100 font-montserrat">
        <h1 className="!m-[0] w-[calc(100%_+_1px)] h-[80.9px] absolute top-[22.9px] left-[0px] text-inherit font-bold font-[inherit] inline-block mq450:text-10xl mq1050:text-19xl">
          What You Can Wash
        </h1>
        <div className="w-[calc(100%_+_1px)] h-[40.4px] absolute !m-[0] bottom-[43.1px] left-[0px] text-5xl text-black inline-block mq450:text-lgi">
          Perfect for all your laundry needs!
        </div>
      </section>
      <Photos1 />
      <section className="self-stretch overflow-hidden flex flex-row items-start justify-start flex-wrap content-start pt-[220px] px-[196px] pb-[862.5px] box-border bg-[url('/benefits-picture@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-[64px] text-gray-100 font-montserrat lg:pt-[25px] lg:pb-[561px] lg:box-border mq750:pt-[11px] mq750:px-[98px] mq750:pb-[365px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h1 className="m-0 flex-1 relative text-inherit font-bold font-[inherit] inline-block max-w-full mq450:text-19xl mq1050:text-[51px]">
          THE BENEFITS OF USING A COIN LAUNDROMAT VS. HOME WASHING
        </h1>
      </section>
      <BenefitsList />
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-[29px] px-[13px] pb-[19px] box-border gap-5 max-w-full text-left text-29xl text-gray-200 font-inter ml-12 mq450:ml-0 mq750:ml-4 mq750:mr-4 mq1050:ml-10">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-[9px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[150%] font-bold font-[inherit] inline-block max-w-full mq450:text-10xl mq450:leading-[43px] mq1050:text-19xl mq1050:leading-[58px]">
            Easy to Use, Built for Convenience
          </h1>
        </div>
        <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[150%] font-montserrat mq450:text-base mq450:leading-[24px]">
          <p className="m-0">
            <i className="font-medium">
              Step-by-step process with simple icons:
            </i>
          </p>
          <p className="m-0">
            <i className="font-medium">&nbsp;</i>
          </p>
          <p className="m-0">
            <i className="font-bold font-montserrat">{`	1.	Load your laundry `}</i>
            <i className="font-medium">
              – Bring your items and choose a machine.
            </i>
          </p>
          <p className="m-0">
            <i className="font-bold font-montserrat"> 2. Pay with coins</i>
            <i className="font-medium">{` – Easy-to-use coin-operated machines. `}</i>
          </p>
          <p className="m-0">
            <i className="font-bold font-montserrat">{`	3.	Relax `}</i>
            <i className="font-medium">{`– Sit back and let our machines do the work. `}</i>
          </p>
          <p className="m-0">
            <i className="font-bold font-montserrat">{`	4.	Fold and go! `}</i>
            <i className="font-medium">
              – Fresh, clean laundry in just one hour.
            </i>
          </p>
        </div>
      </section>
      <Desktop />
      <Footer />
    </div>
  );
};

export default EnglehartBoutiqueLaundary;
