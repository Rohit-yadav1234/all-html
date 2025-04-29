import React from "react";

const Home = () => {
  return (
    <div className="bg-[#030712] w-full">
      <div className="max-w-[1120px] w-full mx-auto px-3">
        <h1 className="text-[7vw] font-extrabold italic text-center text-white">
          Hyper text Markup Language
        </h1>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-[#00BCFF] text-sm sm:text-base">
            1. HTML stands for HyperText Markup Language.
          </p>

          <p className="text-[#00BCFF] text-sm sm:text-base">
            2. It is used to create the structure of web pages.
          </p>

          <p className="text-[#00BCFF] text-sm sm:text-base">
            3. HTML is made up of elements like div, p, h1, etc.
          </p>

          <p className="text-[#00BCFF] text-sm sm:text-base">
            4. Each element usually has an opening tag and a closing tag.
          </p>

          <p className="text-[#00BCFF] text-sm sm:text-base">
            5. HTML files have a .html extension and are displayed by web
            browsers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
