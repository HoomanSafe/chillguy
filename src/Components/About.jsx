import React from "react";
import aboutPattern from "../assets/aboutPattern.svg";

const About = () => {
  return (
    <section className="py-24 w-full relative">
      <img
        src={aboutPattern}
        alt=""
        className="absolute pointer-events-none bottom-0 left-0"
      />
      <div className="container flex flex-col justify-center items-center gap-12">
        <h1 className="text-emerald-400 text-7xl font-goodGame text-center leading-[80px] tracking-wider">
          ABOUT DAFIDO
        </h1>
        <p className="max-w-[811px] text-center text-white text-lg font-normal leading-[48px]">
          DeFido can only grow and accomplish his mission with YOUR help. We
          believe in the power of our community. Spread the word on social media
          platforms, answer questions, help people, tell your friends. Or, if
          you have specialized skills, contact us: smart contract development,
          web development, multimedia/marketing etc. We also welcome help in
          moderating our communities.
        </p>

        <a
          href=""
          className="h-[54px] px-8 py-4 bg-gradient-to-b from-emerald-500 to-sky-600 rounded shadow justify-center items-center gap-2.5 flex"
        >
          <div className="text-zinc-900 text-2xl font-goodGame leading-snug tracking-tight">
            BUY ON UNISWAP
          </div>
        </a>
      </div>
    </section>
  );
};

export default About;
