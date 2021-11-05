import Box from '@mui/material/Box';
import React from 'react';
import Container from '@mui/material/Container'
import Row from '../../components/styledComponents/Row';
import Col4 from '../../components/styledComponents/Col4';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

const Details = () => {
    return (
        <Box>
            <Container maxWidth="xl">
                <Box style={{ marginTop: '-20px' }}>
                    <Row spacing={2}>
                        <Col4>
                            <Box sx={{
                                borderRadius: 2,
                                mt: -8,
                                mb: 8,
                                px: 4,
                                py: 4,
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#1CC7C1',
                                gap: 3,
                                '&:hover': {
                                    backgroundColor: '#3A4256'
                                },
                            }}>
                                <AccessTimeIcon sx={{ fontSize: 65, color: 'white' }} />
                                <Box>
                                    <Typography variant="h5" color="white" sx={{ mb: 1, fontWeight: '500' }}>Opening Hours</Typography>
                                    <Typography variant="p" color="white">Mon- Sat: 10AM-8PM</Typography>
                                </Box>
                            </Box>
                        </Col4>

                        <Col4>
                            <Box sx={{
                                borderRadius: 2,
                                mt: -8,
                                mb: 8,
                                px: 4,
                                py: 4,
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#3A4256',
                                gap: 3,
                                '&:hover': {
                                    backgroundColor: '#1CC7C1'
                                },
                            }}>
                                <RoomIcon sx={{ fontSize: 65, color: 'white' }} />
                                <Box>
                                    <Typography variant="h5" color="white" sx={{ mb: 1, fontWeight: '500' }}>Visit our location</Typography>
                                    <Typography variant="p" color="white">Brooklyn, NY 10036, United States</Typography>
                                </Box>
                            </Box>
                        </Col4>
                        <Col4>
                            <Box sx={{
                                borderRadius: 2,
                                mt: -8,
                                mb: 8,
                                px: 4,
                                py: 4,
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#1CC7C1',
                                gap: 3,
                                '&:hover': {
                                    backgroundColor: '#3A4256'
                                },
                            }}>
                                <WifiCalling3Icon sx={{ fontSize: 65, color: 'white' }} />
                                <Box>
                                    <Typography variant="h5" color="white" sx={{ mb: 1, fontWeight: '500' }}>Contact us now</Typography>
                                    <Typography variant="p" color="white">+000 123 456769</Typography>
                                </Box>
                            </Box>
                        </Col4>
                    </Row>
                </Box>

            </Container >

        </Box >
    );
};

export default Details;