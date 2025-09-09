import React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@dyslexia-first/ui-dyslexia";
import "./globals.css";

// Using system font stack for better accessibility and performance
const fontClass = "font-sans";

export const metadata: Metadata = {
    title: "Dyslexia-First Web App",
    description: "A modern web application built with accessibility in mind",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${fontClass} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
