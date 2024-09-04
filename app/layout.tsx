import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

import { cn } from '@/lib/utils';

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
					'min-h-screen bg-dark-300 font-sans antialiased',
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
