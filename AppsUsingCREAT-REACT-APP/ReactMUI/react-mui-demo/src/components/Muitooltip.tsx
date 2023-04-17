import { Tooltip, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
const Muitooltip = () => {
  return (
    <>
        <Tooltip title='Delete'>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>

        <Tooltip title='Delete' placement="right-start">
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>

        <Tooltip title='Delete' placement="right-start" arrow>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>

        <Tooltip title='Delete' placement="right-start" 
        arrow
        enterDelay={500}
        leaveDelay={200}
        >
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
    </>
  )
}

export default Muitooltip