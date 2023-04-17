import { AppBar, Toolbar,IconButton,Typography, Stack, Button } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

const MuiNavBar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge='start' color="inherit" aria-label="logo">
                <CatchingPokemonIcon/>
            </IconButton>
            <Typography variant="h6" component='div' sx={{flexGrow:1}}>
                POKEMONAPP
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Price</Button>
                <Button color="inherit">about</Button>
                <Button color="inherit">Login</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavBar