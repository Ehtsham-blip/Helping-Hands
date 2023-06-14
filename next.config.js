/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ipfs.infura.io',
      'th.bing.com',
      'helpinghandscrowdfunding.infura-ipfs.io',
      'crowdfunding.infura-ipfs.io', // Add the hostname here
    ],
  },
};

module.exports = nextConfig;

