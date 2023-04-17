import { Stack, Rating } from "@mui/material"
import React, { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const MuiRatings = () => {
    const [value, setValue] = useState<number | null>(null) //null=3 then the rating display is three 
    console.log(value);
    
    const handleChange = (_event:React.ChangeEvent<{}>, newValue : number | null) =>{setValue(newValue)}
  return (
    <Stack spacing={2}>
        <Rating  
        value={value} 
        onChange={handleChange} 
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error"/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        readOnly
        // highlightSelectedOnly
        />
    </Stack>
  )
}

export default MuiRatings