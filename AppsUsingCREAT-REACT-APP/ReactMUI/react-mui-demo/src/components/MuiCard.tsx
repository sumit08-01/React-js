import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material"


const MuiCard = () => {
  return (
    <Box width='300px'>
       <Card>
            <CardMedia
            component='img'
            height='140px'
            image='https://https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fforrest-beautiful-morning-sun-spring-40170350.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fforrest.html&tbnid=Yz8oB0W86UPmxM&vet=12ahUKEwjKs7qC1_b5AhUDi9gFHceqAuMQMygAegUIARDcAQ..i&docid=cYB0f_PyRS-yIM&w=800&h=533&q=forrest&safe=active&ved=2ahUKEwjKs7qC1_b5AhUDi9gFHceqAuMQMygAegUIARDcAQ://www.google.com/search?q=forrest&tbm=isch&ved=2ahUKEwj_z7n71vb5AhUDjtgFHe3rByUQ2-cCegQIABAA&oq=forrest&gs_lcp=CgNpbWcQAzIKCAAQsQMQgwEQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoHCCMQ6gIQJ1DNB1isMWDzPGgBcAB4AIABhgOIAd8OkgEHMC4zLjQuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=kEMSY__HCYOc4t4P7defqAI&bih=647&biw=681&rlz=1C1GCEB_enIN1007IN1007&safe=active#imgrc=Yz8oB0W86UPmxM.unsplash.com/random'
            alt='unsplash image'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component='div' >
                    React
                </Typography>
                <Typography variant="body2" color='text.secondary'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Commodi, nam? Vero quos inventore cum ad et ipsam rem.
                </Typography>
            </CardContent>
            <CardActions>
                    <Button size="small">share</Button>
                    <Button size="small">Learn More</Button>
            </CardActions>
       </Card>
    </Box>
  )
}

export default MuiCard