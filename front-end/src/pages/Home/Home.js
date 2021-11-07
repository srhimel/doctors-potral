import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Btn from '../components/styledComponents/Btn';
import ContentHeader from '../components/styledComponents/ContentHeader';
import About from './About/About';
import Appoinment from './Appoinment/Appoinment';
import Details from './Details/Details';

import './Home.css'
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <ContentHeader>

                <Typography variant="h2" color="#203047" sx={{ fontWeight: 500, mb: 3 }}>Your New Smile
                    Starts Here</Typography>

                <Typography variant="body1" color="#B4B4B4" sx={{ fontWeight: 400, lineHeight: 2 }}>Feeling old and not have a good breath
                    . Try our service for the new refreshing mood and don't go anywhere else otherwise they will kill you. So feel happy.</Typography>
                <Btn>Get appointment</Btn>
            </ContentHeader>
            <Details />
            <Services />
            <About />
            <Appoinment />
            <Footer />
        </>
    );
};

export default Home;