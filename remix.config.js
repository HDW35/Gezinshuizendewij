// to determine if we're on the local development server
const isDevelopment = process.env.NODE_ENV === "development";

// to show environment condition
if (isDevelopment) {
  console.info({
    message: `⏪ Rewinds is running`,
    NODE_ENV: process.env.NODE_ENV,
  });
}

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  serverBuildPath: "api/index.js",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  serverModuleFormat: "cjs",
  serverDependenciesToBundle:  ['swiper', 'swiper/react', 'swiper/react/swiper-react.js', 'ssr-window','ssr-window/ssr-window.esm.js','dom7'],

  tailwind: true,

  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
