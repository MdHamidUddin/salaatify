"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader } from "lucide-react";
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
  const { t } = useTranslation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        // Dynamically import Leaflet (only on client side)
        const L = await import("leaflet");

        // Dynamically import CSS (only on client side)
        // await import('leaflet/dist/leaflet.css');

        // Fix Leaflet icon issue in Next.js
        delete (L.Icon.Default.prototype as any)._getIconUrl;
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
          const marker = L.marker([latitude, longitude], {
            icon: customIcon,
          }).addTo(map).bindPopup(`
              <div style="font-family: sans-serif;">
                <b>${locationName || t("map.prayerLocation")}</b><br/>
                <small>Lat: ${latitude.toFixed(4)}<br/>Lng: ${longitude.toFixed(
                  4,
                )}</small>
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
          t("map.loadError") ||
            "Failed to load map. Please check your connection.",
        );
      }
    };

    if (typeof window !== "undefined") {
      loadMap();
    }
  }, [latitude, longitude, locationName, zoom, mapLoaded, t]);

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
      <CardHeader>
        <CardTitle>{t("map.title")}</CardTitle>
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
        <p className="mt-2 text-center text-sm text-gray-500">
          📍 {t("map.location")}: {latitude.toFixed(4)}°, {longitude.toFixed(4)}
          °
        </p>
      </CardContent>
    </Card>
  );
};
