"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  donationData,
  type BkashDetails,
  type NagadDetails,
} from "@/lib/donation-data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Heart } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";

const DonationPage = () => {
  const { i18n } = useTranslation();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const isBangla = i18n.language === "bn";

  type PaymentIconProps = {
    name: keyof typeof Icons;
    className?: string;
  };

  const PaymentIcon: React.FC<PaymentIconProps> = ({ name, className }) => {
    const SelectedIcon = Icons[name];
    if (!SelectedIcon) return null;
    return <SelectedIcon className={className} />;
  };

  const getLocalizedText = (en: string, bn: string) => {
    return isBangla ? bn : en;
  };

  const getBkashDetails = () => {
    const bkashMethod = donationData.paymentMethods.find(
      (method) => method.type === "bkash",
    );
    return bkashMethod?.details as BkashDetails;
  };

  const getNagadDetails = () => {
    const nagadMethod = donationData.paymentMethods.find(
      (method) => method.type === "nagad",
    );
    return nagadMethod?.details as NagadDetails;
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: isBangla ? "কপি করা হয়েছে!" : "Copied!",
        description: isBangla
          ? `${field} ক্লিপবোর্ডে কপি করা হয়েছে`
          : `${field} copied to clipboard`,
        duration: 2000,
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: isBangla ? "কপি করা যায়নি" : "Copy Failed",
        description: isBangla
          ? "ক্লিপবোর্ডে কপি করতে ব্যর্থ হয়েছে"
          : "Failed to copy to clipboard",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 font-['Inter']">
      {/* Header Section */}
      <section className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-red-100 px-4 py-2">
          <Heart className="mr-2 h-5 w-5 text-red-600" />
          <span className="text-sm font-semibold text-red-600">
            {isBangla
              ? "আপনার দান আমাদের চলার পথ"
              : "Your Donation Keeps Us Going"}
          </span>
        </div>

        <h1
          className="mb-4 text-4xl font-bold text-gray-800"
          dir={isBangla ? "rtl" : "ltr"}
        >
          {getLocalizedText(donationData.title, donationData.titleBn)}
        </h1>

        <p
          className="mx-auto max-w-2xl text-lg text-gray-600"
          dir={isBangla ? "rtl" : "ltr"}
        >
          {getLocalizedText(
            donationData.description,
            donationData.descriptionBn,
          )}
        </p>
      </section>

      {/* Stats Section */}
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="mb-2 text-3xl font-bold text-blue-600">25+</div>
            <p className="text-gray-600">
              {isBangla ? "শিক্ষার্থী" : "Students"}
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="mb-2 text-3xl font-bold text-green-600">15+</div>
            <p className="text-gray-600">
              {isBangla ? "শিক্ষক ও কর্মকর্তা" : "Teachers & Staff"}
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="mb-2 text-3xl font-bold text-orange-600">3+</div>
            <p className="text-gray-600">
              {isBangla ? "বছর ধরে সেবা" : "Years of Service"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Methods */}
      <Tabs defaultValue="bkash" className="mx-auto w-full max-w-4xl">
        <TabsList className="mb-8 grid h-16 w-full grid-cols-3">
          <TabsTrigger value="bkash" className="flex items-center gap-2">
            {/* <PaymentIcon name="bkash" className="h-8 w-8 text-primary" /> */}
            <Image src="/bkash-icon.svg" alt="bKash" width={32} height={32} />
            <span>{isBangla ? "বিকাশ" : "bKash"}</span>
          </TabsTrigger>
          <TabsTrigger value="nagad" className="flex items-center gap-2">
            <Image src="/nagad-icon.svg" alt="Nagad" width={32} height={32} />
            <span>{isBangla ? "নগদ" : "Nagad"}</span>
          </TabsTrigger>
          <TabsTrigger value="bank" className="flex items-center gap-2">
            <PaymentIcon name="bank" className="h-8 w-8 text-primary" />
            <span>{isBangla ? "ব্যাংক" : "Bank"}</span>
          </TabsTrigger>
        </TabsList>

        {/* bKash Tab */}
        <TabsContent value="bkash">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image
                  src="/bkash-icon.svg"
                  alt="bKash"
                  width={24}
                  height={24}
                />
                {isBangla ? "বিকাশের মাধ্যমে দান করুন" : "Donate via bKash"}
              </CardTitle>
              <CardDescription>
                {isBangla
                  ? "নিচের QR কোড স্ক্যান করুন অথবা মার্চেন্ট নম্বরে টাকা পাঠান"
                  : "Scan the QR code below or send money to the merchant number"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* QR Code */}
              <div className="flex flex-col items-center">
                <div className="relative h-64 w-64 rounded-xl bg-white p-4 shadow-lg">
                  <Image
                    src="/donation/bkash.jpeg"
                    alt="bKash QR Code"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {isBangla ? "QR কোড স্ক্যান করুন" : "Scan QR Code"}
                </p>
              </div>

              {/* Merchant Number */}
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="mb-2 text-sm text-gray-600">
                  {isBangla ? "মার্চেন্ট নম্বর:" : "Merchant Number:"}
                </p>
                <div className="flex items-center justify-between">
                  <code className="font-mono text-lg font-semibold">
                    {getBkashDetails()?.merchantNumber}
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(
                        getBkashDetails()?.merchantNumber || "",
                        isBangla ? "নম্বর" : "Number",
                      )
                    }
                  >
                    {copiedField === (isBangla ? "নম্বর" : "Number") ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    <span className="ml-2">{isBangla ? "কপি" : "Copy"}</span>
                  </Button>
                </div>
              </div>

              {/* Instructions */}
              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-semibold text-blue-800">
                  {isBangla ? "কিভাবে দান করবেন:" : "How to Donate:"}
                </h4>
                <div className="space-y-2 text-sm text-blue-700">
                  {getLocalizedText(
                    getBkashDetails()?.instructions || "",
                    getBkashDetails()?.instructionsBn || "",
                  )
                    .split("\n")
                    .map((step: string, idx: number) => (
                      <p key={idx} className="flex items-start gap-2">
                        <span className="font-bold">{idx + 1}.</span>
                        <span>{step}</span>
                      </p>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Nagad Tab */}
        <TabsContent value="nagad">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image
                  src="/nagad-icon.svg"
                  alt="Nagad"
                  width={48}
                  height={48}
                />
                {isBangla ? "নগদের মাধ্যমে দান করুন" : "Donate via Nagad"}
              </CardTitle>
              {/* <CardDescription>
                {isBangla
                  ? "নিচের QR কোড স্ক্যান করুন অথবা মার্চেন্ট নম্বরে টাকা পাঠান"
                  : "Scan the QR code below or send money to the merchant number"}
              </CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-6">
              {/* <div className="flex flex-col items-center">
                <div className="relative h-64 w-64 rounded-xl bg-white p-4 shadow-lg">
                  <Image
                    src="/donation/bkash.jpeg"
                    alt="Nagad QR Code"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {isBangla ? "QR কোড স্ক্যান করুন" : "Scan QR Code"}
                </p>
              </div> */}

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="mb-2 text-sm text-gray-600">
                  {isBangla ? "মার্চেন্ট নম্বর:" : "Merchant Number:"}
                </p>
                <div className="flex items-center justify-between">
                  <code className="font-mono text-lg font-semibold">
                    {getNagadDetails()?.merchantNumber}
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(
                        getNagadDetails()?.merchantNumber || "",
                        isBangla ? "নম্বর" : "Number",
                      )
                    }
                  >
                    {copiedField === (isBangla ? "নম্বর" : "Number") ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    <span className="ml-2">{isBangla ? "কপি" : "Copy"}</span>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg bg-orange-50 p-4">
                <h4 className="mb-2 font-semibold text-orange-800">
                  {isBangla ? "কিভাবে দান করবেন:" : "How to Donate:"}
                </h4>
                <div className="space-y-2 text-sm text-orange-700">
                  {getLocalizedText(
                    getNagadDetails()?.instructions || "",
                    getNagadDetails()?.instructionsBn || "",
                  )
                    .split("\n")
                    .map((step: string, idx: number) => (
                      <p key={idx} className="flex items-start gap-2">
                        <span className="font-bold">{idx + 1}.</span>
                        <span>{step}</span>
                      </p>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Bank Tab */}
        <TabsContent value="bank">
          <Card>
            {/* <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Banknote className="h-5 w-5" />
                {isBangla
                  ? "ব্যাংক অ্যাকাউন্টে দান করুন"
                  : "Donate via Bank Account"}
              </CardTitle>
              <CardDescription>
                {isBangla
                  ? "নিচের ব্যাংক অ্যাকাউন্টে সরাসরি টাকা পাঠাতে পারেন"
                  : "You can send money directly to the bank account below"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {(donationData?.paymentMethods?.[2]?.details as any).bankName && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="mb-1 text-sm text-gray-500">
                      {isBangla ? "ব্যাংকের নাম" : "Bank Name"}
                    </p>
                    <p className="font-semibold text-gray-800">
                      {getLocalizedText(
                        (donationData?.paymentMethods?.[2]?.details as any)
                          .bankName,
                        (donationData?.paymentMethods?.[2]?.details as any)
                          .bankNameBn,
                      )}
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="mb-1 text-sm text-gray-500">
                      {isBangla ? "শাখা" : "Branch"}
                    </p>
                    <p className="font-semibold text-gray-800">
                      {getLocalizedText(
                        (donationData?.paymentMethods?.[2]?.details as any)
                          .branch,
                        (donationData?.paymentMethods?.[2]?.details as any)
                          .branchBn,
                      )}
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="mb-1 text-sm text-gray-500">
                      {isBangla ? "অ্যাকাউন্টের নাম" : "Account Name"}
                    </p>
                    <p className="font-semibold text-gray-800">
                      {getLocalizedText(
                        (donationData?.paymentMethods?.[2]?.details as any)
                          .accountName,
                        (donationData?.paymentMethods?.[2]?.details as any)
                          .accountNameBn,
                      )}
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="mb-1 text-sm text-gray-500">
                      {isBangla ? "অ্যাকাউন্ট নম্বর" : "Account Number"}
                    </p>
                    <div className="flex items-center justify-between">
                      <code className="font-mono font-semibold">
                        {
                          (donationData?.paymentMethods?.[2]?.details as any)
                            .accountNumber
                        }
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            (donationData?.paymentMethods?.[2]?.details as any)
                              .accountNumber,
                            isBangla ? "অ্যাকাউন্ট নম্বর" : "Account Number",
                          )
                        }
                      >
                        {copiedField ===
                        (isBangla ? "অ্যাকাউন্ট নম্বর" : "Account Number") ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {(donationData?.paymentMethods?.[2]?.details as any)
                .routingNumber && (
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="mb-1 text-sm text-gray-500">
                    {isBangla ? "রাউটিং নম্বর" : "Routing Number"}
                  </p>
                  <div className="flex items-center justify-between">
                    <code className="font-mono">
                      {
                        (donationData?.paymentMethods?.[2]?.details as any)
                          .routingNumber
                      }
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          (donationData?.paymentMethods?.[2]?.details as any)
                            .routingNumber,
                          isBangla ? "রাউটিং নম্বর" : "Routing Number",
                        )
                      }
                    >
                      {copiedField ===
                      (isBangla ? "রাউটিং নম্বর" : "Routing Number") ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {(donationData?.paymentMethods?.[2]?.details as any)
                .swiftCode && (
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="mb-1 text-sm text-gray-500">
                    {isBangla ? "SWIFT কোড" : "SWIFT Code"}
                  </p>
                  <div className="flex items-center justify-between">
                    <code className="font-mono">
                      {
                        (donationData?.paymentMethods?.[2]?.details as any)
                          .swiftCode
                      }
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          (donationData?.paymentMethods?.[2]?.details as any)
                            .swiftCode,
                          isBangla ? "SWIFT কোড" : "SWIFT Code",
                        )
                      }
                    >
                      {copiedField ===
                      (isBangla ? "SWIFT কোড" : "SWIFT Code") ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent> */}
            <div className="flex place-items-center justify-center p-4">
              Coming Soon...
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Additional Information */}
      <div className="mx-auto mt-12 max-w-4xl">
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-800">
                  {isBangla ? "আপনার দানের প্রভাব" : "Impact of Your Donation"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isBangla
                    ? "আপনার দান আমাদের শিক্ষার্থীদের শিক্ষা উপকরণ, খাবার, আবাসন এবং অন্যান্য মৌলিক প্রয়োজন মেটাতে সাহায্য করে। প্রতিটি টাকা সরাসরি শিক্ষার্থীদের কল্যাণে ব্যবহৃত হয়।"
                    : "Your donation helps provide educational materials, food, accommodation, and other basic needs for our students. Every taka is used directly for student welfare."}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
                  <div>
                    <p className="text-lg font-bold text-green-600">500 TK</p>
                    <p className="text-xs text-gray-500">
                      {isBangla
                        ? "১ জন শিক্ষার্থীর ১ মাসের খাবার"
                        : "1 month food for 1 student"}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600">1000 TK</p>
                    <p className="text-xs text-gray-500">
                      {isBangla ? "শিক্ষা উপকরণ" : "Educational materials"}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600">3000 TK</p>
                    <p className="text-xs text-gray-500">
                      {isBangla
                        ? "১ জন শিক্ষার্থীর মাসিক বৃত্তি"
                        : "Monthly stipend for 1 student"}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600">5000 TK</p>
                    <p className="text-xs text-gray-500">
                      {isBangla ? "আবাসন সহায়তা" : "Accommodation support"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonationPage;
