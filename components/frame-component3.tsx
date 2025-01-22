import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponent3Type = {
  className?: string;
  frame34: string;
  bulkyWinterWear?: string;
  heavyCoatsScarvesAndSnowPant?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  frame34,
  frameDivWidth,
  bulkyWinterWear,
  heavyCoatsScarvesAndSnowPant,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  return (
    <div
      className={`h-[548px] flex-1 bg-white overflow-hidden flex flex-col items-center justify-between py-2.5 px-[9px] box-border min-w-[332px] max-w-full text-center text-11xl text-gray-100 font-montserrat ${className}`}
    >
      <Image
        className="self-center h-[361px] max-w-full overflow-hidden shrink-0 object-cover rounded-[20px]"
        loading="lazy"
        width={332}
        height={361}
        alt=""
        src={frame34}
      />
      <div
        className="w-[319px] flex flex-row items-center justify-center py-2.5 px-[9px] box-border"
        style={frameDiv1Style}
      >
        <h3 className="m-0 flex-1 relative text-inherit font-bold font-[inherit] mq450:text-lg mq1050:text-5xl">
          {bulkyWinterWear}
        </h3>
      </div>
      <div className="w-[300px] flex flex-row items-center justify-center py-2.5 px-[9px] box-border text-lg text-black">
        <div className="flex-1 relative">{heavyCoatsScarvesAndSnowPant}</div>
      </div>
    </div>
  );
};

export default FrameComponent3;
