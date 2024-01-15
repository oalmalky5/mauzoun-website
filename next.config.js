module.exports = {
  i18n: {
    locales: ["en-US", "ar"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["i.imgur.com", "writingandwellness.com"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/story',
        permanent: true, // set to false if you want the redirect to be temporary
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configure the fallback for the 'fs' module when running in the browser
      config.resolve.fallback = { fs: false };
    }

    return config;
  },
};
