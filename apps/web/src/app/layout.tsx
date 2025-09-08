import type { Metadata } from "next";
import { ThemeProvider } from "@social-ai-assistant/ui-dyslexia";
import "./globals.css";

// Using system font stack for better accessibility and performance
const fontClass = "font-sans";

export const metadata: Metadata = {
    title: "Social AI Assistant",
    description: "Dyslexia-first social AI assistant",
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
