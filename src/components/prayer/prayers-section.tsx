"use client";
import { getTimingsByCity } from "@/lib/get-prayer-times";
import PrayerCard from "./prayer-card";
import type { PrayerCardProps, TimezoneProps } from "@/types";
import PrayerInfoPanel from "./prayer-info-panel";
import { Suspense, useEffect, useState } from "react";
import { toast } from "../ui/use-toast";
import { Loader } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PrayersSectionProps {
  searchText: string;
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
}

export default function PrayersSection({
  searchText,
  clicked,
  setClicked,
}: PrayersSectionProps) {
  const [data, setData] = useState<TimezoneProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        setClicked(false);

        const payload = {
          country_name: "Bangladesh",
          city: searchText,
        };

        const prayerData = await getTimingsByCity(payload);
        if (prayerData) {
          setData(prayerData);
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Error fetching prayer data. Please try again.",
        });
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (clicked) {
      void fetchData();
    }
    if (!data && searchText) {
      void fetchData(); // Fetch data if searchText is provided
    }
  }, [clicked, searchText, setClicked]);

  if (isLoading || !data) {
    return (
      <section className="container grid min-h-[200px] place-content-center space-y-4">
        <p className="flex items-center text-lg font-medium text-gray-700">
          <span>Loading Prayer Times</span>{" "}
          <Loader className="mx-4 h-5 w-5 animate-spin text-blue-600" />
        </p>
        {isError && (
          <p className="text-center text-red-500">
            Failed to load data. Please check your internet connection or try a
            different city.
          </p>
        )}
      </section>
    );
  }

  const createTimeInSeconds = (timeString?: string) => {
    const time = new Date(`${new Date().toDateString()} ${timeString}`);
    return time.getTime();
  };

  const fajrTimeInSeconds = createTimeInSeconds(data.timings?.Fajr);
  const sunriseTimeInSeconds = createTimeInSeconds(data.timings?.Sunrise);
  const dhuhrTimeInSeconds = createTimeInSeconds(data.timings?.Dhuhr);
  const asrTimeInSeconds = createTimeInSeconds(data.timings?.Asr);
  const maghribTimeInSeconds = createTimeInSeconds(data.timings?.Maghrib);
  const ishaTimeInSeconds = createTimeInSeconds(data.timings?.Isha);
  const currentTimeInSeconds = new Date().getTime();

  const prayers: PrayerCardProps[] = [
    {
      time: data.timings.Fajr,
      icon: "fajr",
      name: t("prayerNames.fajr"),
      isCurrent:
        currentTimeInSeconds >= fajrTimeInSeconds &&
        currentTimeInSeconds < sunriseTimeInSeconds,
      isNext: currentTimeInSeconds < fajrTimeInSeconds,
    },
    {
      time: data.timings.Sunrise,
      icon: "sunrise",
      name: t("prayerNames.sunrise"),
      isCurrent:
        currentTimeInSeconds >= sunriseTimeInSeconds &&
        currentTimeInSeconds < dhuhrTimeInSeconds,
      isNext:
        currentTimeInSeconds < sunriseTimeInSeconds &&
        currentTimeInSeconds > fajrTimeInSeconds,
    },
    {
      time: data.timings.Dhuhr,
      icon: "dhuhr",
      name: t("prayerNames.dhuhr"),
      isCurrent:
        currentTimeInSeconds >= dhuhrTimeInSeconds &&
        currentTimeInSeconds < asrTimeInSeconds,
      isNext:
        currentTimeInSeconds < dhuhrTimeInSeconds &&
        currentTimeInSeconds > sunriseTimeInSeconds,
    },
    {
      time: data.timings.Asr,
      icon: "asr",
      name: t("prayerNames.asr"),
      isCurrent:
        currentTimeInSeconds >= asrTimeInSeconds &&
        currentTimeInSeconds < maghribTimeInSeconds,
      isNext:
        currentTimeInSeconds < asrTimeInSeconds &&
        currentTimeInSeconds > dhuhrTimeInSeconds,
    },
    {
      time: data.timings.Maghrib,
      icon: "maghrib",
      name: t("prayerNames.maghrib"),
      isCurrent:
        currentTimeInSeconds >= maghribTimeInSeconds &&
        currentTimeInSeconds < ishaTimeInSeconds,
      isNext:
        currentTimeInSeconds < maghribTimeInSeconds &&
        currentTimeInSeconds > asrTimeInSeconds,
    },
    {
      time: data.timings.Isha,
      icon: "isha",
      name: t("prayerNames.isha"),
      isCurrent:
        currentTimeInSeconds >= ishaTimeInSeconds ||
        currentTimeInSeconds < fajrTimeInSeconds,
      isNext:
        currentTimeInSeconds < ishaTimeInSeconds &&
        currentTimeInSeconds > maghribTimeInSeconds,
    },
  ];

  const payload = {
    city: searchText,
    country: "Bangladesh",
    timezone: "Asia",
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="space-y-4 md:container">
        <PrayerInfoPanel geolocation={payload} timings={data} />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {prayers.map((prayer) => (
            <PrayerCard key={prayer.name} {...prayer} />
          ))}
        </div>
      </section>
    </Suspense>
  );
}
