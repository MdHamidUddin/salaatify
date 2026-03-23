"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  Menu,
  Home,
  Users,
  BookOpen,
  School,
  Video,
  Compass,
  MessageCircle,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  href: string;
  translationKey: string;
  icon: React.ReactNode;
}

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const isBangla = i18n.language === "bn";
  const whatsappLink =
    "https://chat.whatsapp.com/HpC3jHJNAFZIUNCcEiTK1F?mode=gi_t";
  const navItems: NavItem[] = [
    {
      href: "/",
      translationKey: "navigation.home",
      icon: <Home className="h-5 w-5" />,
    },
    {
      href: "/allah-names",
      translationKey: "navigation.names",
      icon: <Compass className="h-5 w-5" />,
    },
    {
      href: "/team",
      translationKey: "navigation.team",
      icon: <Users className="h-5 w-5" />,
    },
    {
      href: "/courses",
      translationKey: "navigation.courses",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      href: "/teachers",
      translationKey: "navigation.teachers",
      icon: <School className="h-5 w-5" />,
    },
    {
      href: "/videos",
      translationKey: "navigation.videos",
      icon: <Video className="h-5 w-5" />,
    },
    {
      href: "/donation",
      translationKey: "navigation.donation",
      icon: <DollarSign className="h-5 w-5" />,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] p-0 sm:w-[350px]">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-gray-100 px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.jpg"
                  alt="Noor Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-lg font-bold text-gray-900">Noor</span>
              </div>
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-5 w-5" />
              </Button> */}
            </div>
          </div>

          {/* Navigation Items */}
          <nav
            className="flex-1 overflow-y-auto py-6"
            dir={isBangla ? "rtl" : "ltr"}
          >
            <div className="space-y-1 px-3">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                      active
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-lg",
                        active ? "bg-primary/20 text-primary" : "text-gray-500",
                      )}
                    >
                      {item.icon}
                    </div>
                    <span>{t(item.translationKey)}</span>
                    {active && (
                      <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-100 p-6">
            <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
              <p className="mb-1 text-sm font-semibold text-gray-900">
                {isBangla ? "আমাদের সাথে যুক্ত হন" : "Join Our Community"}
              </p>
              <p className="mb-3 text-xs text-gray-600">
                {isBangla
                  ? "ইসলামিক জ্ঞান ও সম্প্রদায়ের অংশ হোন"
                  : "Be part of our Islamic knowledge community"}
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 block"
              >
                <Button className="w-full gap-2 bg-green-600 text-white hover:bg-green-700">
                  <MessageCircle className="h-5 w-5" />
                  {isBangla ? "হোয়াটসঅ্যাপ" : "Join Us"}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
