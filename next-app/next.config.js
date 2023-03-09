const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");

/** @type {import('next').NextConfig} */
const nextConfig = withExpo(
  withFonts({
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: [
      "react-native",
      "expo",
      "@expo/vector-icons",
      // Add more React Native / Expo packages here...
    ],
    experimental: {
      forceSwcTransforms: true,
    },
  })
);

module.exports = nextConfig;
