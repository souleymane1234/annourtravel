const apiOrigin = process.env.NEXT_PUBLIC_API_URL || 'https://api.annour-travel.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  images: {
    unoptimized: true, //will change to false later
  },
  async rewrites() {
    return [
      {
        source: '/backend-api/:path*',
        destination: `${apiOrigin}/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
