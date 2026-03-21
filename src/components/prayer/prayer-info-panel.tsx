"use client";

import type { PrayerInfoPanelProps } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { CurrentTime } from "../prayer/current-time";
import { useTranslation } from "react-i18next";

const PrayerInfoPanel = ({
  geolocation,
  timings,
  qibla,
}: PrayerInfoPanelProps) => {
  const { t } = useTranslation();

  return (
    <Card className="space-y-4" suppressHydrationWarning>
      <CardHeader className="flex items-center justify-between md:flex-row">
        <CardTitle className="capitalize">
          {t("prayerTimesHeader", { city: geolocation.city })}
        </CardTitle>{" "}
        <div className="my-8 grid place-content-center">
          <CurrentTime />
        </div>
        <CardDescription>{timings.date.readable}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="font-bold">{t("timezone")}: </span>
            {geolocation.timezone}
          </div>
          <div>
            <span className="font-bold">{t("location")}: </span>
            {`${geolocation.country}, ${geolocation.city}`}
          </div>
          <div>
            <span className="font-bold">{t("coordinates")}: </span>
            {geolocation.latitude.toFixed(4)}°,{" "}
            {geolocation.longitude.toFixed(4)}°
          </div>
          <div>
            <span className="font-bold">{t("hijriDate")}: </span>
            {timings.date.hijri.date} {timings.date.hijri.month.en}{" "}
            {timings.date.hijri.year}
          </div>
          <div>
            <span className="font-bold">{t("madhab")}: </span>
            {timings.meta.madhab === "Hanafi"
              ? "Hanafi (حنفی)"
              : "Shafi (شافعی)"}
          </div>
          {qibla && (
            <div>
              <span className="font-bold">{t("qibla")}: </span>
              {qibla.direction.toFixed(1)}° {t("fromNorth")}
              <span className="ml-1 text-xs text-gray-500">
                ({qibla.distance.toFixed(0)} km)
              </span>
            </div>
          )}
        </div>

        {/* Prohibited Times Warning */}
        {timings.prohibited_times && (
          <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
            <p className="mb-2 text-sm font-semibold text-yellow-800">
              ⚠️ {t("prohibitedTimes.title")}
            </p>
            <div className="grid grid-cols-1 gap-2 text-xs text-yellow-700 md:grid-cols-3">
              <div>
                {t("prohibitedTimes.sunrise")}:{" "}
                {timings.prohibited_times.sunrise.start} -{" "}
                {timings.prohibited_times.sunrise.end}
              </div>
              <div>
                {t("prohibitedTimes.noon")}:{" "}
                {timings.prohibited_times.noon.start} -{" "}
                {timings.prohibited_times.noon.end}
              </div>
              <div>
                {t("prohibitedTimes.sunset")}:{" "}
                {timings.prohibited_times.sunset.start} -{" "}
                {timings.prohibited_times.sunset.end}
              </div>
            </div>
          </div>
        )}

        {/* <div className="my-8 grid place-content-center">
          <CurrentTime />
        </div> */}
      </CardContent>
    </Card>
  );
};

export default PrayerInfoPanel;
