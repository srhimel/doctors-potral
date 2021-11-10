import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
const Appointments = ({ date }) => {
    const [appointments, setAppointments] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/appointments?email=${user.email}&date=${date}`)
            .then(res => setAppointments(res.data))
            .catch(error => console.log(error));
    }, [user, date])
    return (
        <Box sx={{ backgroundColor: '#fff', p: 2 }}>
            appointments

            <TableContainer component={Paper}>
                <Table aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Schedule</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment.patientName}
                                </TableCell>
                                <TableCell align="center">{appointment.time}</TableCell>
                                <TableCell align="right">hi</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};

export default Appointments;