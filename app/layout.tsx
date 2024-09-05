import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Header } from '@/components/Header';

import './globals.css';

import { cn } from '@/lib/utils';
import ReactQueryProvider from '@/providers/TanstackProvider';

const fontSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'UTP Carrito de compra',
	description: 'Un sistema de cuidado de la salud en tiempo real',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-dark-400 font-sans antialiased',
					fontSans.variable
				)}
			>
				<ReactQueryProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<main>
							<Header />
							{children}
						</main>
					</ThemeProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
