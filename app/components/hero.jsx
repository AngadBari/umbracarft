import React from "react";
import { Smooch_Sans } from "next/font/google";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const Hero = () => {
  return (
    <div className="mx-auto mt-15 flex max-w-7xl flex-col items-center justify-center rounded-xl text-center">
      <h1 className="bg-gradient-to-b from-neutral-950 to-neutral-500 bg-clip-text text-6xl leading-tight font-bold tracking-tight text-transparent dark:from-white dark:to-neutral-400">
        Craft Beautiful
      </h1>

      <h2 className="bg-gradient-to-b from-neutral-950 to-neutral-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-white dark:to-neutral-400">
        Box Shadows for{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Tailwind CSS
        </span>
      </h2>

      <p
        className={`my-10 max-w-xl text-2xl leading-relaxed text-neutral-500 selection:bg-pink-600 dark:text-neutral-400 ${smoochSans.className}`}
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
