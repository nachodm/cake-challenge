import Image from "next/image"
import { LinearProgress, Typography } from "@mui/material"
import { ICourse } from "../types/types"
import styles from "./../page.module.css"

export default function CourseThumbnail(props: ICourse) {
    const { type, title } = props
    return (
        <div className={styles.thumbnail}>
            <Image height={88} width={88} className={styles.thumbnailPicture} src={"/dummy.jpg"} alt={"Course thumbnail"} />
            <div className={styles.thumbnailBody}>
                <Typography sx={{ color: "#6F7285", fontSize: { xs: "10px", sm: "12px", md: "14px" } }}>{type}</Typography>
                <Typography
                    sx={{
                        color: "#18161A",
                        fontSize: { xs: "10px", sm: "12px", md: "14px" }
                    }}
                >
                    {title}
                </Typography>
                <LinearProgress variant="determinate" value={Math.floor(Math.random() * 100) + 1} sx={{ marginTop: "auto" }} />
            </div>
        </div>
    )
}
