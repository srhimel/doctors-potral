import { Typography } from '@mui/material';
import React from 'react';
import Calender from '../components/Calender/Calender';
import Footer from '../components/Footer/Footer';
import ContentHeader from '../components/styledComponents/ContentHeader';

import AppointmentCategories from './AppointmentCategories/AppointmentCategories';
const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <>
            <ContentHeader>
                <Typography variant="h2" color="#203047" sx={{ fontWeight: 500, mb: 3, textAlign: 'center' }}> Appointment</Typography>
                <Calender date={date} setDate={setDate}></Calender>
            </ContentHeader>
            <AppointmentCategories date={date} />
            <Footer />
        </>
    );
};

export default Appointment;