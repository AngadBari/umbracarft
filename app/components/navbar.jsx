"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";

export const NavBar = () => {
  return (
    <div className="mx-auto mt-4 flex max-w-3xl items-center justify-between rounded-xl p-4">
      <div className="flex items-center">
        <Image
          src="/favicon.ico"
          alt="UmbraCraft Logo"
          width={40}
          height={40}
        />
        <p className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
          UmbraCraft
        </p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/AngadBari/umbracarft"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-md text-neutral-700 transition-all duration-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <IconBrandGithub size={25} stroke={1.7} />
        </a>

        <a
          href="https://x.com/angadbari01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-md text-neutral-700 transition-all duration-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <IconBrandTwitter size={25} stroke={1.7} />
        </a>
      </div>
    </div>
  );
};
