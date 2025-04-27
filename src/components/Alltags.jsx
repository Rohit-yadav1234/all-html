import Image from "next/image";
import React from "react";

const Alltags = () => {
  return (
    <section className="bg-[#030712] w-full">
      <div className="max-w-[1120px] flex flex-col items-center w-full mx-auto px-3 pt-8 pb-8">
        <Image
          src="/images/anchor tag.png"
          unoptimized
          width={900}
          height={800}
          alt="anchor tag"
        />
        <div className="flex flex-col">
          <h2 className="text-white mt-8 text-2xl sm:text-4xl font-normal">
            <span>1.</span> Anchor tag
          </h2>
          <p className="text-[#A684FF] text-base sm:text-2xl mt-5 font-normal">
            Anchor tag ka matlab hota hai "anchor tag". Ye HTML ka ek element
            hai jo kisi link ko define karta hai. Iska use hum kisi aur page,
            website, ya document pe jump karne ke liye karte hain.
          </p>
          <h2 className="text-2xl sm:text-4xl font-normal mt-5 text-white">
            2. Attributes
          </h2>
          <div className="text-white font-normal text-lg sm:text-2xl mt-5 flex flex-col gap-3">
            <li>
              download :-
              <span className="text-[#00bcff]">
                the target will be downloaded when a user clicks on the
                hyperlink
              </span>
            </li>
            <li>
              href :-
              <span className="text-[#00BCFF]">
                the URL of the page the link goes to
              </span>
            </li>
            <li>
              Target :-
              <span className="text-[#00BCFF]">
                target attribute anchor tag ke andar use hota hai ye decide
                karne ke liye ki link pe click karne ke baad naya page kahan
                open hoga.
              </span>
            </li>
            <p>Types of target </p>
            <p>
              self:-
              <span className="text-[#00BCFF]">
                Link ussi tab ya window mein open hota hai.
              </span>
            </p>
            <p>
              blank:-
              <span className="text-[#00BCFF]">
                Link nayi tab mein open hota hai.
              </span>
            </p>
            <p>
              parent:-
              <span className="text-[#00BCFF]">
                Link parent frame mein open hota hai (frames ke use mein aata
                hai).
              </span>
            </p>
            <p>
              top:-
              <span className="text-[#00BCFF]">
                Poore browser window mein open hota hai (frames ke context mein
                useful).
              </span>
            </p>
            <li>
              alt :-
              <span className="text-[#00bcff]">
                Alt k ander link ka name hota hai.
              </span>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alltags;
