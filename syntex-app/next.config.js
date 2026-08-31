/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable the experimental app directory (if using Next 13+)
  experimental: {
    appDir: true,
  },

  // Sentry configuration - replace placeholders with actual values
  sentry: {
    organization: 'your-organization',
    project: 'your-project-name',
    // The DSN is stored as a secret in GitHub; inject via environment variable
    authToken: process.env.SENTRY_DSN,
  },
};

module.exports = nextConfig;