"use client"

import { IconButton, Stack, Typography } from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { useRef } from "react"
import styles from "./page.module.css"
import { courses } from "./mocks/mockData"
import CourseThumbnail from "./components/courseThumbnail"
import Link from "next/link"
import Navbar from "../components/Navbar/navbar"

export default function Part2() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: "smooth"
            })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: "smooth"
            })
        }
    }
    return (
        <div className={styles.page}>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <Typography fontWeight={600}>Learning</Typography>
                        <Stack
                            direction="row"
                            sx={{
                                alignItems: "center",
                                "@media (max-width: 362px)": {
                                    visibility: "hidden"
                                }
                            }}
                            gap={2}
                        >
                            <Typography>See all</Typography>
                            <IconButton
                                aria-label="previous"
                                onClick={scrollLeft}
                                sx={{
                                    width: "28px",
                                    height: "28px",
                                    outline: "1px solid #16164029",
                                    color: "#18161A"
                                }}
                            >
                                <ArrowBackIosNewIcon sx={{ height: "16px" }} />
                            </IconButton>
                            <IconButton
                                aria-label="next"
                                sx={{
                                    width: "28px",
                                    height: "28px",
                                    outline: "1px solid #16164029",
                                    color: "#18161A"
                                }}
                                color="primary"
                                onClick={scrollRight}
                            >
                                <ArrowForwardIosIcon sx={{ height: "16px" }} />
                            </IconButton>
                        </Stack>
                    </div>
                    <div className={styles.sectionBody} ref={scrollContainerRef}>
                        <Stack
                            direction="row"
                            spacing="12px"
                            sx={{
                                width: "max-content",
                                overflowX: "visible",
                                scrollBehavior: "smooth"
                            }}
                        >
                            {courses.map((course, i) => (
                                <CourseThumbnail key={i} title={course.title} type={course.type} />
                            ))}
                        </Stack>
                    </div>
                </div>
                <div className={styles.links}>
                    <Link className={styles.primary} href="/">
                        Home
                    </Link>
                </div>
            </main>
        </div>
    )
}
