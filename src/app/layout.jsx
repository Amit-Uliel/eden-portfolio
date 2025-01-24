import localFont from 'next/font/local';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import './globals.scss';

const miriamLibre = localFont({
    src: './fonts/MiriamLibre-VariableFont_wght.ttf',
});

export const metadata = {
    title: "Eden's portfolio",
    description:
        "Discover Eden's architecture portfolio, showcasing innovative designs, creative projects, and expertise in tools like SketchUp, AutoCAD, and Revit.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body className={miriamLibre.className}>
                <main>
                    <MantineProvider
                        theme={{ headings: { fontFamily: '' } }}
                        withGlobalStyles
                        withNormalizeCSS
                    >
                        {children}
                    </MantineProvider>
                </main>
            </body>
        </html>
    );
}
