/**
 * EDITME: Site Config and Meta Config
 *
 * Site-wide info and meta data, mostly for information and SEO purpose
 */

import { configDev } from "~/configs";

// For general
export const configSite = {
  domain: configDev.isDevelopment ? "localhost:3000" : "gezinshuizendewij.nl",

  slug: "gezinshuizen-de-wij",
  name: "Gezinshuizen de wij",
  title: "Gezinshuizen de wij",
  description: "Gezinshuizen de wij",

  navItems: [
    { to: "/", name: "Home", icon: "home" },
    { to: "/begeleid-wonen", name: "Begeleid wonen", icon: "building" },
    { to: "/wie-zijn-wij", name: "Wie zijn wij", icon: "users" },
    { to: "/fotoboek", name: "Fotoboek", icon: "camera" },
    { to: "/contact", name: "Contact", icon: "contact" },
  ],
};

// For Remix meta function
export const configMeta = {
  defaultName: configSite?.name,
  defaultTitle: configSite?.title,
  defaultTitleSeparator: "—",
  defaultDescription: configSite?.description,

  locale: "en_US",
  url: configDev.isDevelopment
    ? "http://localhost:3000"
    : `https://${configSite?.domain}`,
  canonicalPath: "/",
  color: "#3399cc", // EDITME
  ogType: "website",
  ogImageAlt: configSite?.title,
  ogImageType: "image/png",
  ogImagePath: "/assets/opengraph/rewinds-og.png",
  twitterImagePath: "/assets/opengraph/rewinds-og.png",
  fbAppId: "",
};
