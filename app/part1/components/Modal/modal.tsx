"use client"

import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import "./modal.module.css"

type IProps = {
    open: boolean
    handleClose: () => void
    handleSwitchChange: () => void
    currentChecked: boolean
}

export default function CustomModal(props: IProps) {
    const { open, handleClose, handleSwitchChange } = props

    const handleToggleAndClose = () => {
        handleSwitchChange()
        handleClose()
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                sx: {
                    height: "220px",
                    padding: "1.5rem"
                }
            }}
        >
            <DialogTitle id="alert-dialog-title" sx={{ paddingBottom: 0 }}>
                Hello, I am a modal
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">By clicking switch, you will toggle the mood</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button onClick={handleClose} variant="contained" color="secondary">
                    Secondary button
                </Button>
                <Button variant="contained" onClick={handleToggleAndClose} autoFocus>
                    Toggle
                </Button>
            </DialogActions>
        </Dialog>
    )
}
