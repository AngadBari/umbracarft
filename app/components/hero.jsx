import React from "react";
import { Smooch_Sans } from "next/font/google";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const Hero = () => {
  return (
    <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center rounded-xl px-4 text-center sm:mt-14 md:mt-20">
      <h1 className="bg-gradient-to-b from-neutral-950 to-neutral-500 bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl dark:from-white dark:to-neutral-400">
        Craft Beautiful
      </h1>

      <h2 className="mt-2 bg-gradient-to-b from-neutral-950 to-neutral-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl dark:from-white dark:to-neutral-400">
        Box Shadows for{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Tailwind CSS
        </span>
      </h2>

      <p
        className={`mt-6 max-w-xs text-sm leading-relaxed text-neutral-500 sm:max-w-lg sm:text-lg md:mt-8 md:max-w-2xl md:text-xl lg:text-2xl dark:text-neutral-400 ${smoochSans.className}`}
      >
        A curated collection of modern{" "}
        <span className="text-black dark:text-white">Box-Shadows</span> for
        Tailwind CSS. Easily copy the classes and paste directly into your
        projects. Discover soft shadows, glowing styles, crafted for beautiful
        interfaces.
      </p>
    </div>
  );
};
