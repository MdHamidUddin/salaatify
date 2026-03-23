"use client";

import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import * as React from "react";
import { Settings, Globe, Moon, Sun, Laptop } from "lucide-react";
import { Icons } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function SiteHeader() {
  const { i18n, t } = useTranslation();
  const { setTheme } = useTheme();

  const handleLanguageToggle = () => {
    const newLang = i18n.language === "en" ? "bn" : "en";
    void i18n.changeLanguage(newLang);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container hidden h-14 items-center justify-between md:flex">
        <MainNav />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              <Settings className="h-5 w-5" />
              <span className="sr-only">{t("navigation.settings")}</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{t("navigation.settings")}</DropdownMenuLabel>
            <DropdownMenuItem onSelect={handleLanguageToggle}>
              <Globe className="mr-2 h-4 w-4" />
              {i18n.language === "en" ? "বাংলায় দেখুন" : "View in English"}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>{t("navigation.theme")}</DropdownMenuLabel>
            <DropdownMenuItem onSelect={() => setTheme("light")}>
              <Sun className="mr-2 h-4 w-4" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setTheme("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setTheme("system")}>
              <Laptop className="mr-2 h-4 w-4" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="container flex h-14 items-center justify-between gap-2 md:hidden">
        <div>
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold sm:inline-block">An Noor Masjid</span>
          </Link>
        </div>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
                <Settings className="h-5 w-5" />
                <span className="sr-only">{t("navigation.settings")}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t("navigation.settings")}</DropdownMenuLabel>
              <DropdownMenuItem onSelect={handleLanguageToggle}>
                <Globe className="mr-2 h-4 w-4" />
                {i18n.language === "en" ? "বাংলায় দেখুন" : "View in English"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>{t("navigation.theme")}</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
