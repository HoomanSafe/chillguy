import React from "react";
import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <section className="py-32 w-full">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-y-16">
        <article className="flex flex-col gap-5">
          <h1 className=" text-white text-6xl leading-[73px] lg:text-7xl font-goodGame lg:leading-[86.40px] tracking-wider">
            Let’s Meet DeFido! Token inspired by a Tweet
          </h1>
          <p className="max-w-[522px] text-white text-base font-normal leading-loose tracking-tight">
            Floki, Meet DeFido! This brand new token was born merely moments
            after Coinbase tweeted their dog named “DeFido” at Elon Musk. & this
            French Bulldog is ready for lift off! Come join him on his journey
            to the Moon base and beyond!
          </p>
          <div className="font-goodGame justify-start items-start gap-5 inline-flex">
            <a
              href=""
              className="h-[54px] px-8 py-4 bg-gradient-to-b from-emerald-500 to-sky-600 rounded shadow justify-center items-center gap-2.5 flex"
            >
              <div className="text-zinc-900 text-base font-normal leading-snug tracking-tight">
                BUY ON UNISWAP
              </div>
            </a>
            <a
              href=""
              className="h-[54px] px-8 py-4 bg-gradient-to-b from-emerald-400 to-sky-600 rounded shadow justify-center items-center gap-2.5 flex"
            >
              <div className="text-zinc-900 text-base font-normal leading-snug tracking-tight">
                BUY ON UNISWAP
              </div>
            </a>
          </div>

          <div className="flex items-center  gap-5 mt-10">
            <a href="https://t.me/DefiDoerc">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2176_707)">
                  <path
                    d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM23.8587 10.9613L21.232 23.3347C21.0387 24.212 20.516 24.4253 19.7867 24.012L15.7867 21.0653L13.8587 22.924C13.7642 23.0463 13.643 23.1453 13.5043 23.2135C13.3656 23.2817 13.2132 23.3172 13.0587 23.3173H13.052L13.336 19.2453L20.7493 12.5493C21.0693 12.2653 20.6773 12.104 20.252 12.388L11.0933 18.156L7.14667 16.924C6.29333 16.6533 6.26933 16.0707 7.32667 15.652L22.748 9.708C23.4653 9.44667 24.0893 9.87867 23.8573 10.9627L23.8587 10.9613Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2176_707">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://twitter.com/DefiDoerc">
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.3725 3.7896C37.9256 4.43269 36.3671 4.86578 34.7331 5.06265C36.4032 4.06193 37.6795 2.48047 38.2865 0.593869C36.7247 1.51912 34.9956 2.19174 33.1549 2.55265C31.685 0.981032 29.5819 0 27.2622 0C22.0453 0 18.2131 4.86579 19.391 9.91859C12.6812 9.58064 6.72614 6.36522 2.74295 1.47975C0.626679 5.10858 1.64708 9.85953 5.24311 12.2645C3.92085 12.2219 2.67733 11.8577 1.58802 11.254C1.49944 14.9944 4.18333 18.4952 8.06808 19.2761C6.93284 19.5845 5.68605 19.6567 4.41956 19.4139C5.44653 22.6228 8.43556 24.9556 11.966 25.0212C8.56352 27.6854 4.28832 28.8764 0 28.3712C3.57634 30.6646 7.81872 32 12.3794 32C27.3803 32 35.8519 19.3319 35.3401 7.96965C36.9216 6.83441 38.2898 5.41044 39.3725 3.7896V3.7896Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2176_710)">
                  <path
                    d="M7.03661 15.2181C7.03661 14.4796 7.64333 13.8729 8.38061 13.8729H10.6475C11.3861 13.8729 12.0184 14.4796 12.0184 15.245V23.7941C12.2821 23.7148 12.5982 23.6354 12.9681 23.5561C13.4686 23.4242 13.8385 22.9762 13.8385 22.4476V11.8402C13.8385 11.1016 14.4453 10.468 15.2094 10.468H17.4763C18.2149 10.468 18.8472 11.0748 18.8472 11.8402V21.6834C18.8472 21.6834 19.4014 21.4453 19.9544 21.2085C20.3768 21.0242 20.6405 20.6287 20.6405 20.1525V8.41109C20.6405 7.67253 21.2472 7.03893 21.9857 7.03893H24.2526C24.9912 7.03893 25.5979 7.64565 25.5979 8.41109V18.0956C27.5486 16.6709 29.5531 14.9557 31.1352 12.8975C31.6101 12.2908 31.7419 11.4984 31.4782 10.7599C28.5777 2.42197 19.4565 -2.01195 11.1249 0.891088C2.79341 3.79413 -1.63539 12.9231 1.26381 21.2623C1.57997 22.2121 2.00237 23.1093 2.50285 23.9797C2.89837 24.6658 3.63693 25.0613 4.42797 24.982C4.85037 24.9551 5.37773 24.9026 6.03565 24.8233C6.61549 24.7708 7.03789 24.269 7.03789 23.6879L7.03661 15.2181Z"
                    fill="white"
                  />
                  <path
                    d="M6.98438 28.9393C14.1293 34.1374 24.1223 32.5541 29.3153 25.404C31.2929 22.6597 32.3732 19.3611 32.3732 15.9845C32.3732 15.6145 32.3463 15.2459 32.3207 14.876C26.4954 23.6094 15.7114 27.699 6.98438 28.9393Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2176_710">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0.375)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="">
              <svg
                width="29"
                height="32"
                viewBox="0 0 29 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2176_716)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.7126 1.826C8.80841 2.81794 7.25052 3.65731 7.25085 3.69145C7.2517 3.77957 11.821 6.09362 11.9832 6.08798C12.0569 6.08551 12.5921 5.83916 13.1724 5.5406L14.2276 4.99787L15.38 5.59023L16.5323 6.1827L18.4195 5.3347C21.2632 4.05689 21.5585 3.91686 21.5122 3.86982C21.4508 3.8074 20.4308 3.25947 17.6636 1.80263C16.3263 1.09852 15.0283 0.40817 14.7791 0.268477C14.5299 0.128784 14.292 0.0164105 14.2505 0.0185857C14.2089 0.020761 12.6168 0.834106 10.7126 1.826ZM2.36082 6.15084L0.378576 7.17474V11.6684C0.378576 14.14 0.404605 16.1621 0.436533 16.1621C0.46835 16.1621 1.44362 15.7393 2.60375 15.2226L4.71308 14.2832V9.5465L5.74383 10.1081C6.53812 10.5404 7.33288 10.9719 8.12812 11.4025L9.48162 12.1353L10.0839 11.863C10.4616 11.6919 10.8386 11.5191 11.2148 11.3447C11.5055 11.2094 12.2191 10.8879 12.8006 10.6303C13.382 10.3726 13.9202 10.1135 13.9966 10.0544C14.0979 9.97597 12.8617 9.29281 9.424 7.52749C6.83273 6.19682 4.62946 5.11231 4.52785 5.11751C4.42624 5.1227 3.45108 5.58765 2.36082 6.15084ZM21.8695 6.43838C20.5194 7.04784 19.4139 7.57085 19.4126 7.60068C19.4115 7.63047 20.1473 8.06798 21.0479 8.57278C21.9484 9.07768 22.6853 9.51778 22.6853 9.55092C22.6853 9.58399 21.8884 9.97011 20.9145 10.4091C19.9405 10.848 17.4786 11.9598 15.4435 12.8798L8.62466 15.962C6.90938 16.7375 5.36324 17.4364 5.18882 17.5154C1.68525 19.1014 0.72226 19.5415 0.590014 19.617C0.457031 19.6931 0.42691 20.135 0.403241 22.3527L0.375 24.9977L2.14761 25.9009L3.92019 26.8041L6.37815 25.6948C7.73006 25.0847 8.8361 24.5536 8.8361 24.5145C8.8361 24.4755 8.58628 24.3127 8.28109 24.1526C7.97575 23.9926 7.34545 23.6382 6.88029 23.365C6.41516 23.0918 5.95136 22.8411 5.84953 22.8078C5.74774 22.7747 5.66593 22.7167 5.66759 22.6789C5.66928 22.6412 6.75166 22.127 8.07271 21.5363C10.6386 20.3891 12.6022 19.5049 16.8179 17.5985C18.703 16.7462 20.5883 15.8944 22.4738 15.0431C24.131 14.2952 26.0577 13.4216 26.7555 13.1019L28.0241 12.5206L28.0523 9.84539L28.0807 7.17032L26.2828 6.24751C25.2939 5.74002 24.4487 5.32603 24.4044 5.32754C24.3601 5.32894 23.2194 5.82876 21.8695 6.43838ZM27.5424 16.0894C27.2775 16.2188 26.7542 16.4611 26.3795 16.6278C26.0049 16.7945 25.2939 17.1152 24.7997 17.3408L23.901 17.7506L23.8805 20.0992C23.8692 21.3909 23.8217 22.442 23.7748 22.4351C23.6685 22.4193 21.9843 21.5556 20.2913 20.6484C19.0694 19.9937 18.9926 19.9677 18.7055 20.1099C18.5395 20.1922 17.5473 20.6371 16.5007 21.0989C15.4541 21.5606 14.5637 21.9685 14.5218 22.0055C14.48 22.0423 16.5865 23.184 19.2029 24.5427L23.96 27.0129L25.9921 25.9617C27.1096 25.3836 28.0599 24.8563 28.1037 24.79C28.2022 24.6409 28.1938 15.8336 28.0951 15.8455C28.0561 15.8502 27.8073 15.96 27.5424 16.0894ZM16.2893 26.4268C15.9368 26.5784 15.5844 26.7302 15.2321 26.8821C14.1682 27.3424 14.3767 27.3577 13.1111 26.7276C12.2681 26.3079 11.9047 26.1785 11.747 26.2413C11.6287 26.2884 10.6105 26.7465 9.48417 27.2593C8.35792 27.772 7.39736 28.1915 7.34958 28.1915C6.87704 28.1915 7.66263 28.6608 10.694 30.19L14.2491 31.9831L15.7449 31.2446C16.5677 30.8385 18.227 30.0251 19.4325 29.4372C20.6379 28.8492 21.6093 28.3528 21.5911 28.3341C21.5728 28.3154 20.5627 27.7968 19.3465 27.1815L17.1351 26.063L16.2893 26.4268Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2176_716">
                    <rect
                      width="27.8272"
                      height="32"
                      fill="white"
                      transform="translate(0.375)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </article>
        <img src={logo} alt="" className="lg:ml-auto" />
      </div>
    </section>
  );
};

export default Hero;
