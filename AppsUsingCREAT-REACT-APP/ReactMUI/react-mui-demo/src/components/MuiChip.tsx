import { Stack, Chip, Avatar} from "@mui/material"
import FaceIcon from '@mui/icons-material/Face'
import { useState } from "react"

const MuiChip = () => {
    const [chips, setChips] = useState(['Chip1','Chip2', 'Chip3']);
    const handleDelete =(chipToDelete:string) =>{
        setChips((chips) => chips.filter((chip)=> chip !== chipToDelete))
    }
  return (
    <Stack direction='row' spacing={2}>
        <Chip label='chip' />
        <Chip label='color'  color="primary"/>
        <Chip label='size'  color="primary" size="small"/>
        <Chip label='chip-outlined'  color="secondary" variant="outlined"/>
        <Chip label='Avatar' avatar={<Avatar>V</Avatar>}   variant="outlined"/>
        {/* <Chip label='Face-Icon' avatar={<Avatar>V</Avatar>}   variant="outlined" icon={<FaceIcon/>}/> */}
        <Chip label='Click' color="success" onClick={()=> alert('Clicked')} />
        <Chip label='delete' color="error" onClick={()=> alert('Clicked')} onDelete={()=>alert('Delete handler called')}/>
        <Chip label='delete' color="error" onClick={()=> alert('Clicked')} 
        onDelete={()=>alert('Delete handler called')}/>

        {chips.map((chip) => (
            <Chip key={chip} label={chip} onDelete = { () => handleDelete(chip)} />
        ))}
    </Stack>
  )
}

export default MuiChip;