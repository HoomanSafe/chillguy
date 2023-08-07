import React from "react";
import micsPattern from "../assets/micsPattern.svg";

const Mics = () => {
  return (
    <section className="py-24 w-full relative">
      <img
        src={micsPattern}
        alt=""
        className="absolute pointer-events-none bottom-0 right-0"
      />
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-emerald-400 text-7xl font-goodGame text-center leading-[80px] tracking-wider">
          TOKENOMICS
        </h1>
        <div className=" mt-16 gap-[67px] grid grid-cols-1 lg:grid-cols-3 justify-between items-center">
          <div className="flex-col justify-start items-center gap-5 inline-flex">
            <div className="pl-[39.37px] pr-[38.63px] pt-[38.10px] pb-[37.90px] bg-gradient-to-b from-sky-600 to-emerald-500 rounded-full shadow-inner justify-center items-center inline-flex">
              <div className="text-white text-[40.64px] font-goodGame leading-[50.80px] tracking-wide">
                5%
              </div>
            </div>
            <div className="flex-col justify-start items-center flex">
              <div className="text-white text-[32px] font-goodGame leading-10 tracking-wide">
                Liquidity Locked
              </div>
              <div className="w-[326px] text-center text-white text-base font-normal leading-loose tracking-tight">
                Unruggable, majority of LP tokens locked in a multi sig wallet &
                some burnt so theres always LP. We have also went further to
                lock our contract with EverOwn.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-5 inline-flex">
            <div className="pl-[39.37px] pr-[38.63px] pt-[38.10px] pb-[37.90px] bg-gradient-to-b from-sky-600 to-emerald-500 rounded-full shadow-inner justify-center items-center inline-flex">
              <div className="text-white text-[40.64px] font-goodGame leading-[50.80px] tracking-wide">
                5%
              </div>
            </div>
            <div className="flex-col justify-start items-center flex">
              <div className="text-white text-[32px] font-goodGame leading-10 tracking-wide">
                Liquidity Locked
              </div>
              <div className="w-[326px] text-center text-white text-base font-normal leading-loose tracking-tight">
                Unruggable, majority of LP tokens locked in a multi sig wallet &
                some burnt so theres always LP. We have also went further to
                lock our contract with EverOwn.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-5 inline-flex">
            <div className="pl-[39.37px] pr-[38.63px] pt-[38.10px] pb-[37.90px] bg-gradient-to-b from-sky-600 to-emerald-500 rounded-full shadow-inner justify-center items-center inline-flex">
              <div className="text-white text-[40.64px] font-goodGame leading-[50.80px] tracking-wide">
                5%
              </div>
            </div>
            <div className="flex-col justify-start items-center flex">
              <div className="text-white text-[32px] font-goodGame leading-10 tracking-wide">
                Liquidity Locked
              </div>
              <div className="w-[326px] text-center text-white text-base font-normal leading-loose tracking-tight">
                Unruggable, majority of LP tokens locked in a multi sig wallet &
                some burnt so theres always LP. We have also went further to
                lock our contract with EverOwn.
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Mics;
