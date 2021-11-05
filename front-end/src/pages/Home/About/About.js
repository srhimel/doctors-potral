import React from 'react';
import Box from '@mui/material/Box';
import Row from '../../components/styledComponents/Row';
import Col5 from '../../components/styledComponents/Col5';
import treatment from '../../../images/treatment.png'
import Col7 from '../../components/styledComponents/Col7';
import { Container, Typography } from '@mui/material';
import Btn from '../../components/styledComponents/Btn';

const About = () => {
    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="xl">
                <Row spacing={8} align={'center'}>
                    <Col5>
                        <img src={treatment} alt="" width="100%" />
                    </Col5>
                    <Col7>
                        <Typography variant="h2" color="#203047" sx={{ fontWeight: 500, mb: 6 }}>Exceptional Dental <br />
                            Care, on Your Terms</Typography>
                        <Typography variant="body1" color="#B4B4B4" sx={{ fontSize: '18px', lineHeight: '34px', fontWeight: 400, mr: 10, mb: 2 }}>It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsumis that it has
                            a more-or-less normal distribution of letters,as opposed
                            to using ‘Content here, content here’, making it look like
                            readable English. Many desktop publishing packages
                            and web page
                        </Typography>
                        <Typography variant="body1" color="#B4B4B4" sx={{ fontSize: '18px', lineHeight: '34px', fontWeight: 400, mr: 10, mb: 6 }}>I will be distracted
                            by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsumis that it has
                            a more-or-less normal distribution of letters,as opposed
                            to using ‘Content here, content here’, making it look like
                            readable English. Many desktop publishing packages
                            and web page
                        </Typography>
                        <Btn>Learn more</Btn>
                    </Col7>
                </Row>
            </Container>
        </Box>
    );
};

export default About;