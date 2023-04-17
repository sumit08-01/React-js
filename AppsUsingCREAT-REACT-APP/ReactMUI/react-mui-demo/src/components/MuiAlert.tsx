import { Alert,AlertTitle, Button } from "@mui/material"
import { Stack } from "@mui/system"
import CheckIcon from '@mui/icons-material/Check'

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity="error">this is an error alert</Alert>
        <Alert severity="warning">this is an error warning alert</Alert>
        <Alert severity="info">this is an error info alert</Alert>
        <Alert severity="success">this is an error success alert</Alert>


        <Alert variant='outlined' severity="error">this is an error alert</Alert>
        <Alert variant='outlined' severity="warning">this is an error warning alert</Alert>
        <Alert variant='outlined' severity="info">this is an error info alert</Alert>
        <Alert variant='outlined' severity="success">this is an error success alert</Alert>
        
        <Alert variant="filled" severity="error">this is an error alert</Alert>
        <Alert variant="filled" severity="warning">this is an error warning alert</Alert>
        <Alert variant="filled" severity="info">this is an error info alert</Alert>
        <Alert variant="filled" severity="success">this is an error success alert</Alert>

       
        <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
            this is an error alert</Alert>
        
        <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
            this is an error warning alert</Alert>
        
        <Alert variant="filled" severity="info" 
         action={<Button color="inherit" size="small">
            Undo
        </Button>}
        >
        <AlertTitle>Info</AlertTitle>
            this is an error info alert</Alert>
       
        <Alert variant="filled" severity="success" icon={<CheckIcon/>} 
        onClose={()=>alert("close alert")} >
        <AlertTitle>success</AlertTitle>
            this is an error success alert</Alert>
    </Stack>
  )
}

export default MuiAlert