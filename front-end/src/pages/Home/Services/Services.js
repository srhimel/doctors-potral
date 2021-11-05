import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Row from '../../components/styledComponents/Row';
import Service from './Service/Service';

const Services = () => {
    return (
        <Box sx={{ textAlign: 'center', py: 5 }}>
            <Container maxWidth="xl">
                <Typography variant="h4" color="#5FC7C7" sx={{ fontWeight: 700, mb: 3 }}>OUR SERVICES</Typography>
                <Typography variant="h2" color="#203047" sx={{ fontWeight: 500 }}>Services We Provide</Typography>
                <Box sx={{ mt: 10 }}>
                    <Row spacing={{
                        xs: 8,
                        sm: 10,
                        md: 20
                    }} >
                        <Service />
                    </Row>
                </Box>
            </Container>
        </Box>
    );
};

export default Services;