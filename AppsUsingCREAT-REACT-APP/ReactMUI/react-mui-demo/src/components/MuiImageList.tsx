import { Stack, ImageList, ImageListItem,Box, ImageListItemBar} from "@mui/material"




const MuiImageList = () => {
   
  return (

    <Stack spacing={4}>
        <ImageList 
        sx={{width:500, height:450}}
        cols={3}
        rowHeight={164}>
            {
                itemData.map(item => (
                    <ImageListItem key={item.img}>
                        <img src={'${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2'} alt ={item.title} loading='lazy'/>
                        <ImageListItemBar title={item.title}/>
                    </ImageListItem>))}
        </ImageList>

        <ImageList 
        variant="woven"
        sx={{width:500, height:450}}
        cols={3}
        gap={8}>
            {
                itemData2.map(item => (
                    <ImageListItem key={item.img}>
                        <img src={'${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2'} alt ={item.title} loading='lazy'/>
                    </ImageListItem>))}
        </ImageList>

        <Box sx={{width:500, height:450, overflow:'scroll'}} >
        <ImageList 
        variant="masonry"
        cols={3}
        gap={8}>
            {
                itemData3.map(item => (
                    <ImageListItem key={item.img}>
                        <img src={'${item.img}?w=248&fit=crop&auto=format&dpr=2'} alt ={item.title} loading='lazy'/>
                    </ImageListItem>))}
        </ImageList>
        </Box>
    </Stack>
  )
}
 const itemData = [
        {
            img:'https://unsplash.com/photos/_jsN7dBqh30',
            title : 'photo'
        },
        {
            img :'https://www.istockphoto.com/photo/classmates-jumping-from-bench-at-schoolyard-gm1146215394-308782206?utm_source=unsplash&utm_medium=affiliate&utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Fphotos%2F_jsN7dBqh30&utm_term=motherhood%3A%3A%3A',
            title : 'photo'
        }
    ]

 const itemData2= [
        {
            img:'https://unsplash.com/photos/_jsN7dBqh30',
            title : 'photo'
        },
        {
            img :'https://www.istockphoto.com/photo/classmates-jumping-from-bench-at-schoolyard-gm1146215394-308782206?utm_source=unsplash&utm_medium=affiliate&utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Fphotos%2F_jsN7dBqh30&utm_term=motherhood%3A%3A%3A',
            title : 'photo'
        }
    ]
 const itemData3= [
        {
            img:'https://unsplash.com/photos/_jsN7dBqh30',
            title : 'photo'
        },
        {
            img :'https://www.istockphoto.com/photo/classmates-jumping-from-bench-at-schoolyard-gm1146215394-308782206?utm_source=unsplash&utm_medium=affiliate&utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Fphotos%2F_jsN7dBqh30&utm_term=motherhood%3A%3A%3A',
            title : 'photo'
        }
    ]

export default MuiImageList