import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext'


const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-aria-label="breadcrumb" >
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catlog</Link>
            <Link underline="hover" href="#">Accesories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>

        <Breadcrumbs aria-aria-label="breadcrumb" separator='_' >
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catlog</Link>
            <Link underline="hover" href="#">Accesories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>

        <Breadcrumbs aria-aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small"/>} >
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catlog</Link>
            <Link underline="hover" href="#">Accesories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>


        <Breadcrumbs aria-aria-label="breadcrumb" 
        separator={<NavigateNextIcon 
        fontSize="small"/>}
        maxItems={2}
        >
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catlog</Link>
            <Link underline="hover" href="#">Accesories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>

        <Breadcrumbs aria-aria-label="breadcrumb" 
        separator={<NavigateNextIcon 
        fontSize="small"/>}
        maxItems={2}
        itemsAfterCollapse={2}
        >
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catlog</Link>
            <Link underline="hover" href="#">Accesories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>

        <Breadcrumbs aria-aria-label="breadcrumb" 
        separator={<NavigateNextIcon 
        fontSize="small"/>}
        maxItems={2}
        itemsBeforeCollapse={2}
        >
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catlog</Link>
            <Link underline="hover" href="#">Accesories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs