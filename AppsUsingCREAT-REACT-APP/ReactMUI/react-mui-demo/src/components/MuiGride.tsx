import { Box, Grid, Paper} from "@mui/material"


const MuiGride = () => {
  return (
    <Paper sx={{padding :'32px'}} elevation={4}>

    <Box 
    sx={{backgroundColor : 'primary.main',
    color :'white',
    height : '100px',
    width : '100px',
    padding : '16px',
    '& : hover' : {
            backgroundColor : 'primary.light',
                  },
    }}>
       MyCode
    </Box>

    <Box display='flex' height='100px' width='100px' bgcolor='success.light'
    p={2}
    >   
    </Box>


{/* 
    <Grid container my={4} spacing={2}>
        rowSpacing & columnSpacing is also valid like:rowSpacing={2}, columnSpacing={2}
       <Grid item xs={12} sm={6} > 
       {we can add xs is as auto}
            <Box bgcolor='primary.light' p={2}>Item1</Box>
       </Grid> 
       <Grid item xs={12} sm={6}> 
            <Box bgcolor='primary.light' p={2}>Item2</Box>
       </Grid> 
       <Grid item xs={12} sm={6}> 
            <Box bgcolor='primary.light' p={2}>Item3</Box>
       </Grid> 
       <Grid item xs={12} sm={6}> 
            <Box bgcolor='primary.light' p={2}>Item4</Box>
       </Grid> 
       
    </Grid> */}
    </Paper>
  )
}

export default MuiGride;