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
		cssChunking: true,
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
			"@/icons": resolve("./app/_icons"),
		};

		return config;
	},
};

export default bundleAnalyzer(nextConfig);
