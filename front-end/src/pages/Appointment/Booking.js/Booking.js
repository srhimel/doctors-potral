import React from 'react';
import Col4 from '../../components/styledComponents/Col4';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import BookingModal from '../BookingModal/BookingModal';
import { Button } from '@mui/material';
const Booking = ({ slot, date }) => {
    const { name, time, space } = slot;
    const [openBooking, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Col4>
                <Paper elevation={1} sx={{
                    p: 3, boxShadow: '0 0 3px #ccc', ':hover': {
                        boxShadow: '0 0 8px #ccc'
                    }
                }}>
                    <Typography variant="h5" color="#1CC7C1" sx={{ fontWeight: 'bold' }} >{name}</Typography>
                    <Typography variant="h6" color="#203047" >{time}</Typography>
                    <Typography variant="caption" color="#203047" >{space} space Available </Typography>
                    <br />
                    <br />
                    <Button sx={{ boxShadow: 'none', borderRadius: 0, bgcolor: '#5FC7C7', ':hover': { bgcolor: 'info.light' } }} variant="contained" onClick={handleOpen}>Book Appointment</Button>

                </Paper>
            </Col4>
            <BookingModal open={openBooking} handleClose={handleClose} slot={slot} date={date}></BookingModal>

        </>
    );
};

export default Booking;