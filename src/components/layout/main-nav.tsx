"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { useTranslation } from "react-i18next";
import { MobileNav } from "./mobile-nav";

interface NavItem {
  href: string;
  translationKey: string;
}

export function MainNav() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  const isActive = (href: string) =>
    !!pathname && (pathname === href || pathname.startsWith(href));

  const navItems: NavItem[] = [
    { href: "/allah-names", translationKey: "navigation.names" },
    { href: "/team", translationKey: "navigation.team" },
    { href: "/courses", translationKey: "navigation.courses" },
    { href: "/teachers", translationKey: "navigation.teachers" },
    { href: "/videos", translationKey: "navigation.videos" },
  ];

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center">
        <MobileNav />
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            An Nur Masjid
          </span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  active
                    ? "font-semibold text-foreground"
                    : "text-foreground/60 hover:text-foreground/80",
                )}
                dir={i18n.language === "bn" ? "rtl" : "ltr"}
              >
                {t(item.translationKey)}
              </Link>
            );
          })}
        </nav>
      </div>
      {/* <div className="flex items-center gap-2">
        <LanguageSwitcher />
      </div> */}
    </div>
  );
}
