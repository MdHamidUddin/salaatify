"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "../ui/separator";

interface NavItem {
  href: string;
  translationKey: string;
  category?: string;
}

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const mainNavItems: NavItem[] = [
    // { href: "/prayers", translationKey: "navigation.prayerTimes" },
    { href: "/allah-names", translationKey: "navigation.names" },
    // { href: "/qibla", translationKey: "navigation.qibla" },
    { href: "/sunnah", translationKey: "navigation.sunnah" },
  ];

  const sunnahNavItems: NavItem[] = [
    {
      href: "/sunnah/sahih-bukhari",
      translationKey: "navigation.sahihBukhari",
    },
    { href: "/sunnah/sahih-muslim", translationKey: "navigation.sahihMuslim" },
    { href: "/sunnah/sunan-nasai", translationKey: "navigation.sunanNasai" },
    { href: "/sunnah/abu-dawood", translationKey: "navigation.abuDawood" },
    { href: "/sunnah/al-tirmidhi", translationKey: "navigation.tirmidhi" },
    { href: "/sunnah/ibn-e-majah", translationKey: "navigation.ibnMajah" },
    { href: "/sunnah/musnad-ahmad", translationKey: "navigation.musnadAhmad" },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <ViewVerticalIcon className="h-5 w-5" />
          <span className="sr-only">{t("navigation.toggleMenu")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="pr-0"
        dir={i18n.language === "bn" ? "rtl" : "ltr"}
      >
        <div
          onClick={() => handleNavigation("/")}
          className="flex cursor-pointer items-center py-4 text-primary"
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">Salaatify</span>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {mainNavItems.map((item) => (
              <div
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="cursor-pointer text-sm font-medium hover:text-foreground/80"
              >
                {t(item.translationKey)}
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <p className="mb-2 font-bold text-primary">
            {t("navigation.sunnahBooks")}
          </p>
          <div className="flex flex-col space-y-3">
            {sunnahNavItems.map((item) => (
              <div
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="cursor-pointer text-sm font-medium hover:text-foreground/80"
              >
                {t(item.translationKey)}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
