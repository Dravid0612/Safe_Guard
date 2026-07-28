import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SafeGuard | Emergency SOS', description: 'Emergency SOS Alert System simulation' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html> }
