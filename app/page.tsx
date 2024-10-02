import Image from "next/image"
import styles from "./page.module.css"
import { Typography } from "@mui/material"

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image className={styles.logo} src="/cake_logo.png" alt="Cake logo" width={180} height={38} priority />
                <Typography>Code challenge by Ignacio Domingo</Typography>
                <div className={styles.links}>
                    <a className={styles.primary} href="/part1">
                        Part 1
                    </a>
                    <a className={styles.secondary} href="/part2">
                        Part 2
                    </a>
                </div>
            </main>
        </div>
    )
}
