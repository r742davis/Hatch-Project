import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Main } from "@/components";
import "./_styles/globals.css";

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["300", "500", "700"],
	style: ["normal", "italic"],
	variable: "--dm-sans",
});

export const metadata: Metadata = {
	title: "Hatch",
	description: "Hatch into a well-rested you!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={dmSans.className}>
				{/* <Header /> */}
				<Main>{children}</Main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
