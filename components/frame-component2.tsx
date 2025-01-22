import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponent2Type = {
  className?: string;
  kidsHockeyGear?: string;
  noNeedToWorryAboutSmellyJerse?: string;
  winterWear: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  frameDivWidth,
  kidsHockeyGear,
  noNeedToWorryAboutSmellyJerse,
  winterWear,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  return (
    <div
      className={`h-[548px] flex-1 bg-white overflow-hidden flex flex-col items-center justify-between py-2.5 px-[9px] box-border min-w-[332px] max-w-full text-center text-11xl text-gray-100 font-montserrat ${className}`}
    >
      <div
        className="w-[304px] flex flex-row items-center justify-center py-2.5 px-[9px] box-border"
        style={frameDivStyle}
      >
        <h3 className="m-0 flex-1 relative text-inherit font-bold font-[inherit] mq450:text-lg mq1050:text-5xl">
          {kidsHockeyGear}
        </h3>
      </div>
      <div className="w-[300px] flex flex-row items-center justify-center p-2.5 box-border z-[1] text-lg text-black">
        <div className="flex-1 relative">{noNeedToWorryAboutSmellyJerse}</div>
      </div>
      <Image
        className="self-center h-[361px] max-w-full overflow-hidden object-cover rounded-[20px]"
        loading="lazy"
        width={332}
        height={361}
        alt=""
        src={winterWear}
      />
    </div>  
  );
};

export default FrameComponent2;
