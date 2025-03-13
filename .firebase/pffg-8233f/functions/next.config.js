"use strict";

// next.config.js
var path = require("path");
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["firebasestorage.googleapis.com", "www.gscore.eu"]
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/media/",
            publicPath: "/_next/static/media/",
            name: "[name].[ext]"
          }
        }
      ]
    });
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  }
};
