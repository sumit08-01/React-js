import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
const MuiTextField = () => {
    const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label='small secondary' size='small' color='secondary'/>
        </Stack>

        <Stack direction='row' spacing={2} >
            <TextField label='Form Input' required/>
            <TextField label='Form Input' required value={value} onChange={(e)=> setValue(e.target.value)} error={!value} helperText={!value ? "Required" : "Do Not share Your password to anyone"}/>
            <TextField label='Form Input' required error/>
            <TextField label='Form Input' helperText='Do not share your password'/>
            <TextField label='Form Input' helperText='Password' type='password'/>
            <TextField label='Form Input' helperText='Password' type='password' disabled/>
            <TextField label='Read only' InputProps={{readOnly : true}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{startAdornment : <InputAdornment position='start'>$</InputAdornment>} }/>
            <TextField label='Weight' InputProps={{endAdornment : <InputAdornment position='end'>kg</InputAdornment>} }/>
        </Stack>
        
    </Stack>
  )
}

export default MuiTextField