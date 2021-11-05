import React from 'react';
import Box from '@mui/material/Box';
import Row from '../../components/styledComponents/Row';
import Col5 from '../../components/styledComponents/Col5';
import doctor from '../../../images/doctor.png'
import apbg from '../../../images/apbg.png'
import Col7 from '../../components/styledComponents/Col7';
import { Container, Typography } from '@mui/material';
import Btn from '../../components/styledComponents/Btn';

const Appoinment = () => {
    const appSection = {
        backgroundImage: `url(${apbg})`,
        backgroundColor: '#3A4256',
        backgroundBlendMode: "multiply",
        backgroundSize: 'cover'

    }
    return (
        <Box sx={{ mt: 30 }} style={appSection}>
            <Container maxWidth="xl" >
                <Row spacing={8} align={'center'}>
                    <Col5>
                        <img src={doctor} alt="" width="100%" style={{ marginTop: '-190px', display: 'block' }} />
                    </Col5>
                    <Col7>
                        <Typography variant="h4" color="#5FC7C7" sx={{ fontWeight: 700, mb: 1, mt: 1 }}>APPOINTMENT</Typography>
                        <Typography variant="h2" color="#fff" sx={{ fontWeight: 500, mb: 2 }}>Make an appointment <br />
                            Today</Typography>
                        <Typography variant="body1" color="#fff" sx={{ fontSize: '18px', lineHeight: '34px', fontWeight: 400, mr: 10, mb: 1 }}>It is a long established fact that a reader will be distractedby the readable
                            content of a page when looking at its

                        </Typography>

                        <Btn>Learn more</Btn>
                        <Box sx={{ pb: 4 }}> &nbsp;</Box>

                    </Col7>
                </Row>
            </Container>
        </Box>
    );
};

export default Appoinment;