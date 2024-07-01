const defaultLocale = "en-US";
const langs = [defaultLocale, "pt-BR"] as const;

const locales = langs as unknown as string[];
export const i18n = { defaultLocale, locales, localeDetection: true };
// export i18n = new i18n.I18n(locales);

export type Locale = (typeof langs)[number];
