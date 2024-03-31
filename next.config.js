module.exports = {
  i18n: {
    locales: ['en-US', 'ar'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['i.imgur.com', 'writingandwellness.com'],
  },
  target: 'serverless',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/story',
        permanent: true, // set to false if you want the redirect to be temporary
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // Configure fallback for 'fs' module in the browser
    }
    return config;
  },
  output: 'standalone', // Add this line for Next.js 12+ or 'export' for static HTML export
};
