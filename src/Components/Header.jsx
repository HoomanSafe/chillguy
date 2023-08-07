import React from "react";

const Header = () => {
  return (
    <header className="py-4 w-full absolute top-0">
      <div className="container flex justify-between items-center">
        <a href="" className="font-goodGame uppercase text-5xl">
          defi do
        </a>

        <ul className="hidden lg:flex items-center gap-10 justify-between font-goodGame text-2xl capitalize">
          <li className="hover:text-emerald-400 cursor-pointer">home</li>
          <li className="hover:text-emerald-400 cursor-pointer">about</li>
          <li className="hover:text-emerald-400 cursor-pointer">tokenomics</li>
          <li className="hover:text-emerald-400 cursor-pointer">roadmap</li>
        </ul>

        <div className="w-[181px] h-[54px] font-goodGame px-8 py-4 bg-white rounded shadow justify-center items-center gap-2.5 inline-flex">
          <div className="text-black text-base font-normal leading-snug tracking-tight">
            BUY DAFIDO
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
