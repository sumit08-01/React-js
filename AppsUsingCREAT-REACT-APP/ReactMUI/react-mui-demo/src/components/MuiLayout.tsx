import { Box } from "@mui/material"
import { height } from "@mui/system"

const MuiLayout = () => {
  return (
    <>
    <Box 
    // component='span'
    sx={{backgroundColor : 'primary.main',
    color :'white',
    height : '100px',
    width : '100px',
    padding : '16px',
    '& : hover' : {
        backgroundColor : 'primary.light',
        },
        }}
    >
        MyCodelskjd
    </Box>


    <Box display='flex' height='100px' width='100px' bgcolor='success.light'
    p={2}
    >   
    </Box>
    </>
  )
}

export default MuiLayout