"use client";
import { Closeicon, Openicon } from "./Icon";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 👈 for scroll detection

  function open() {
    setIsOpen(true);
    setSidebar(false);
  }

  function close() {
    setIsOpen(false);
  }

  const urlOnClick = (id) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setSidebar(false);
    }
  };

  //  bg change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-l from-[#030712] to-purple-500"
          : "bg-[#030712]"
      }`}
    >
      <div className="overflow-hidden bg-purple-500 w-full">
        <Marquee
          direction="left"
          pauseOnHover={true}
          gradient={false}
          speed={100}
          className="overflow-hidden"
        >
          <p className="text-[30px] font-medium leading-[100%] text-white whitespace-nowrap">
            HTML | CSS | TAILWIND | BOOTSTRAP | NEXT.JS | REACT.JS | JAVASCRIPT
            | JAVA | PHYTHON |
          </p>
          <p className="text-[30px] font-medium leading-[100%] text-white whitespace-nowrap">
            HTML | CSS | TAILWIND | BOOTSTRAP | NEXT.JS | REACT.JS | JAVASCRIPT
            | JAVA | PHYTHON
          </p>
        </Marquee>
      </div>
      <div className="max-w-[1320px] w-full py-[15px] flex justify-between items-center mx-auto p-4 xxl:p-0">
        <Link href="/">
          <Image
            className="w-[100px] h-[60px] sm:w-[100px] sm:h-[44px] md:w-[100px] md:h-[61px]"
            src="/images/logo1.png"
            alt="logo-png"
            width={100}
            height={61}
            unoptimized
          />
        </Link>

        <div className="max-w-[480px] w-full justify-between flex items-center gap-4 max-lg:hidden">
          {["ABOUT US", "WHY US", "SERVICES"].map((label) => (
            <div
              key={label}
              className="hover:border-b-2 hover:border-b-[#1777d0] h-[25px]"
            >
              <Link
                href="/"
                className="text-white text-base font-poppins font-bold hover:text-[#1777d0]"
              >
                {label}
              </Link>
            </div>
          ))}
        </div>

        <span
          onClick={() => setSidebar(!sidebar)}
          className="cursor-pointer hidden max-lg:flex pr-2 max-sm:w-8"
        >
          <Openicon />
        </span>
      </div>

      {/* Sidebar */}
      <div
        className={`max-w-[450px] w-full h-screen bg-[#00806B] fixed top-0 px-4 z-40 flex flex-col
          ${sidebar ? "left-0" : "-left-[105%]"} duration-300`}
      >
        <span
          onClick={() => setSidebar(false)}
          className="cursor-pointer max-sm:w-8 mt-4 self-end rotate-180"
        >
          <Closeicon />
        </span>
        <div className="w-full py-4 flex justify-between items-start flex-col gap-[60px] mx-auto max-xl:px-4">
          <Link href="/">
            <Image
              src="/images/logo1.png"
              alt="logo-png"
              width={100}
              height={61}
            />
          </Link>
          <div className="w-full justify-between flex flex-col z-10 gap-8">
            {["ABOUT US", "WHY US", "SERVICES"].map((label) => (
              <div key={label}>
                <Link
                  href="/"
                  className="text-white text-base font-poppins font-bold"
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
