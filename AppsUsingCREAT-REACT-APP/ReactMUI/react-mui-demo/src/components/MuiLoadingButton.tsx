import { Stack } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import SaveIcon from '@mui/icons-material/Save'
const MuiLoadingButton = () => {
  return (
    
    <Stack spacing={2} direction='row'>
        <LoadingButton variant="outlined">submit</LoadingButton>
        <LoadingButton loading variant="outlined">submit</LoadingButton>
        <LoadingButton variant="outlined" loadingIndicator='Loading...'>Fetch data</LoadingButton>
        <LoadingButton loading variant="outlined" loadingIndicator='Loading...'>Fetch data</LoadingButton>

        <LoadingButton variant="outlined" loadingPosition="start" startIcon={<SaveIcon/>}></LoadingButton>
        <LoadingButton loading variant="outlined" loadingPosition="start" startIcon={<SaveIcon/>}></LoadingButton>
    </Stack>

  )
}

export default MuiLoadingButton