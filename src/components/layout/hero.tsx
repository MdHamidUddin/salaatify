"use client";
import { useTranslation } from "react-i18next";
import React from "react";

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center pt-0 md:container sm:max-w-xl md:max-w-full lg:pt-16">
      <div className="flex max-w-2xl flex-col items-center md:px-8">
        <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <h2
            dir={i18n.language === "bn" ? "ltr" : "ltr"}
            className="mb-6 max-w-lg text-2xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto"
          >
            {t("home.title")}
          </h2>

          <p
            dir={i18n.language === "bn" ? "ltr" : "ltr"}
            className="text-base text-muted-foreground md:text-lg"
          >
            {t("home.subtitle")}
          </p>
        </div>

        {/* <form
          onSubmit={handleSearchSubmit}
          className="mb-4 flex w-full items-center space-x-4"
        >
          <Input
            placeholder={t("search")}
            required
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button type="submit" onClick={() => setClicked(true)}>
            {t("search")}
          </Button>
        </form> */}

        {/* <p
          dir={i18n.language === "bn" ? "ltr" : "ltr"}
          className="mb-10 max-w-md text-xs text-muted-foreground sm:text-sm md:text-center"
        >
          {t("home.subsubtitle")}
        </p> */}
      </div>
    </div>
  );
};
