const API_KEY =
  process.env.NEXT_PUBLIC_ISLAMIC_API_KEY ||
  "mh6IR67lg6rjQhGy80HScTCBaf7DrRaWTFdLk40THGv0w8st";
const BASE_URL = "https://islamicapi.com/api/v1/prayer-time";

interface PrayerParams {
  latitude: number;
  longitude: number;
  method?: number;
  madhab?: "Shafi" | "Hanafi";
}

export const getTimingsByCoordinates = async ({
  latitude,
  longitude,
  method = 2,
  madhab = "Hanafi",
}: PrayerParams) => {
  try {
    // school=0 for Hanafi, school=1 for Shafi
    const school = madhab === "Hanafi" ? 0 : 1;

    const url = `${BASE_URL}/?lat=${latitude}&lon=${longitude}&method=${method}&school=${school}&api_key=${API_KEY}`;

    const response = await fetch(url);
    const result: IslamicAPIPrayerResponse = await response.json();

    if (result.code === 200 && result.data) {
      const { times, date, qibla, prohibited_times, timezone } = result.data;

      return {
        timings: {
          Fajr: times.Fajr,
          Sunrise: times.Sunrise,
          Dhuhr: times.Dhuhr,
          Asr: times.Asr,
          Maghrib: times.Maghrib,
          Isha: times.Isha,
          Imsak: times.Imsak,
          Midnight: times.Midnight,
        },
        date: {
          readable: date.readable,
          timestamp: date.timestamp,
          hijri: {
            date: date.hijri.date,
            month: {
              number: date.hijri.month.number,
              en: date.hijri.month.en,
              ar: date.hijri.month.ar,
            },
            year: date.hijri.year,
            weekday: {
              en: date.hijri.weekday.en,
              ar: date.hijri.weekday.ar,
            },
          },
          gregorian: {
            date: date.gregorian.date,
            weekday: {
              en: date.gregorian.weekday.en,
            },
            month: {
              number: date.gregorian.month.number,
              en: date.gregorian.month.en,
            },
            year: date.gregorian.year,
          },
        },
        meta: {
          latitude,
          longitude,
          timezone: timezone.name,
          method: {
            id: method,
            name: getMethodName(method),
          },
          madhab,
        },
        qibla: {
          direction: qibla.direction.degrees,
          distance: qibla.distance.value,
        },
        prohibited_times,
      };
    }
    throw new Error("Failed to fetch prayer times");
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    throw error;
  }
};

export const getTimingsByCity = async ({
  city,
  country,
  method = 2,
  madhab = "Hanafi",
}: {
  city: string;
  country: string;
  method?: number;
  madhab?: "Shafi" | "Hanafi";
}) => {
  try {
    const school = madhab === "Hanafi" ? 0 : 1;

    const url = `${BASE_URL}/?city=${encodeURIComponent(
      city,
    )}&country=${encodeURIComponent(
      country,
    )}&method=${method}&school=${school}&api_key=${API_KEY}`;

    const response = await fetch(url);
    const result: IslamicAPIPrayerResponse = await response.json();

    if (result.code === 200 && result.data) {
      const { times, date, qibla, prohibited_times, timezone } = result.data;

      return {
        timings: {
          Fajr: times.Fajr,
          Sunrise: times.Sunrise,
          Dhuhr: times.Dhuhr,
          Asr: times.Asr,
          Maghrib: times.Maghrib,
          Isha: times.Isha,
          Imsak: times.Imsak,
          Midnight: times.Midnight,
        },
        date: {
          readable: date.readable,
          timestamp: date.timestamp,
          hijri: {
            date: date.hijri.date,
            month: {
              number: date.hijri.month.number,
              en: date.hijri.month.en,
              ar: date.hijri.month.ar,
            },
            year: date.hijri.year,
            weekday: {
              en: date.hijri.weekday.en,
              ar: date.hijri.weekday.ar,
            },
          },
          gregorian: {
            date: date.gregorian.date,
            weekday: {
              en: date.gregorian.weekday.en,
            },
            month: {
              number: date.gregorian.month.number,
              en: date.gregorian.month.en,
            },
            year: date.gregorian.year,
          },
        },
        meta: {
          latitude: 0,
          longitude: 0,
          timezone: timezone.name,
          method: {
            id: method,
            name: getMethodName(method),
          },
          madhab,
        },
        qibla: {
          direction: qibla.direction.degrees,
          distance: qibla.distance.value,
        },
        prohibited_times,
      };
    }
    throw new Error("Failed to fetch prayer times");
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    throw error;
  }
};

const getMethodName = (methodId: number): string => {
  const methods: Record<number, string> = {
    0: "Shia Ithna-Ashari",
    1: "University of Islamic Sciences, Karachi",
    2: "Islamic Society of North America (ISNA)",
    3: "Muslim World League (MWL)",
    4: "Umm Al-Qura University, Makkah",
    5: "Egyptian General Authority of Survey",
    7: "Institute of Geophysics, University of Tehran",
    8: "Gulf Region",
    9: "Kuwait",
    10: "Qatar",
    11: "Majlis Ugama Islam Singapura, Singapore",
    12: "Union Organization islamic de France",
    13: "Diyanet İşleri Başkanlığı, Turkey",
    14: "Spiritual Administration of Muslims of Russia",
  };
  return methods[methodId] || "Unknown Method";
};

// Import the type
import type { IslamicAPIPrayerResponse } from "@/types";
