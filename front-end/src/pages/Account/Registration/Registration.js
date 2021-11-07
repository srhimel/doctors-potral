import React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
const Registration = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', mb: 2 }}>

                <Typography id="transition-modal-title" color="#1CC7C1" variant="h6" component="h2">
                    Register
                </Typography>
            </Box>
            <form>

                <TextField
                    label="Your Name"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: '100%', my: 1 }}
                />
                <TextField
                    label="Phone Number"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: '100%', my: 1 }}
                />
                <TextField
                    label="Email Address"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: '100%', my: 1 }}
                />

                <Box sx={{ textAlign: 'right', mt: 1 }}>
                    <Button type="submit" sx={{ boxShadow: 'none', borderRadius: 0, bgcolor: '#5FC7C7', ':hover': { bgcolor: 'info.light' } }} variant="contained">Register Now</Button>
                </Box>

            </form>
        </>
    );
};

export default Registration;