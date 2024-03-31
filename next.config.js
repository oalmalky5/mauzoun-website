module.exports = {
  i18n: {
    locales: ['en-US', 'ar'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['i.imgur.com', 'writingandwellness.com'],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // Configure fallback for 'fs' module in the browser
    }
    return config;
  },
  output: 'standalone', // Add this line for Next.js 12+ or 'export' for static HTML export
};
