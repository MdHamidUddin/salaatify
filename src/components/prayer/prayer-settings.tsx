"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface PrayerSettingsProps {
  onMadhabChange: (madhab: "Shafi" | "Hanafi") => void;
  onMethodChange: (_method: number) => void;
  currentMadhab: "Shafi" | "Hanafi";
  currentMethod: number;
}

export const PrayerSettings = ({
  onMadhabChange,
  onMethodChange: _onMethodChange,
  currentMadhab,
  currentMethod: _currentMethod,
}: PrayerSettingsProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mb-4">
      <CardHeader className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <CardTitle className="flex items-center justify-between text-lg">
          {t("prayerSettings.title")}
          <span className="text-sm text-gray-500">{isOpen ? "▲" : "▼"}</span>
        </CardTitle>
      </CardHeader>
      {isOpen && (
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="madhab">{t("prayerSettings.madhab")}</Label>
            <Select
              value={currentMadhab}
              onValueChange={(value: "Shafi" | "Hanafi") =>
                onMadhabChange(value)
              }
            >
              <SelectTrigger id="madhab">
                <SelectValue placeholder={t("prayerSettings.selectMadhab")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Shafi">Shafi (شافعی)</SelectItem>
                <SelectItem value="Hanafi">Hanafi (حنفی)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="method">
              {t("prayerSettings.calculationMethod")}
            </Label>
            <Select
              value={currentMethod.toString()}
              onValueChange={(value) => onMethodChange(parseInt(value))}
            >
              <SelectTrigger id="method">
                <SelectValue placeholder={t("prayerSettings.selectMethod")} />
              </SelectTrigger>
              <SelectContent>
                {calculationMethods.map((method) => (
                  <SelectItem key={method.id} value={method.id.toString()}>
                    {method.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
        </CardContent>
      )}
    </Card>
  );
};
