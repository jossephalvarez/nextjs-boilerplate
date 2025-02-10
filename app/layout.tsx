// app/layout.tsx
import React, {Suspense} from 'react';
import {Inter} from 'next/font/google';
import '../styles/globals.css';  // Importamos el archivo CSS global

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
        </body>
        </html>
    );
}
