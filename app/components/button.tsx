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
   <div className="mt-10 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-6">
  <a
    href="https://github.com/AngadBari/umbracarft"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <Btn className="flex w-full items-center justify-center bg-neutral-900 text-white shadow-md cursor-pointer sm:w-auto">
      <BtnIcon>
        <IconBrandGithub size={20} />
      </BtnIcon>

      <BtnTitle
        className={`text-base tracking-wider sm:text-lg ${smoochSans.className}`}
      >
        Contribute Here !
      </BtnTitle>
    </Btn>
  </a>

  <a
    href="#box-shadows"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <Btn className="flex w-full items-center justify-center bg-neutral-50 text-black shadow cursor-pointer sm:w-auto">
      <BtnIcon>
        <IconCode size={20} />
      </BtnIcon>

      <BtnTitle
        className={`text-base tracking-wider sm:text-lg ${smoochSans.className}`}
      >
        View Box-Shadows
      </BtnTitle>
    </Btn>
  </a>
</div>

<div className="mx-auto mt-8 max-w-3xl px-4 text-center sm:mt-10">
  <p
    className={`text-sm text-pink-500 sm:text-base md:text-lg ${smoochSans.className}`}
  >
    This Shadow Only use in Light Mode
  </p>
</div>

<div className="mx-auto mt-10 max-w-3xl border-t border-neutral-300 px-4">
  <div className="mt-8 grid  gap-8 grid-cols-3 sm:gap-4 md:gap-8">
    
    <div className="flex flex-col items-center">
      <h2 className={`text-3xl font-bold sm:text-4xl ${squadaOne.className}`}>
        50+
      </h2>

      <span
        className={`text-center text-lg text-neutral-500 sm:text-xl ${smoochSans.className}`}
      >
        Box Shadows
      </span>
    </div>

    <div className="flex flex-col items-center">
      <h2 className={`text-3xl font-bold sm:text-4xl ${squadaOne.className}`}>
        100%
      </h2>

      <span
        className={`text-center text-lg text-neutral-500 sm:text-xl ${smoochSans.className}`}
      >
        Free
      </span>
    </div>

    <div className="flex flex-col items-center">
      <h2 className={`text-3xl font-bold sm:text-4xl ${squadaOne.className}`}>
        Copy&
      </h2>

      <span
        className={`text-center text-lg text-neutral-500 sm:text-xl ${smoochSans.className}`}
      >
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