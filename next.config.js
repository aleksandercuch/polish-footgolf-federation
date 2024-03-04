/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  /** @type {import('next').NextConfig} */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  webpack: (config, { isServer }) => {
    // Add a rule for video files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/media/",
            publicPath: "/_next/static/media/",
            name: "[name].[ext]",
          },
        },
      ],
    });

    // If you are using a newer version of Next.js (Next.js 12+), you might need to add this for backward compatibility
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};
