"use client";

import { Locale, i18n } from "@/config/i18n.config";

import { defaultLangs } from "./default-dicionaries";

export const getDictionaryUseClient = (locale: Locale) => {
  return defaultLangs[locale] ?? defaultLangs[i18n.defaultLocale as Locale];
};
