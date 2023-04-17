import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    }
from '@mui/material'

const MuiTabel = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table aria-label='simple tabel' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First name</TableCell>
                    <TableCell>Last name</TableCell>
                    <TableCell align='center'>email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row =>(
                        <TableRow key={row.id} sx ={{'&:last-child td, &:last-child th':{border:0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                            
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MuiTabel

const tableData =[
    {
    id:1,
    first_name: 'Gason',
    last_name : 'gond',
    email : 'sunsd@gmail.com',
    gender : 'Femail',
    id_address : '35.89.56.00'
    },
    {
    id:2,
    first_name: 'Gon',
    last_name : 'g\nd',
    email : 'sunsdil.com',
    gender : 'mail',
    id_address : '35.49.56.00'
    },
    {
    id:3,
    first_name: 'Ganjksson',
    last_name : 'gondknd',
    email : 'gsd@gmail.com',
    gender : 'Femail',
    id_address : '35.09.56.00'
    },
    {
    id:1,
    first_name: 'Gason',
    last_name : 'gond',
    email : 'sunsd@gmail.com',
    gender : 'Femail',
    id_address : '35.89.56.00'
    },
    {
    id:2,
    first_name: 'Gon',
    last_name : 'g\nd',
    email : 'sunsdil.com',
    gender : 'mail',
    id_address : '35.49.56.00'
    },
    {
    id:3,
    first_name: 'Ganjksson',
    last_name : 'gondknd',
    email : 'gsd@gmail.com',
    gender : 'Femail',
    id_address : '35.09.56.00'
    },
    {
    id:4,
    first_name: 'Gandjlksfson',
    last_name : 'gd',
    email : 'sunsd@gmail.com',
    gender : 'Femail',
    id_address : '35.66.56.00'
    },
    {
    id:5,
    first_name: 'ason',
    last_name : 'nd',
    email : 'd@gmail.com',
    gender : 'mail',
    id_address : '35.89.88.00'
    },
]