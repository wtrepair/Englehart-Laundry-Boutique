import type { NextPage } from "next";

export type DesktopType = {
  className?: string;
};

const Desktop: NextPage<DesktopType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start pt-[39px] px-[157px] pb-[400px] box-border bg-[url('/desktop--7@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-9xl text-gray-100 font-montserrat md:pt-[25px] md:pb-[260px] md:px-[78px] sm:pt-5 sm:pb-[169px] sm:px-5 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center py-0 px-[74px] box-border gap-x-[100px] gap-y-[266px] lg:gap-[50px] md:gap-[25px] md:px-[37px] sm:gap-y-[50px] sm:gap-x-[15px]">
        <div className="w-[277px] flex flex-row items-center justify-start sm:w-full">
          <div className="min-h-[387.9px] flex-1 rounded-xl bg-gold flex flex-col items-center justify-between py-10 px-5 box-border sm:py-5 sm:px-3 sm:min-h-0">
            <div className="self-stretch overflow-hidden shrink-0 flex flex-col items-center justify-between">
              <h3 className="m-0 relative text-inherit font-bold font-[inherit] md:text-3xl sm:text-xl text-center">
                Washing your clothes has never been this simple!
              </h3>
              <div className="relative text-xl md:text-lg sm:text-base text-center">
                Clean clothes, hassle-free, at a price you’ll love!
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[11.8px] px-[19px] pb-[12.5px] bg-white w-[187.7px] rounded-xl overflow-hidden flex flex-col items-end justify-start box-border hover:bg-gainsboro-100 sm:w-full sm:text-center">
              <div className="w-full text-xl font-medium font-montserrat text-black inline-block">
                Contact Us
              </div>
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start justify-start gap-[23px] min-w-[335px] max-w-full text-left text-29xl sm:text-center sm:items-center">
          <h1 className="m-0 relative text-inherit font-bold font-[inherit] md:text-19xl sm:text-10xl">
            CLEANING DONE RIGHT
          </h1>
          <div className="relative text-xl text-black md:text-lg sm:text-base">
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
