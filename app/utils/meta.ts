// https://remix.run/docs/en/main/route/meta
import { configMeta } from "~/configs";

import type { V2_MetaDescriptor } from "@remix-run/node";

export function createMetaData({
  description = configMeta?.defaultDescription,
  locale = configMeta?.locale,
  name = configMeta?.defaultName,
  ogImageAlt = configMeta?.ogImageAlt,
  ogImagePath = configMeta?.ogImagePath,
  ogImageType = configMeta?.ogImageType,
  ogType = configMeta?.ogType,
  canonicalPath = "/",
  themeColor = configMeta?.color,
  title = configMeta?.defaultTitle,
  url = configMeta?.url,
}: {
  description?: string;
  locale?: string;
  name?: string;
  ogImageAlt?: string;
  ogImagePath?: string;
  ogImageType?: string;
  ogType?: string;
  canonicalPath?: string;
  themeColor?: string;
  title?: string;
  url?: string;
} = configMeta): V2_MetaDescriptor[] {
  return [
    {
      title:
        title &&
        `${title} ${configMeta?.defaultTitleSeparator} ${configMeta?.defaultName}`,
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "application-name",
      content: name,
    },
    {
      name: "apple-mobile-web-app-title",
      content: name,
    },
    {
      name: "theme-color",
      content: themeColor,
    },
    {
      name: "msapplication-TileColor",
      content: themeColor,
    },
    {
      name: "msapplication-config",
      content: `${configMeta?.url}/browserconfig.xml`,
    },
    {
      property: "og:site_name",
      content: name,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:url",
      content: canonicalPath ? `${configMeta?.url}${canonicalPath}` : url,
    },
    {
      property: "og:type",
      content: ogType,
    },
    {
      property: "og:locale",
      content: locale,
    },
    {
      property: "og:image:alt",
      content: ogImageAlt,
    },
    {
      property: "og:image:type",
      content: ogImageType,
    },
    {
      property: "og:image",
      content: ogImagePath
        ? `${configMeta?.url}${ogImagePath}`
        : `${configMeta?.url}${configMeta?.ogImagePath}`,
    },
    {
      tagName: "link",
      rel: "canonical",
      href: canonicalPath ? `${configMeta?.url}${canonicalPath}` : url,
    },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Rewinds",
      },
    },
  ];
}
