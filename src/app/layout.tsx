import Providers from "@/components/layout/Providers";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { JSON_LD, METADATA } from "@/constants/Metadata";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					<main className="overflow-x-hidden overflow-y-scroll scroll-smooth no-scrollbar p-0 m-0">
						<script
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
							type="application/ld+json"
						/>
						{children}
					</main>
					<footer>
						<Footer />
					</footer>
				</Providers>
			</body>
		</html>
	);
}
