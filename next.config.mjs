// @ts-check
import { resolve } from "path";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: {
		buildActivityPosition: "bottom-left",
	},
	distDir: "build",
	experimental: {
		cssChunking: "loose",
	},
	modularizeImports: {
		"@/components": {
			transform: "@/components/{{member}}",
			skipDefaultConversion: true,
		},
	},
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	swcMinify: true,
	webpack: config => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@/components": resolve("./app/_components"),
			"@/styles": resolve("./app/_styles"),
		};

		return config;
	},
};

export default bundleAnalyzer(nextConfig);
