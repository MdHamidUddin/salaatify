"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { useTranslation } from "react-i18next";

interface NavItem {
  href: string;
  translationKey: string;
}

export function MainNav() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  const navItems: NavItem[] = [
    // { href: "/prayers", translationKey: "navigation.prayerTimes" },
    { href: "/allah-names", translationKey: "navigation.names" },
    // { href: "/qibla", translationKey: "navigation.qibla" },
    // { href: "/sunnah", translationKey: "navigation.sunnah" },
    { href: "/team", translationKey: "navigation.team" },
    { href: "/courses", translationKey: "navigation.courses" },
    { href: "/teachers", translationKey: "navigation.teachers" },
    // In your navigation component, add:
    { href: "/videos", translationKey: "navigation.videos" },
  ];

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Salaatify</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith(item.href)
                ? "text-foreground"
                : "text-foreground/60",
            )}
            dir={i18n.language === "bn" ? "rtl" : "ltr"}
          >
            {t(item.translationKey)}
          </Link>
        ))}
      </nav>
    </div>
  );
}
