"use client";

import type { PrayerCardProps } from "@/types";
import { Icons } from "../icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useCountdown } from "@/hooks/use-countdown";
import { format } from "date-fns";
import { Badge } from "../ui/badge";
import { useTranslation } from "react-i18next";

const PrayerCard = (data: PrayerCardProps) => {
  const { t, i18n } = useTranslation();
  const PrayerIcon = Icons[data.icon];
  const prayerTime = new Date(
    `${format(new Date(), "yyyy-MM-dd")} ${data.time}`,
  );

  const countdown = useCountdown(prayerTime);

  return (
    <Card
      className={data.isCurrent ? "border-2 border-blue-500 bg-blue-50" : ""}
    >
      <CardHeader>
        <CardTitle dir={i18n.language === "bn" ? "rtl" : "ltr"}>
          {data.name}
        </CardTitle>
        <CardDescription>{data.time}</CardDescription>
        {data.timeRange && (
          <p className="mt-1 text-xs text-gray-500">
            {t("prayer.timeRange")}: {data.timeRange.start} -{" "}
            {data.timeRange.end}
          </p>
        )}
      </CardHeader>
      <CardContent className="grid place-content-center">
        <PrayerIcon className="h-8 w-8 text-primary" />
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {countdown !== null && data.isNext && (
          <Badge variant="outline" className="w-full justify-center">
            {t("prayer.in")} {countdown} {t("prayer.minutes")}
          </Badge>
        )}
        {data.isCurrent && (
          <Badge className="w-full justify-center bg-green-500 hover:bg-green-600">
            {t("prayer.current")}
          </Badge>
        )}
        {data.isNext && !countdown && (
          <Badge variant="secondary" className="w-full justify-center">
            {t("prayer.next")}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

export default PrayerCard;
