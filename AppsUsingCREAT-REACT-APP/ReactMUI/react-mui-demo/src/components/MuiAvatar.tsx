import {Stack, Avatar, AvatarGroup} from '@mui/material'

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
        </Stack>

        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='jane Doe'/>
            <Avatar src='https://randomuser.me/api/portraits/men/51.jpg'
            alt='jane Doe'/>
        </Stack>

        
        <Stack direction='row' spacing={1}>
            <AvatarGroup max={2}>
                <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
                <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'
                alt='jane Doe'/>
                <Avatar src='https://randomuser.me/api/portraits/men/51.jpg'
                alt='jane Doe'/>
            </AvatarGroup>
        </Stack>
        

        <Stack direction='row' spacing={1}>
            <Avatar 
            variant='square'
            sx={{bgcolor:'primary.light' ,width: 48, height:48}}>BW</Avatar>
            <Avatar 
            variant='rounded'
            sx={{bgcolor:'success.light' ,width: 48, height:48}}>CK</Avatar>
        </Stack>
    </Stack>
  )
}

export default MuiAvatar