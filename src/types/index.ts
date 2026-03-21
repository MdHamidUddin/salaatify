import type { Icons } from "@/components/icons";

export type AllahNamesProps = {
  code: number;
  status: string;
  data: Array<{
    name: string;
    transliteration: string;
    number: number;
    en: {
      meaning: string;
    };
  }>;
};
export type GeolocationProps = {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
};
export interface PrayerTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird?: string;
  Lastthird?: string;
  Sunset?: string;
}

export interface PrayerCardProps {
  name: string;
  time?: string;
  isCurrent: boolean;
  isNext: boolean;
  icon: keyof typeof Icons;
  timeRange?: {
    start: string;
    end: string;
  };
}

export interface PrayerSettings {
  madhab: "Shafi" | "Hanafi";
  method: number;
  autoLocation: boolean;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  countryCode?: string;
  timezone?: string;
  loading: boolean;
  error: string | null;
  permissionGranted: boolean;
}

// New API Response Types
export interface IslamicAPIPrayerResponse {
  code: number;
  status: string;
  data: {
    times: {
      Fajr: string;
      Sunrise: string;
      Dhuhr: string;
      Asr: string;
      Sunset: string;
      Maghrib: string;
      Isha: string;
      Imsak: string;
      Midnight: string;
      Firstthird?: string;
      Lastthird?: string;
    };
    date: {
      readable: string;
      timestamp: string;
      hijri: {
        date: string;
        format: string;
        day: string;
        weekday: {
          en: string;
          ar: string;
        };
        month: {
          number: number;
          en: string;
          ar: string;
          days: number;
        };
        year: string;
        designation: {
          abbreviated: string;
          expanded: string;
        };
        holidays: string[];
        adjustedHolidays: string[];
        method: string;
        shift: number;
      };
      gregorian: {
        date: string;
        format: string;
        day: string;
        weekday: {
          en: string;
        };
        month: {
          number: number;
          en: string;
        };
        year: string;
        designation: {
          abbreviated: string;
          expanded: string;
        };
      };
    };
    qibla: {
      direction: {
        degrees: number;
        from: string;
        clockwise: boolean;
      };
      distance: {
        value: number;
        unit: string;
      };
    };
    prohibited_times: {
      sunrise: {
        start: string;
        end: string;
      };
      noon: {
        start: string;
        end: string;
      };
      sunset: {
        start: string;
        end: string;
      };
    };
    timezone: {
      name: string;
      utc_offset: string;
      abbreviation: string;
    };
  };
}

export type TimezoneProps = {
  timings: PrayerTimings;
  date: {
    readable: string;
    timestamp: string;
    hijri: {
      date: string;
      month: { number: number; en: string; ar: string };
      year: string;
      weekday: { en: string; ar: string };
    };
    gregorian: {
      date: string;
      weekday: { en: string };
      month: { number: number; en: string };
      year: string;
    };
  };
  meta: {
    latitude: number;
    longitude: number;
    timezone: string;
    method: {
      id: number;
      name: string;
    };
    madhab: "Shafi" | "Hanafi";
  };
  qibla?: {
    direction: number;
    distance: number;
  };
  prohibited_times?: {
    sunrise: { start: string; end: string };
    noon: { start: string; end: string };
    sunset: { start: string; end: string };
  };
};

export interface PrayerInfoPanelProps {
  geolocation: {
    city: string;
    country: string;
    timezone: string;
    latitude: number;
    longitude: number;
  };
  timings: TimezoneProps;
  settings?: PrayerSettings;
  qibla?: {
    direction: number;
    distance: number;
  };
}

export interface PrayersSectionProps {
  searchText: string;
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
  settings?: PrayerSettings;
  onSettingsChange?: (settings: PrayerSettings) => void;
}

export interface QiblaProps {
  code: number;
  status: string;
  data: {
    latitude: number;
    longitude: number;
    direction: number;
  };
}
// ... (keep your existing types below)
