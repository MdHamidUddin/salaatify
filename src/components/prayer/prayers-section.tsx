"use client";

import { getTimingsByCoordinates } from "@/lib/get-prayer-times";
import PrayerCard from "./prayer-card";
import type { PrayerCardProps, TimezoneProps, PrayerSettings } from "@/types";
import PrayerInfoPanel from "./prayer-info-panel";
import { PrayerSettings as SettingsPanel } from "./prayer-settings";
import { PrayerMap } from "./prayer-map";
import { Suspense, useEffect, useState, useCallback } from "react";
import { toast } from "../ui/use-toast";
import { Loader } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "@/hooks/use-location";

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
  const [settings, setSettings] = useState<PrayerSettings>({
    madhab: "Hanafi",
    method: 2,
    autoLocation: true,
  });
  const { t } = useTranslation();
  const location = useLocation();

  const createTimeInSeconds = useCallback((timeString?: string) => {
    if (!timeString) return 0;
    const time = new Date(`${new Date().toDateString()} ${timeString}`);
    return time.getTime();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const prayerData = await getTimingsByCoordinates({
        latitude: location.latitude,
        longitude: location.longitude,
        method: settings.method,
        madhab: settings.madhab,
      });

      if (prayerData) {
        setData(prayerData);
        setClicked(false);
      }
    } catch (error) {
      console.error("Error fetching prayer data:", error);
      toast({
        variant: "destructive",
        title: t("error"),
        description: t("prayerErrors.loadFailed"),
      });
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [
    location.latitude,
    location.longitude,
    settings.method,
    settings.madhab,
    setClicked,
    t,
  ]);

  // Initial fetch when component mounts or settings change
  useEffect(() => {
    if (!location.loading) {
      void fetchData();
    }
  }, [location.loading, fetchData]);

  // Fetch when search is clicked
  useEffect(() => {
    if (clicked) {
      void fetchData();
    }
  }, [clicked, fetchData]);

  const handleMadhabChange = (madhab: "Shafi" | "Hanafi") => {
    setSettings((prev) => ({ ...prev, madhab }));
    toast({
      title: t("prayerSettings.updated"),
      description: t("prayerSettings.madhabChanged", { madhab }),
    });
  };

  const handleMethodChange = (method: number) => {
    setSettings((prev) => ({ ...prev, method }));
    toast({
      title: t("prayerSettings.updated"),
      description: t("prayerSettings.methodChanged"),
    });
  };

  // Loading state
  if (location.loading || isLoading) {
    return (
      <section className="container grid min-h-[200px] place-content-center space-y-4">
        <p className="flex items-center text-lg font-medium text-gray-700">
          <span>{t("loadingPrayerTimes")}</span>{" "}
          <Loader className="mx-4 h-5 w-5 animate-spin text-blue-600" />
        </p>
      </section>
    );
  }

  // Error state
  if (isError || !data) {
    return (
      <section className="container grid min-h-[200px] place-content-center space-y-4">
        <div className="text-center">
          <p className="mb-2 text-red-500">{t("prayerErrors.loadFailed")}</p>
          <button
            onClick={() => void fetchData()}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            {t("retry")}
          </button>
        </div>
      </section>
    );
  }

  // Calculate prayer times in seconds
  const fajrTimeInSeconds = createTimeInSeconds(data.timings?.Fajr);
  const sunriseTimeInSeconds = createTimeInSeconds(data.timings?.Sunrise);
  const dhuhrTimeInSeconds = createTimeInSeconds(data.timings?.Dhuhr);
  const asrTimeInSeconds = createTimeInSeconds(data.timings?.Asr);
  const maghribTimeInSeconds = createTimeInSeconds(data.timings?.Maghrib);
  const ishaTimeInSeconds = createTimeInSeconds(data.timings?.Isha);
  const currentTimeInSeconds = new Date().getTime();

  // Get current and next prayer indices
  let currentPrayerIndex = -1;
  let nextPrayerIndex = -1;

  const prayerTimes = [
    { name: "Fajr", time: fajrTimeInSeconds, end: sunriseTimeInSeconds },
    { name: "Sunrise", time: sunriseTimeInSeconds, end: dhuhrTimeInSeconds },
    { name: "Dhuhr", time: dhuhrTimeInSeconds, end: asrTimeInSeconds },
    { name: "Asr", time: asrTimeInSeconds, end: maghribTimeInSeconds },
    { name: "Maghrib", time: maghribTimeInSeconds, end: ishaTimeInSeconds },
    {
      name: "Isha",
      time: ishaTimeInSeconds,
      end: fajrTimeInSeconds + 24 * 60 * 60 * 1000,
    },
  ];

  for (let i = 0; i < prayerTimes.length; i++) {
    const prayer = prayerTimes[i];

    if (
      prayer &&
      currentTimeInSeconds >= prayer?.time &&
      currentTimeInSeconds < prayer?.end
    ) {
      currentPrayerIndex = i;
      nextPrayerIndex = (i + 1) % prayerTimes.length;
      break;
    }
  }

  // Build prayers array with time ranges
  const prayers: PrayerCardProps[] = [
    {
      time: data.timings.Fajr,
      icon: "fajr",
      name: t("prayerNames.fajr"),
      isCurrent: currentPrayerIndex === 0,
      isNext: nextPrayerIndex === 0,
      timeRange: {
        start: data.timings.Fajr,
        end: data.timings.Sunrise,
      },
    },
    {
      time: data.timings.Sunrise,
      icon: "sunrise",
      name: t("prayerNames.sunrise"),
      isCurrent: currentPrayerIndex === 1,
      isNext: nextPrayerIndex === 1,
      timeRange: {
        start: data.timings.Sunrise,
        end: data.timings.Dhuhr,
      },
    },
    {
      time: data.timings.Dhuhr,
      icon: "dhuhr",
      name: t("prayerNames.dhuhr"),
      isCurrent: currentPrayerIndex === 2,
      isNext: nextPrayerIndex === 2,
      timeRange: {
        start: data.timings.Dhuhr,
        end: data.timings.Asr,
      },
    },
    {
      time: data.timings.Asr,
      icon: "asr",
      name: t("prayerNames.asr"),
      isCurrent: currentPrayerIndex === 3,
      isNext: nextPrayerIndex === 3,
      timeRange: {
        start: data.timings.Asr,
        end: data.timings.Maghrib,
      },
    },
    {
      time: data.timings.Maghrib,
      icon: "maghrib",
      name: t("prayerNames.maghrib"),
      isCurrent: currentPrayerIndex === 4,
      isNext: nextPrayerIndex === 4,
      timeRange: {
        start: data.timings.Maghrib,
        end: data.timings.Isha,
      },
    },
    {
      time: data.timings.Isha,
      icon: "isha",
      name: t("prayerNames.isha"),
      isCurrent: currentPrayerIndex === 5,
      isNext: nextPrayerIndex === 5,
      timeRange: {
        start: data.timings.Isha,
        end: data.timings.Fajr,
      },
    },
  ];

  const payload = {
    city: location.city || searchText || "Rajshahi",
    country: location.country || "Bangladesh",
    timezone: data.meta.timezone || "Asia/Dhaka",
    latitude: location.latitude,
    longitude: location.longitude,
  };

  return (
    <Suspense fallback={<div>{t("loading")}</div>}>
      <section className="space-y-4 pb-8 md:container">
        {/* Settings Panel */}
        <SettingsPanel
          onMadhabChange={handleMadhabChange}
          onMethodChange={handleMethodChange}
          currentMadhab={settings.madhab}
          currentMethod={settings.method}
        />

        {/* Prayer Info Panel with Qibla */}
        <PrayerInfoPanel
          geolocation={payload}
          timings={data}
          qibla={data.qibla}
        />

        {/* Prayer Cards Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {prayers.map((prayer, index) => (
            <PrayerCard key={`${prayer.name}-${index}`} {...prayer} />
          ))}
        </div>

        {/* Map */}
        <PrayerMap
          latitude={location.latitude}
          longitude={location.longitude}
          locationName={location.city || searchText || "Current Location"}
          zoom={13}
        />
      </section>
    </Suspense>
  );
}
