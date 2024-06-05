import React from "react";
import { getCurrentYear } from "../lib/util";

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t-2 border-[#ff4444] fixed bottom-0 left-0 z-20 w-full font-poppins flex flex-wrap p-3 flex-col">
      <div className="container flex flex-col min-w-screen mx-auto items-center justify-center ">
        <div className="items-center justify-center break-words xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-lg bold title-font text-white">
          © Dr. D. Veeraragavathatham
        </div>
        <div className="items-center justify-center break-words xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-lg bold title-font text-white">
          {getCurrentYear()} - All rights reserved
        </div>
      </div>
    </footer>
  );
}
