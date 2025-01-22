import type { NextPage } from "next";

export type DesktopType = {
  className?: string;
};

const Desktop: NextPage<DesktopType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start pt-[39px] px-[157px] pb-[400px] box-border bg-[url('/desktop--7@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-9xl text-gray-100 font-montserrat mq750:pl-[78px] mq750:pr-[78px] mq750:box-border mq450:pt-5 mq450:px-5 mq450:pb-[169px] mq450:box-border mq1050:pt-[25px] mq1050:pb-[260px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center py-0 px-[74px] box-border gap-x-[100px] gap-y-[266px] max-w-full lg:gap-[50px] lg:pl-[37px] lg:pr-[37px] lg:box-border mq750:gap-[25px]">
        <div className="w-[277px] flex flex-row items-center justify-start">
          <div className="h-[387.9px] flex-1 rounded-xl bg-gold flex flex-col items-center justify-between py-10 px-5 box-border">
            <div className="self-stretch h-[215px] overflow-hidden shrink-0 flex flex-col items-center justify-between">
              <h3 className="m-0 relative text-inherit font-bold font-[inherit] mq450:text-3xl">
                Washing your clothes has never been this simple!
              </h3>
              <div className="relative text-xl mq450:text-base">
                Clean clothes, hassle-free, at a price you’ll love!
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[11.8px] px-[19px] pb-[12.5px] bg-white w-[187.7px] rounded-xl overflow-hidden flex flex-col items-end justify-start box-border hover:bg-gainsboro-100">
              <div className="w-[127px] relative text-xl font-medium font-montserrat text-black text-left inline-block">
                Contact Us
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[23px] min-w-[335px] max-w-full text-left text-29xl">
          <h1 className="m-0 relative text-inherit font-bold font-[inherit] mq450:text-10xl mq1050:text-19xl">
            CLEANING DONE RIGHT
          </h1>
          <div className="relative text-xl text-black mq450:text-base">
            We provide a service that ensures your clothes are thoroughly
            cleaned with ease and efficiency. Enjoy the convenience of using
            high-quality machines at incredibly affordable prices. 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desktop;
