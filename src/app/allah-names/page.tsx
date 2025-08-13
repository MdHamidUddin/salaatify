"use client"; // This directive marks the component as a Client Component

import { useState, useEffect } from "react"; // Import useState and useEffect
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllahNames } from "@/lib/get-allah-names";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next"; // Import Trans component for rich text

type AllahName = {
  name: string;
  transliteration: string;
  number: number;
  en: { meaning: string };
};

const Page = () => {
  // Removed async from here
  const { t, i18n } = useTranslation();
  const [names, setNames] = useState<AllahName[]>([]); // State to hold the names data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState<null | string>(null); // State to handle potential errors

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchNames = async () => {
      try {
        setLoading(true);
        const data = await getAllahNames();
        setNames(data.data);
      } catch (err) {
        console.error("Failed to fetch Allah names:", err);
        setError("Failed to load names. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    void fetchNames(); // Add void operator here
  }, []);
  // Function to render description paragraphs
  const renderDescription = () => {
    const parts = [];
    for (let i = 1; i <= 5; i++) {
      parts.push(
        <p key={`desc-part-${i}`} dir={i18n.language === "bn" ? "ltl" : "ltr"}>
          {/* Using Trans component to allow for rich text (e.g., <span> for bold) */}
          <Trans
            i18nKey={`allahNames.description.part${i}`}
            components={{ 1: <span className="font-bold" /> }}
          />
        </p>,
      );
    }
    return parts;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-['Inter'] text-xl text-gray-700">
        <p>Loading Allah&apos;s Names...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-['Inter'] text-xl text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 font-['Inter']">
      {" "}
      {/* Added Inter font */}
      <section>
        <h2
          className="my-6 rounded-md bg-blue-100 px-4 py-2 text-center text-3xl font-bold text-blue-800 shadow-md"
          dir={i18n.language === "bn" ? "ltr" : "ltr"}
        >
          {t("allahNames.title")}
        </h2>
        <div className="mb-10 space-y-4 rounded-lg bg-white p-6 leading-relaxed text-gray-700 shadow-lg">
          {" "}
          {/* Increased spacing, added styling */}
          {renderDescription()}
        </div>
      </section>
      <section className="mt-12">
        <Table className="min-w-full overflow-hidden rounded-lg bg-white shadow-lg">
          {" "}
          {/* Added styling to table */}
          <TableCaption className="py-4 text-lg font-semibold text-gray-800">
            {t("A list of 99 Names of Allah.")}{" "}
            {/* Make caption translatable */}
          </TableCaption>
          <TableHeader className="bg-blue-100 text-blue-800 shadow-md">
            <TableRow>
              <TableHead className="w-[80px] rounded-tl-lg px-4 py-3 text-left font-semibold">
                #
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold">
                {t("Name")}
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold">
                {t("English")}
              </TableHead>
              <TableHead className="rounded-tr-lg px-4 py-3 text-left font-semibold">
                {t("Meaning")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {names.map((name) => (
              <TableRow
                key={name.number}
                className="border-b border-gray-200 transition-colors duration-200 hover:bg-blue-50"
              >
                <TableCell className="px-4 py-3 font-medium">
                  {name.number}
                </TableCell>
                <TableCell className="px-4 py-3 font-semibold text-blue-700">
                  {name.name}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-800">
                  {name.transliteration}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-600">
                  {name.en.meaning}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default Page;
