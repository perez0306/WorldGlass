/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/img/works/[name].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
