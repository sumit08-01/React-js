import { Stack,Link, Typography} from "@mui/material"



const MuiLink = () => {
  return (
    <Stack direction='row' spacing={2} m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary'>secondary</Link>
        <Link href='#' color='secondary' underline="hover">underlineHover</Link>
        <Link href='#' color='secondary' underline="none">underlineHoverNone</Link>
        <Typography variant="h6">
        <Link href='#' color='secondary' >H6 size</Link>
        </Typography>
        <Link href='#' variant="body2">Body2Link</Link>
    </Stack>
  )
}

export default MuiLink