import React from "react";
import { cn } from "@/app/lib/utils";
import { Karla } from "next/font/google";
import {Squada_One} from "next/font/google";
import {Smooch_Sans} from "next/font/google";
import { IconBrandGithub, IconCode } from "@tabler/icons-react";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400"],
});

const squadaOne = Squada_One({
  subsets: ["latin"],
  weight: ["400"],
});

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["400"],
});


export const Button = () => {
  return (
    <>
    <div className="mt-10 flex items-center justify-center gap-7" >
      <Btn className="bg-neutral-900 text-white cursor-pointer" >
        <BtnIcon>
          <IconBrandGithub size={20} />
        </BtnIcon>
        <BtnTitle className={`text-lg tracking-wider ${smoochSans.className}`} >
          Contribute Here !
        </BtnTitle>
      </Btn>

      <Btn className="bg-neutral-50 text-black shadow cursor-pointer" >
        <BtnIcon>
          <IconCode size={20} />
        </BtnIcon>
        <BtnTitle className={`text-lg tracking-wider ${smoochSans.className}`} >
          Browse Box Shadows
        </BtnTitle>
      </Btn>
    </div>

    <div className=" mx-auto max-w-3xl border-t border-neutral-300 mt-20" >

      <div className="mt-10 flex items-center justify-center gap-20" >
          <div className=" flex flex-col items-center">
            <h2 className={` font-bold text-3xl ${squadaOne.className}`}>50+</h2>
            <span className={` text-xl text-center text-neutral-500 ${smoochSans.className}`}>
              Box Shadows
            </span>
          </div>

          <div className=" flex flex-col items-center">
            <h2 className={` font-bold text-3xl ${squadaOne.className}`}>100%</h2>
            <span className={` text-xl text-center text-neutral-500 ${smoochSans.className}`}>
              Free
            </span>
          </div>

           <div className=" flex flex-col items-center">
            <h2 className={` font-bold text-3xl ${squadaOne.className}`}>Copy&</h2>
            <span className={` text-xl text-center text-neutral-500 ${smoochSans.className}`}>
              Paste
            </span>
          </div>
      </div>

    </div>
    </>
  
  );
};

type BtnProps = {
  className?: string;
  children: React.ReactNode;
};

const Btn = ({ className, children }: BtnProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-[8px] px-6 py-3 text-sm  transition-all duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

const BtnIcon = ({ className, children }: BtnProps) => {
  return (
    <span
      className={cn(
        "flex items-center justify-center ",
        className
      )}
    >
      {children}
    </span>
  );
};

const BtnTitle = ({ className, children }: BtnProps) => {
  return (
    <span
      className={cn(
        "text-sm tracking-wider ",
        className
      )}
    >
      {children}
    </span>
  );
};