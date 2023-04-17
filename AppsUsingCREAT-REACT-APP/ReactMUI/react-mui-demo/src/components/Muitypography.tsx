import { Typography } from "@mui/material"     //rafc

export const Muitypography = () => {
  return (
    <div>
        <Typography variant="h1"> h1 Heading</Typography>
        <Typography variant="h2"> h2 Heading</Typography>
        <Typography variant="h3"> h3 Heading</Typography>
        <Typography variant="h4"> h4 Heading</Typography>

        <Typography variant="h4" component="h1" gutterBottom> h4 Heading</Typography> 
        {/* gutterBottom given SPACE in the bottom */}
        <Typography variant="h5"> h5 Heading</Typography>
        <Typography variant="h6"> h6 Heading</Typography>

        <Typography variant="subtitle1">sub title1</Typography>
        <Typography variant="subtitle2"> sub title2</Typography>

        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatibus laborum expedita voluptas illum? Sapiente voluptas minus odit, saepe suscipit architecto perferendis maxime! Ipsa accusantium numquam, molestiae cum ipsum fuga!</Typography> 
        {/* body1 is default */}
        <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime esse inventore totam aliquam suscipit, commodi earum. Quo possimus laboriosam similique exercitationem earum officiis, sed vero ex accusantium quam, facilis inventore?</Typography>

    </div>
  )
}
export default Muitypography;