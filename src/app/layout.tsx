import type { Metadata } from "next";
import 'bulma/css/bulma.min.css';

export const metadata: Metadata = {
	title: "Translate App",
	description: "A simple translation app using MyMemory API",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}
