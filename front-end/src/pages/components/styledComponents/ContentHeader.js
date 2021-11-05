import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';

import Header from '../../components/Header/Header';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const ContentHeader = ({ children }) => {
    return (
        <Box style={{ backgroundImage: `url(${bg})` }} className="home-header">
            <Header />
            <Box sx={{
                pt: {
                    xs: 4,
                    sm: 6,
                    lg: 8,
                    xl: 14
                },
                pb: {
                    xs: 10,
                    sm: 14,
                    lg: 15,
                    xl: 22
                }
            }}>
                <Container maxWidth="xl">
                    <Grid container alignItems='center' spacing={{ xs: 2, sm: 3, md: 4, xl: 28 }} columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}>
                        <Grid item xs={4} sm={3} md={4} lg={5}>
                            <Box>
                                {children}
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={5} md={4} lg={7}>
                            <img src={chair} alt="" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Box>
    );
};

export default ContentHeader;