import type { NextPage } from "next";
import Image from "next/image";

export type BenefitsListType = {
  className?: string;
};

const BenefitsList: NextPage<BenefitsListType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start gap-2.5 max-w-full text-center text-29xl text-black font-montserrat ${className}`}
      data-scroll-to="benefits-list"
    >
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center max-w-full mq750:gap-[30px]">
        <div className="self-stretch flex flex-row items-center justify-center py-10 px-0 box-border bg-[url('/benefits-container@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <div className="flex-1 flex flex-row items-center justify-center flex-wrap content-center max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit leading-[60px] font-bold font-[inherit] inline-block [text-shadow:1px_0_0_rgba(0,_0,_0,_0.2),_0_1px_0_rgba(0,_0,_0,_0.2),_-1px_0_0_rgba(0,_0,_0,_0.2),_0_-1px_0_rgba(0,_0,_0,_0.2)] max-w-full mq450:text-10xl mq450:leading-[36px] mq1050:text-19xl mq1050:leading-[48px]">
              Benefits of Using a Laundromat
            </h1>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-0 px-[100px] box-border max-w-full text-left text-xl mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative inline-block max-w-full mq450:text-base">
          <p className="m-0">
            <b>Cost-Effective</b>
          </p>
          <p className="m-0 font-medium">
            {" "}
            • Avoid purchasing a washer and dryer.
          </p>
          <p className="m-0 font-medium">
            {" "}
            • Save on detergent and fabric softener costs.
          </p>
          <p className="m-0 font-medium">
            {" "}
            • Ideal for infrequent laundry needs or large-capacity loads.
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0">
            <b>Convenience</b>
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0">
            <b>Efficiency</b>
          </p>
          <p className="m-0 font-medium">
            {" "}
            • Commercial-grade machines reduce energy and water usage.
          </p>
          <p className="m-0 font-medium">
            {" "}
            • Faster and more powerful than home washing machines.
          </p>
          <p className="m-0">
            <b>&nbsp;</b>
          </p>
          <p className="m-0">
            <b>Time-Saving</b>
          </p>
          <p className="m-0 font-medium">
            {" "}
            • Wash multiple loads simultaneously.
          </p>
          <p className="m-0 font-medium">
            {" "}
            • Skip the wait for machines to free up.
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0">
            <b>Maintenance-Free</b>
          </p>
          <p className="m-0 font-medium">
            {" "}
            • No need to worry about repairs or upkeep of machines.
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0">
            <b>Variety of Machines</b>
          </p>
          <p className="m-0 font-medium">
            {" "}
            • Options for delicate, heavy, or specialty items.
          </p>
        </div>
      </div>
      <Image
        className="object-cover"
        loading="lazy"
        width={1440} // Provide a default width for the server
        height={672} // Height remains fixed
        alt=""
        src="/photo-section@2x.png"
        style={{ width: "100%" }} // Makes the width responsive
      />
    </section>
  );
};

export default BenefitsList;
