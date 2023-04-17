// import React from 'react' //rafc
import { Stack,Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import  FormatItalicIcon  from "@mui/icons-material/FormatItalic";
import  FormatUnderlinedIcon  from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";


export const Muibutton = () => {
    const[formats, setFormats] = useState<string | null>(null)
    console.log({formats,});
    const handleFormatChange = (_event : React.MouseEvent<HTMLElement>,updatedFormats : string | null) => {
        setFormats(updatedFormats)
    }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="text" >Text</Button> 
            {/* used for popup button */}
            <Button variant="contained">contained</Button> 
            {/* used for register  and login button */}
            <Button variant="outlined">outlined</Button> 
            {/* used for cancel or go back button */}
            <Button variant="text" href="https://google.com">Text</Button> 
            {/* palette for colors */}
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant="contained" color="primary">primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" color="info">Info</Button>
            <Button variant="contained" color="success">Success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>

        <Stack spacing={2}direction='row'>
            <Button variant="contained" startIcon={<SendIcon/>} disableRipple onClick={()=>alert('Clicked')}>Send</Button>
            <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton aria-lable='send' color='success' size='small'>
                <SendIcon/>
            </IconButton>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup variant="contained">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined" orientation="vertical" size='small' color='secondary' onClick={()=> alert('Left Clicked')} aria-lable='alignment button group' >
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size='small' color="success" orientation="vertical" >
                <ToggleButton value='bold' aria-label="bold" ><FormatBoldIcon/></ToggleButton>
                <ToggleButton value='italic' aria-label="italic" ><FormatItalicIcon/></ToggleButton>
                <ToggleButton value='underlined' aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}
export default Muibutton;