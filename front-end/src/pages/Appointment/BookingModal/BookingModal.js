import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 5,
};



const BookingModal = ({ open, handleClose, slot, date }) => {
    const { name, time } = slot;
    const { user } = useAuth();
    const initialInfo = { serviceName: name, time, date: date.toLocaleDateString(), patientName: user?.displayName, email: user?.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo);

    }


    const [snackOpen, setSnackOpen] = useState(false);

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackOpen(false);
    };
    const handleBooking = e => {
        axios.post('http://localhost:5000/appointments', bookingInfo)
            .then((res) => {
                if (res.data.insertedId) {
                    setSnackOpen(true);
                }

            })
            .then(() => {
                handleClose();
            })
            .catch();
        e.preventDefault();
    }


    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Box sx={{ textAlign: 'center', mb: 2 }}>

                            <Typography id="transition-modal-title" color="#1CC7C1" variant="h6" component="h2">
                                {name}
                            </Typography>
                        </Box>
                        <form onSubmit={handleBooking}>
                            <TextField
                                id="outlined-size-small"
                                defaultValue={time}
                                disabled
                                size="small"
                                sx={{ width: '100%', my: 1 }}
                            />
                            <TextField
                                label="Your Name"
                                defaultValue={user?.displayName}
                                id="outlined-size-small"
                                name="patientName"
                                onBlur={handleOnBlur}
                                size="small"
                                sx={{ width: '100%', my: 1 }}
                            />
                            <TextField
                                label="Phone Number"
                                id="outlined-size-small"
                                size="small"
                                name="phone"
                                onBlur={handleOnBlur}
                                sx={{ width: '100%', my: 1 }}
                            />
                            <TextField
                                label="Email Address"
                                defaultValue={user?.email}
                                id="outlined-size-small"
                                size="small"
                                name="email"
                                onBlur={handleOnBlur}
                                sx={{ width: '100%', my: 1 }}
                            />
                            <TextField
                                defaultValue={date.toDateString()}
                                disabled
                                id="outlined-size-small"
                                size="small"
                                sx={{ width: '100%', my: 1 }}
                            />
                            <Box sx={{ textAlign: 'right', mt: 1 }}>
                                <Button type="submit" sx={{ boxShadow: 'none', borderRadius: 0, bgcolor: '#5FC7C7', ':hover': { bgcolor: 'info.light' } }} variant="contained">Book Now</Button>
                            </Box>

                        </form>
                    </Box>
                </Fade>
            </Modal>

            <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleSnackClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
                    Appointment submitted successfully!
                </Alert>
            </Snackbar>


        </>
    );
};

export default BookingModal;