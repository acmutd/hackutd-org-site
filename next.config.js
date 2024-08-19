/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // allows hot reload for styled components to work correctly
  compiler: {
    styledComponents: true,
  },
  // allows for browser language detection
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // redirects
  async redirects() {
    return [
      {
        source: "/register",
        destination: "https://ripple.hackutd.co/register",
        permanent: false,
        basePath: false,
      },
      {
        source: "/registration",
        destination: "https://ripple.hackutd.co/register",
        permanent: false,
        basePath: false,
      },
      {
        source: "/apply",
        destination: "https://acmutd.typeform.com/to/K1IyS4Gj",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
