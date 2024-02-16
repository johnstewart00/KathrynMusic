/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  }
};

module.exports = {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return "1";
  },
};

