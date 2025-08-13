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
    <>
      <Card>
        <CardHeader>
          <CardTitle  dir={i18n.language === 'bn' ? 'ltl' : 'ltr'}>{data.name}</CardTitle>
          <CardDescription>{data.time}</CardDescription>
        </CardHeader>
        <CardContent className="grid place-content-center">
          <PrayerIcon className="h-8 w-8 text-primary" />
        </CardContent>
        <CardFooter>
          {countdown !== null && (
            <Badge>
              <span>{countdown} minutes</span>
            </Badge>
          )}
           {data.isNext && (
            <Badge>
              {/* This line is already correctly dynamic! */}
              <span>{t('nextPrayer', { prayerName: data.name })}</span>
            </Badge>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default PrayerCard;
