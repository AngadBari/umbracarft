"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";

export const NavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mx-auto mt-4 flex max-w-3xl items-center justify-between rounded-xl p-4">
      <p className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
        UmbraCraft
      </p>

      <div className="flex items-center gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-md text-neutral-700 transition-all duration-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <IconBrandGithub size={20} stroke={1.7} />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-md text-neutral-700 transition-all duration-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <IconBrandTwitter size={20} stroke={1.7} />
        </a>

        <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700" />

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-neutral-200 text-neutral-700 transition-all duration-200 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          {theme === "light" ? (
            <IconMoon size={18} stroke={1.8} />
          ) : (
            <IconSun size={18} stroke={1.8} className="text-yellow-400" />
          )}
        </button>
      </div>
    </div>
  );
};
