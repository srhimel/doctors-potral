import { Container, List, ListItem, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import Btn from '../styledComponents/Btn';
import Col3 from '../styledComponents/Col3';
import Row from '../styledComponents/Row';
import footerBg from '../../../images/footer-bg.png';

const Footer = () => {
    return (
        <Box sx={{ pt: 10 }} style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover' }}>
            <Container>
                <Row align={'top'}>
                    <Col3>
                        <Typography variant="h5" color="#5FC7C7" sx={{ fontWeight: 700, mb: 1 }}>Quick Links</Typography>
                        <List>
                            <ListItem sx={{ py: 0, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Emergency Dental Care</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Check Up</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Treatment of Personal Diseases</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Tooth Extraction</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Tooth Torch</Typography>
                            </ListItem>
                        </List>
                    </Col3>
                    <Col3>
                        <Typography variant="h5" color="#5FC7C7" sx={{ fontWeight: 700, mb: 1 }}>Services</Typography>
                        <List>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Smile Fixer</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Gummy Bear</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Tooth Paste</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Block Drummer</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Sudden Flex</Typography>
                            </ListItem>
                        </List>
                    </Col3>
                    <Col3>
                        <Typography variant="h5" color="#5FC7C7" sx={{ fontWeight: 700, mb: 1 }}>Oral Health</Typography>
                        <List>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Oral Box</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Cholgate</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Peoposadant</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Tooth Mixer</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Harly Queen</Typography>
                            </ListItem>
                        </List>
                    </Col3>
                    <Col3>
                        <Typography variant="h5" color="#5FC7C7" sx={{ fontWeight: 700, mb: 1 }}>Our Address</Typography>
                        <List>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>New York - 101010 Hudson Time</Typography>

                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Call Now</Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, my: 1, px: 0, mx: 0 }}>
                                <Btn>+88012456789</Btn>
                            </ListItem>
                        </List>
                    </Col3>
                </Row>

                <Box sx={{ pt: 4, pb: 2, textAlign: 'center' }}>
                    <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Copyright 2022 All Rights Reserved</Typography>

                </Box>
            </Container>
        </Box>
    );
};

export default Footer;