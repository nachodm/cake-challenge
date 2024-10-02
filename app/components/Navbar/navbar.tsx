"use client"

import Image from "next/image"
import { AppBar, Container, Toolbar } from "@mui/material"
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: "transparent", boxShadow: "none", height: 41, top: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: "center" }}>
                    <Image className={styles.logo} src="/cake_logo.png" alt="Cake logo" width={60} height={16.28} priority />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
