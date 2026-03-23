"use client";

import { Separator } from "../ui/separator";
import { Icons } from "@/components/icons";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

export function SiteFooter() {
  const { i18n } = useTranslation();
  const isBangla = i18n.language === "bn";

  const whatsappLink =
    "https://chat.whatsapp.com/HpC3jHJNAFZIUNCcEiTK1F?mode=gi_t"; // Replace with your actual WhatsApp group link

  return (
    <footer className="mt-12 bg-gray-50 pb-6 pt-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Mosque Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Icons.logo className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-gray-800">
                An Noor Jame Masjid
              </h3>
            </div>
            <p className="mb-2 text-sm text-gray-600">আন-নূর জামে মসজিদ</p>
            <div className="mb-2 flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span dir={isBangla ? "rtl" : "ltr"}>
                {isBangla
                  ? "বন্ধু বাজার, রানী বাড়ি চাঁদপুর, শিবগঞ্জ, চাঁপাইনবাবগঞ্জ।"
                  : "Bandhu Bazar, Rani Bari Chandpur, Shibganj, Chapainawabganj."}
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-800">
              {isBangla ? "যোগাযোগ" : "Contact"}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+880 1716 742 229</span>
              </li>
              {/* <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@annurmasjid.com"
                  className="transition-colors hover:text-primary"
                >
                  info@annurmasjid.com
                </a>
              </li> */}
            </ul>
          </div>

          {/* Social & WhatsApp */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-800">
              {isBangla ? "সাথে থাকুন" : "Stay Connected"}
            </h4>

            {/* WhatsApp Group Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 block"
            >
              <Button className="w-full gap-2 bg-green-600 text-white hover:bg-green-700">
                <MessageCircle className="h-5 w-5" />
                {isBangla
                  ? "হোয়াটসঅ্যাপ গ্রুপে জয়েন করুন"
                  : "Join WhatsApp Group"}
              </Button>
            </a>

            {/* Social Links */}
            {/* <div className="flex gap-3">
              <a
                href="https://facebook.com/your-page"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-red-600 hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-green-600 hover:text-white"
                aria-label="WhatsApp"
              >
                <Icons.whatsapp className="h-5 w-5" />
              </a>
            </div> */}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © {new Date().getFullYear()} Noor.
            {isBangla ? " সর্বস্বত্ব সংরক্ষিত।" : " All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
