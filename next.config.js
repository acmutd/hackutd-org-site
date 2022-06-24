/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // allows hot reload for styled components to work correctly
  compiler: {
    styledComponents: true
  },
  // allows for browser language detection
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig
