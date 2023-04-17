import { Box ,TextField, MenuItem} from "@mui/material"
import React, { useState } from "react"

export const MuiSelect = () => {
    const [country, setCountry] = useState('')
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setCountry(event.target.value as string)
    }
    const [countries, setCountries] = useState<string[]>([])
    const handlerChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value 
        setCountries(typeof value ==='string' ? value.split(',') : value)
    }
  return (
    <>
    <Box width='250px' >
        <TextField label='Select country' select value={country} onChange={handleChange} fullWidth>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='USA'>USA</MenuItem>
        <MenuItem value='AU'>Austraia</MenuItem>
        </TextField>
    </Box>

    <Box width='250px'>
        <TextField label='Select country' select 
        value={countries} 
        onChange={handlerChange} 
        fullWidth
        SelectProps={{multiple : true,}}
        size='small'
        color="secondary"
        helperText='Please select your country'
        
        >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='USA'>USA</MenuItem>
        <MenuItem value='AU'>Austraia</MenuItem>
        </TextField>
    </Box>

    
    </>
  )
}
