import {Box,List, ListItem, ListItemText, ListItemIcon,Avatar, ListItemAvatar,ListItemButton, Divider} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const MuiList = () => {
  return (
    <Box sx={{width:'400px', bgcolor:'#efefef'}}>
        <List>
            <ListItem>
                <ListItemText primary='List item 1'/>
            </ListItem>
            <ListItem>
                <ListItemText primary='List item 2'/>
            </ListItem>
            <ListItem>
                <ListItemText primary='List item 3'/>
            </ListItem>
        </List>


        <List>
            <ListItem>
                <ListItemIcon>
                    <MailIcon/>
                </ListItemIcon>
                <ListItemText primary='List item 1'/>
            </ListItem>
            <ListItem>
            <ListItemIcon>
                    <MailIcon/>
                </ListItemIcon>
                <ListItemText primary='List item 2'/>
            </ListItem>
            <ListItem>
            <ListItemIcon>
                    <MailIcon/>
                </ListItemIcon>
                <ListItemText primary='List item 3'/>
            </ListItem>
        </List>


        <List>
            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                  <Avatar>
                    <MailIcon/>
                  </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 1' secondary='secondary text'/>
            </ListItem>
            <ListItem>
            <ListItemIcon>
                    <ListItemAvatar>
                  <Avatar>
                    <MailIcon/>
                  </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 2' secondary='secondary text'/>
            </ListItem>
            <ListItem>
            <ListItemIcon>
                    <ListItemAvatar>
                  <Avatar>
                    <MailIcon/>
                  </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 3' secondary='secondary text'/>
            </ListItem>
        </List>



        <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <ListItemAvatar>
                  <Avatar>
                    <MailIcon/>
                  </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 1' secondary='secondary text'/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemButton>
            <ListItemIcon>
                    <ListItemAvatar>
                  <Avatar>
                    <MailIcon/>
                  </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 2' secondary='secondary text'/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                    <ListItemAvatar>
                  <Avatar>
                    <MailIcon/>
                  </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 3' secondary='secondary text'/>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}

export default MuiList