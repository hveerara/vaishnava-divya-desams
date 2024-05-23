import React from "react";
import { getCurrentYear } from "../lib/util";

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t-2 border-[#ff4444] w-full sticky bottom-0 font-poppins flex flex-wrap p-3 flex-row sm:flex-col xs:flex-col">
      <div className="container flex flex-col min-w-screen mx-auto items-center justify-center ">
        <div className="items-center justify-center break-words xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl bold title-font text-white">
          © Dr. D. Veeraragavathatham
        </div>
        <div className="items-center justify-center break-words xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl bold title-font text-white">
          {getCurrentYear()} - All rights reserved
        </div>
      </div>
    </footer>
  );
}
