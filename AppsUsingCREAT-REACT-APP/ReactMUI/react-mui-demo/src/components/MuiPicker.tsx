import {Stack, TextField} from '@mui/material'
// import { DatePicker,TimePicker, DateTimePicker } from '@mui/lab'
// import {useState} from 'react'

// const MuiPicker = () => {
   
//     const [selectedDate, setSelectedDate] = useState<Date | null>(null)
//     const [selectedTime, setSelectedTime] = useState<Date | null>(null)
//     const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)
//     console.log({selectedDate});
//     console.log({selectedTime});
//     console.log({selectedDateTime});
//     console.log({selectedTime : selectedTime && selectedTime.toLocaleTimeString(),});
    
//   return (
//     <Stack spacing={4} sx={{width:"250px"}}>
//         <DatePicker 
//         label='Date picker' 
//         renderInput={(params) => <TextField {...params} />} 
//         value={selectedDate}
//         onChange={(newValue) => {
//             setSelectedDate(newValue)
//         }} />


//         <TimePicker 
//         label='Time picker' 
//         renderInput={(params) => <TextField {...params} />} 
//         value={selectedTime}
//         onChange={(newValue) => {
//             setSelectedTime(newValue)
//         }} />


//         <DateTimePicker 
//         label='DateTime picker' 
//         renderInput={(params) => <TextField {...params} />} 
//         value={selectedDateTime}
//         onChange={(newValue) => {
//             setSelectedDateTime(newValue)
//         }} />
//     </Stack>
//   )
// }

// export default MuiPicker