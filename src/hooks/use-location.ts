import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

interface Location {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  error: string | null;
  loading: boolean;
}

export const useLocation = () => {
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
    city: "Rajshahi",
    country: "Bangladesh",
    error: null,
    loading: true,
  });

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setLocation((prev) => ({
          ...prev,
          error: "Geolocation is not supported by your browser",
          loading: false,
        }));
        toast({
          variant: "destructive",
          title: "Location Error",
          description:
            "Geolocation is not supported by your browser. Using default location.",
        });
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            // Reverse geocoding to get city and country
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
            );
            const data = await response.json();

            setLocation({
              latitude,
              longitude,
              city: data.city || data.locality || "Unknown",
              country: data.countryName || "Bangladesh",
              error: null,
              loading: false,
            });
          } catch (error) {
            setLocation((prev) => ({
              ...prev,
              latitude,
              longitude,
              loading: false,
            }));
            toast({
              variant: "default",
              title: "Location Detected",
              description: "Using coordinates for prayer times.",
            });
          }
        },
        (error) => {
          let errorMessage = "Unable to retrieve your location";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage =
                "Location permission denied. Using default location.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage =
                "Location information unavailable. Using default location.";
              break;
            case error.TIMEOUT:
              errorMessage =
                "Location request timed out. Using default location.";
              break;
          }

          setLocation((prev) => ({
            ...prev,
            error: errorMessage,
            loading: false,
          }));

          toast({
            variant: "destructive",
            title: "Location Error",
            description: errorMessage,
          });
        },
      );
    };

    getLocation();
  }, []);

  return location;
};
