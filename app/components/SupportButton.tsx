"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconHeartHandshake, IconX } from "@tabler/icons-react";

import {Smooch_Sans} from "next/font/google";


const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["400"],
});


export const SupportButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <div
        onClick={() => setOpen(!open)}
        className="
        fixed bottom-6 right-16
        flex h-10 w-10 cursor-pointer items-center justify-center
        rounded-full border border-neutral-300 bg-white
        shadow-lg
        dark:border-neutral-700
        dark:bg-neutral-900
      "
      >
        {open ? <IconX size={18} /> : <IconHeartHandshake size={20} />}
      </div>

      
      {open && (
        <div
          className="
          fixed bottom-20 right-16
          w-72 rounded-2xl border border-neutral-200
          bg-white p-4 shadow-2xl

          dark:border-neutral-700
          dark:bg-neutral-900
        "
        >
          <div className="flex flex-col gap-3">

            <a href="https://buymeacoffee.com/angadbari2i" target="_blank">
            <div className=" rounded-xl border border-neutral-300 px-4 py-2 text-center text-sm font-medium flex items-center gap-3">
           
            <Image
              src="/img/buyme.svg"
              alt="Buy Me a Coffee"
            
              width={32}
              height={32}
            /> 
             <p className={`text-xl text-neutral-500 ${smoochSans.className}`}>Buy Me a Coffee</p> 
            </div>
            </a>
          

            
            <a href="https://buymeacoffee.com/angadbari2i" target="_blank">
            <div className=" rounded-xl border border-neutral-300 px-4 py-2 text-center text-sm font-medium flex items-center gap-3">
           
            <Image
              src="/img/buyme.svg"
              alt="Buy Me a Coffee"
            
              width={32}
              height={32}
            /> 
             <p className={`text-xl text-neutral-500 ${smoochSans.className}`}>Buy Me a Coffee</p> 
            </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
};