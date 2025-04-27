"use client";

import { Closeicon, Openicon } from "./Icon";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; 

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="bg-[#FFF]">
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
          <div className="hover:border-b-2 hover:border-b-[#1777d0] h-[25px]">
            <Link
              href="/"
              className="text-[#595959] text-base font-poppins font-bold hover:text-[#1777d0]"
            >
              ABOUT US
            </Link>
          </div>
          <div className="hover:border-b-2 hover:border-b-[#1777d0] h-[25px]">
            <Link
              href="/"
              className="text-[#595959] text-base font-poppins font-bold hover:text-[#1777d0]"
            >
              WHY US
            </Link>
          </div>
          <div className="hover:border-b-2 hover:border-b-[#1777d0] h-[25px]">
            <Link
              href="/"
              className="text-[#595959] text-base font-poppins font-bold hover:text-[#1777d0]"
            >
              SERVICES
            </Link>
          </div>
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
        className={`max-w-[450px] w-full h-screen bg-[#f2f2f4] fixed top-0 px-4 z-40 flex flex-col
          ${sidebar ? "left-0" : "-left-[105%]"} duration-300`}
      >
        <span
          onClick={() => setSidebar(false)}
          className="cursor-pointer max-sm:w-8 mt-4 self-end rotate-180"
        >
          <Closeicon />
        </span>
        <div className="w-full py-4 flex justify-between items-center flex-col gap-[60px] mx-auto max-xl:px-4">
          <Link href="/">
            <Image src="/img/logo.png" alt="logo-png" width={180} height={61} />
          </Link>
          <div className="w-full justify-between flex flex-col z-10 gap-8">
            <div>
              <Link
                href="/"
                className="text-[#595959] text-base font-poppins font-bold"
              >
                ABOUT US
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="text-[#595959] text-base font-poppins font-bold"
              >
                WHY US
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="text-[#595959] text-base font-poppins font-bold"
              >
                SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
