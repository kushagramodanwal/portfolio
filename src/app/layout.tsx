import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kushagra Modanwal",
	description: `I'm Kushagra Modanwal, a software engineer who loves to build things for the web. I specialize in building high-quality websites and applications with a focus on performance and user experience.`,
	creator: "Kushagra Modanwal",
	openGraph: {
    title: 'Kushagra Modanwal',
    description: 'I\'m Kushagra Modanwal, a software engineer who loves to build things for the web. I specialize in building high-quality websites and applications with a focus on performance and user experience.',
    url: 'https://kushagra-modanwal.vercel.app/',
	siteName: 'Kushagra Modanwal | Portfolio',
    images: [
      {
        url: 'file:///Users/kushagramodanwal/Desktop/Screenshot%202025-08-09%20at%2011.46.36%E2%80%AFPM.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Kushagra Modanwal portfolio website image',
      },
    ],
    locale: 'en_US',
    type: 'website',
	},
	twitter: {
    title: 'Kushagra Modanwal',
    description: 'I\'m Kushagra Modanwal, a software engineer who loves to build things for the web. I specialize in building high-quality websites and applications with a focus on performance and user experience.',
    creator: '@kushaark',
    images: [''], // Must be an absolute URL
	},
	category: "Portfolio",
	
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/gif" />
				<meta
					name="google-site-verification"
					content="T1wRFIfvEePSaYspISPTOf8EeR05JF2XjtRT7ilL-DQ"
				/>
			</head>
			<body className={`${poppins.className} bg-primary dark:bg-dark-primary`}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
