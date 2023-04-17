import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText} from "@mui/material"
import { useState } from "react"
const MuiDialog = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Button onClick={()=> setOpen(true)}>
            Open dialog
        </Button>
        <Dialog aria-labelledby="dialog-title" 
        aria-describedby="dialog-description"
        open={open}
        onClose={()=> setOpen(false)}
        >
            <DialogTitle id='dialog-title'>Submit the test ?</DialogTitle>
            <DialogContent >
                <DialogContentText id="dialog-description">
                    Are you sure want to submit the test? you willl not be able to edit after submitting
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> setOpen(true)}>Cancel</Button>
                <Button autoFocus onClick={()=> setOpen(false)}>submit</Button >
            </DialogActions>
        </Dialog>
    </>
  )
}

export default MuiDialog