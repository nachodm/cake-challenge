import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../src/theme"
import "./globals.css"

const inter = Inter({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter"
})

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <AppRouterCacheProvider options={{ key: "css", prepend: true }}>
                    <ThemeProvider theme={theme}>{children}+ </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
