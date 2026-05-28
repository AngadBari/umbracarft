import React from "react";

import { Smooch_Sans } from "next/font/google";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl border-t border-neutral-300 py-10">
      <p
        className={`text-center text-xl text-neutral-500 ${smoochSans.className}`}
      >
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-pink-500">UmbraCraft</span>. All rights reserved.
      </p>
    </div>
  );
};
