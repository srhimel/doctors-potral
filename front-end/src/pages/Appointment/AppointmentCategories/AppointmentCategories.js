import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Row from '../../components/styledComponents/Row';
import Booking from '../Booking.js/Booking';
const AppointmentCategories = ({ date }) => {
    const timeSlot = [
        {
            id: 1,
            name: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            space: 10
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '10:05 am – 11:30 am',
            space: 10
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '  5:00 pm – 6:30 pm',
            space: 10
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: ' 7:00 am – 8:30 am',
            space: 10
        },
        {
            id: 5,
            name: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            space: 10
        },
        {
            id: 6,
            name: 'Gummy Bear',
            time: ' 7:00 am – 8:30 am',
            space: 10
        }
    ]
    return (
        <Box sx={{ py: 8 }}>
            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" color="#5FC7C7" sx={{ fontWeight: 700, mb: 1, mt: 1 }}>Available Appointments on {date.toDateString()}</Typography>

                </Box>
                <Box sx={{ textAlign: 'center', py: 5 }}>
                    <Row spacing={3}>
                        {
                            timeSlot.map(slot => <Booking key={slot.id} slot={slot} date={date} />)
                        }
                    </Row>
                </Box>
            </Container>
        </Box>
    );
};

export default AppointmentCategories;