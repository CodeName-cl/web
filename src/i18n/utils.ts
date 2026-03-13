import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getLocaleFromPostId(id: string): { locale: Lang; slug: string } {
  if (id.startsWith("en/")) return { locale: "en", slug: id.slice(3) };
  if (id.startsWith("es/")) return { locale: "es", slug: id.slice(3) };
  return { locale: defaultLang, slug: id };
}

export function getDateLocale(lang: Lang): string {
  return lang === "en" ? "en-US" : "es-CL";
}
