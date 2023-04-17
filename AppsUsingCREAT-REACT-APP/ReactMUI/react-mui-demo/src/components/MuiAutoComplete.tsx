import { Stack, Autocomplete, TextField } from "@mui/material"
import React, { useState } from "react"

type skill = {
    id:number
    label : string
}

const Skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']

const skillsOptions = Skills.map((skill, index) => ({
    id : index + 1,
    label : skill
}))


const MuiAutoComplete = () => {
    const [value, setValue] = useState<string | null >(null)
    const [skill, setskill] = useState<skill | null>(null)
    console.log(skill);
    
  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete options={Skills} 
        renderInput={(params) => <TextField {...params} label='Skills' />} 
        value={value}
        onChange={(event: any, newValue:string | null )=>setValue(newValue)}
        freeSolo
        />
        <Autocomplete options={skillsOptions} 
        renderInput={(params) => <TextField {...params} label='Skills' />} 
        value={skill}
        onChange={(event: any, newValue:skill | null ) => setskill(newValue)}
        
        />
    </Stack>
  )
}

export default MuiAutoComplete