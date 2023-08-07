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
          Pepe and Toad the memecoin Launched on the ethereum. Our mission is to
          provide a fun, community-driven investment opportunity that celebrates
          the power of memes and pop culture. With a vision to become the
          leading memecoin in the market, we believe Pepe and Toad is the
          perfect addition to any investor’s portfolio. Join us on this journey
          to revolutionize the world of memecoins. the market, we believe Pepe
          and Toad is the perfect addition to any investor’s portfolio. Join us
          on this journey to revolutionize the world of memecoins.
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
