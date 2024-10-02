"use client"

import styles from "./page.module.css"
import { Button, Stack, Switch, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import CustomModal from "./components/Modal/modal"
import Navbar from "../components/Navbar/navbar"

export default function Part1() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [checked, setChecked] = useState(false)

    useEffect(() => {
        document.body.style.backgroundColor = checked ? "#D3D3D3" : "#FFFFFF"
    }, [checked])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    const handleToggle = () => {
        setChecked(!checked)
    }

    return (
        <div className={styles.page}>
            <Navbar />
            <main className={styles.main}>
                <Typography variant="h4" fontWeight={600} align="center">
                    Welcome
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                    Change the mood
                </Typography>
                <Typography sx={{ color: "#5C5E89" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mi eu massa imperdiet aliquam.
                </Typography>

                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Typography>Light</Typography>
                    <Switch checked={checked} onChange={handleChange} />
                    <Typography>Dark</Typography>
                </Stack>

                <Button onClick={handleOpen} variant="contained" color="secondary">
                    Open Modal
                </Button>
                <div className={styles.links}>
                    <a className={styles.primary} href="/part2">
                        Continue to Part 2
                    </a>
                </div>
            </main>

            <CustomModal open={open} handleClose={handleClose} handleSwitchChange={handleToggle} currentChecked={checked} />
        </div>
    )
}
