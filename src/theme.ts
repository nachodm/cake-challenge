"use client"
import { createTheme, responsiveFontSizes } from "@mui/material/styles"

const theme = responsiveFontSizes(
    createTheme({
        cssVariables: true,
        typography: {
            fontFamily: "var(--font-inter)"
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        textTransform: "none"
                    },
                    // Customize the secondary button
                    containedSecondary: {
                        backgroundColor: "#F1EFFF",
                        color: "#24244F",
                        textTransform: "none",
                        boxShadow: "none",
                        border: "none",
                        "&:hover": {
                            backgroundColor: "#D7D8E4"
                        }
                    }
                }
            },
            MuiLinearProgress: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#16164014"
                    },
                    bar: {
                        backgroundColor: "#8971FF"
                    }
                }
            }
        }
    })
)

export default theme
