import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";
import FrameComponent3 from "./frame-component3";

export type Photos1Type = {
  className?: string;
};

const Photos1: NextPage<Photos1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-center text-11xl text-gray-100 font-montserrat ${className}`}
      data-scroll-to="photos"
    >
      <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-center flex-wrap content-start py-6 px-80 box-border gap-[100px] max-w-full lg:gap-[50px] lg:pl-40 lg:pr-40 lg:box-border mq750:gap-[25px] mq750:py-5 mq750:px-20 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <FrameComponent2
          kidsHockeyGear="Kids’ Hockey Gear "
          noNeedToWorryAboutSmellyJerse="No need to worry about smelly jerseys and gear—our large commercial washing machines handle them with ease!"
          winterWear="/frame-34@2x.png"
        />
        <FrameComponent2
          frameDivWidth="289px"
          kidsHockeyGear={`Pet Beds & Items`}
          noNeedToWorryAboutSmellyJerse="Freshen up pet beds, blankets, and mats."
          winterWear="/frame-34-1@2x.png"
        />
      </div>
      <div className="self-stretch bg-white flex flex-row items-start justify-center flex-wrap content-start py-6 px-80 box-border gap-[100px] max-w-full lg:gap-[50px] lg:pl-40 lg:pr-40 lg:box-border mq750:gap-[25px] mq750:py-5 mq750:px-20 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <FrameComponent3
          frame34="/frame-34-2@2x.png"
          bulkyWinterWear="Bulky Winter Wear"
          heavyCoatsScarvesAndSnowPant="Heavy coats, scarves, and snow pants cleaned in minutes."
        />
        <FrameComponent3
          frame34="/frame-34-3@2x.png"
          frameDivWidth="223px"
          bulkyWinterWear="Self - Service"
          heavyCoatsScarvesAndSnowPant="Do you want to do it yourself? No problem, bring your clothes."
        />
      </div>
    </section>
  );
};

export default Photos1;
