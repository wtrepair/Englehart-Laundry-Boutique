import { FC } from "react";
import Image from "next/image";

export type InfoType = {
  className?: string;
};

const Info: FC<InfoType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-wrap items-start justify-start max-w-full text-left text-29xl text-gray-100 font-montserrat ${className}`}
      data-scroll-to="info"
    >
      <div className="w-full flex flex-wrap items-center justify-center bg-[url('/desktop--3@3x.png')] bg-cover bg-no-repeat bg-top [row-gap:20px]">
        {/* Left Section */}
        <div className="flex-[0.95] flex flex-col items-center justify-between py-10 px-9 min-w-[468px] max-w-full overflow-hidden mq750:min-w-full mq750:flex-1">
          {/* Heading */}
          <div className="w-[607px] flex items-center justify-center">
            <h1 className="text-inherit font-bold max-w-full text-center mq450:text-10xl mq1050:leading-[43px] mq1050:mt-32 mq1050:text-19xl mt-20">
              <p className="m-0">Why Englehart</p>
              <p className="m-0">Boutique Laundry?</p>
            </h1>
          </div>
          {/* Text Content */}
          <div className="flex-grow flex items-center justify-center text-xl text-black text-justify p-2.5">
            <div className="max-w-full mq450:text-base mt-16 mq1050:mt-[-30px] mq1050:leading-[28px] ">
              <p className="m-0">
                As a family-owned and operated business, we understand how
                challenging it can be to stay on top of laundry for your whole
                household.
              </p>
              <p className="m-0">
                That’s why we’re here to provide a fast, reliable, and
                stress-free solution you can count on.
              </p>
              <p className="m-0">
                Quality and care—just like we’d want for our own family. We are
                proudly family-owned and operated, delivering quality and care
                you can trust.
              </p>
            </div>
          </div>
          {/* Button */}
          <button className="py-4 px-10 bg-white rounded-xl hover:bg-gainsboro-100 text-black text-5xl font-outfit">
            Read More
          </button>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center py-10 px-5 min-w-[468px] max-w-full mq750:min-w-full">
          <Image
            className="max-w-full max-h-full object-cover"
            loading="lazy"
            width={506}
            height={544}
            alt="Laundry Service"
            src="/elipse-1-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
