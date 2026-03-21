"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader, MapPin, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PrayerMapProps {
  latitude: number;
  longitude: number;
  locationName?: string;
  zoom?: number;
}

export const PrayerMap = ({
  latitude,
  longitude,
  locationName,
  zoom = 13,
}: PrayerMapProps) => {
  const { t, i18n } = useTranslation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isBangla = i18n.language === "bn";

  // Generate Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  useEffect(() => {
    const loadMap = async () => {
      try {
        // Dynamically import Leaflet (only on client side)
        const L = await import("leaflet");

        // Fix Leaflet icon issue in Next.js
        delete (
          L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: unknown }
        )._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        });

        if (mapContainer.current && !mapLoaded) {
          // Create map instance
          const map = L.map(mapContainer.current).setView(
            [latitude, longitude],
            zoom,
          );

          // Add OpenStreetMap tiles
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 19,
          }).addTo(map);

          // Create custom marker icon
          const customIcon = L.divIcon({
            className: "custom-prayer-marker",
            html: `<div style="background-color: #3b82f6; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 2px #3b82f6;"></div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7],
          });

          // Add marker
          L.marker([latitude, longitude], {
            icon: customIcon,
          }).addTo(map).bindPopup(`
              <div style="font-family: sans-serif;">
                <b>${locationName ?? t("map.prayerLocation")}</b><br/>
                <small>Lat: ${latitude.toFixed(4)}<br/>Lng: ${longitude.toFixed(
                  4,
                )}</small>
                <br/>
                <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">
                  ${isBangla ? "গুগল ম্যাপে দেখুন" : "View on Google Maps"}
                </a>
              </div>
            `);

          // Optional: Add circle to show area
          L.circle([latitude, longitude], {
            color: "#3b82f6",
            fillColor: "#60a5fa",
            fillOpacity: 0.1,
            radius: 500,
          }).addTo(map);

          setMapLoaded(true);
        }
      } catch (err) {
        console.error("Failed to load map:", err);
        setError(
          t("map.loadError") ??
            "Failed to load map. Please check your connection.",
        );
      }
    };

    if (typeof window !== "undefined") {
      void loadMap();
    }
  }, [
    latitude,
    longitude,
    locationName,
    zoom,
    mapLoaded,
    t,
    isBangla,
    googleMapsUrl,
  ]);

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t("map.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-[400px] items-center justify-center rounded-lg bg-gray-50">
            <p className="text-center text-red-500">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{t("map.title")}</CardTitle>
        <div className="flex gap-2">
          {/* View on Google Maps Button */}
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.open(googleMapsUrl, "_blank")}
          >
            <MapPin className="h-4 w-4" />
            {isBangla ? "গুগল ম্যাপে দেখুন" : "Google Maps"}
          </Button>

          {/* Get Directions Button */}
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.open(googleMapsDirectionsUrl, "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
            {isBangla ? "দিকনির্দেশনা" : "Directions"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div
          ref={mapContainer}
          className="h-[400px] w-full overflow-hidden rounded-lg bg-gray-100"
        >
          {!mapLoaded && (
            <div className="flex h-full items-center justify-center">
              <Loader className="h-8 w-8 animate-spin text-blue-600" />
              <span className="ml-2 text-gray-600">{t("map.loading")}</span>
            </div>
          )}
        </div>

        {/* Location Info with Google Maps Link */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            📍 {t("map.location")}: {latitude.toFixed(4)}°,{" "}
            {longitude.toFixed(4)}°
          </p>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 transition-colors hover:text-blue-800 hover:underline"
          >
            <MapPin className="h-3 w-3" />
            {isBangla ? "বড় মানচিত্রে দেখুন" : "View Larger Map"}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Address Info */}
        {(locationName ?? (latitude && longitude)) && (
          <div className="mt-3 rounded-lg bg-blue-50 p-3">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">
                {isBangla ? "ঠিকানা:" : "Address:"}
              </span>{" "}
              {locationName ?? t("map.prayerLocation")}
              {latitude &&
                longitude &&
                ` (${latitude.toFixed(4)}°, ${longitude.toFixed(4)}°)`}
            </p>
            <Button
              variant="link"
              className="mt-2 h-auto p-0 text-sm text-blue-600"
              onClick={() => window.open(googleMapsDirectionsUrl, "_blank")}
            >
              {isBangla ? "দিকনির্দেশনা পান" : "Get Directions"} →
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
